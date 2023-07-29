import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

import { useMyContext } from '../src/Context';

function ListPokemon({ navigation }) {

  const { darkMode } = useMyContext();

  const bg = darkMode.bg
  const cl = darkMode.cl
  const brd = darkMode.brd
  
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [headerVisible, setHeaderVisible] = React.useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10010');
        setPokemonList(response.data.results);
        setFilteredPokemonList(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter os dados dos Pokémons:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (name) => {
    navigation.navigate('PokemonView', { customProp: {name} })
    setHeaderVisible(!headerVisible);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNavigation(item.name)}>
      <View style={styles.item}>
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(item.url)}.png` }}
          style={styles.image}
        />
          <Text style={[styles.text, {color: cl}]}>{upCase(item.name)}</Text>
      </View>
    </TouchableOpacity>
  );

  const getPokemonIdFromUrl = (url) => {
    const regex = /\/(\d+)\//;
    const matches = url.match(regex);
    return matches ? matches[1] : '';
  };

  const handleSearch = (text) => {
    setSearchText(text);
    // Filtrar a lista de Pokémons com base no texto de pesquisa
    const filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPokemonList(filteredList);
  };

  function upCase(val) {
    return val[0].toUpperCase()+val.substr(1)
  }

  if(loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#097AFE" />
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      <Text style={[styles.title, {color: cl}]}>Pokémon List</Text>
      <TextInput
        style={[styles.input, {borderColor: brd, color: cl}]}
        placeholder="Digite o nome do Pokémon"
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredPokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        style={{height: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 0,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListPokemon;
