import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { StyledText } from './typesStyle'
import axios from 'axios';

import { Table, Row, Rows } from 'react-native-table-component';
import { BarStats } from './typesStyle'

const PokemonView = ( { route } ) => {
  const { customProp } = route.params || {};

  const [urlImagem, setUrlImagem] = useState('')
  const [name, serName] = useState('')
  const [types, setTypes] = useState([])
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)
  const tableHead = ['Nome', 'Num', 'bar']

  function upCase(val) {
    return val[0].toUpperCase()+val.substr(1) //deixar a primeira letra em maisculo
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + customProp.name.toLocaleLowerCase());
        const typeData = response.data.types
        const statsData = response.data.stats

        setUrlImagem(response.data.sprites.other['official-artwork'].front_default);
        serName(upCase(customProp.name.toLocaleLowerCase()))
        typeData.forEach(function(t){
          const temp = <StyledText type={t.type.name}><Text style={{color:"#fff"}}>{t.type.name}</Text></StyledText>
          setTypes(oldArray => [...oldArray, temp])
        })
        statsData.forEach(s => {
          const temp = [
            [s.stat.name, s.base_stat, <BarStats borderWidth={0} progress={100} width={s.base_stat} color="#097AFE" unfilledColor="#444"/>],
          ]
          setStats(oldArray => [...oldArray, temp])
        });
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter os dados dos Pokémons:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Enquanto a requisição estiver acontecendo, exibe a tela de loading
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#097AFE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <Image source={{ url: urlImagem }} style={styles.imgs} />
        <Text style={styles.texts} >{name}</Text>
        <View style={styles.typeCont}>
            {types.map(e => e)}
        </View>
        <View style={styles.statsContainer}>
          <Table borderStyle={{borderWidth: 2, borderColor: 'transparent', justifyContent: 'space-between'}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={stats} textStyle={styles.text}/>
          </Table>
        </View>
    </View>
  )
}

export default PokemonView;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    response: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    typeCont: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      flexDirection: 'row',
      gap: 5,
    },
    imgs: {
      width: 200, 
      height: 200
    },
    texts: {
      fontSize: 30,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    statsContainer: {
      flex: 1,
      position: 'relative',
      justifyContent: 'space-between',
      width: '100%'
    },  
    
  });

  // axios.get('https://pokeapi.co/api/v2/pokemon/' + text.toLocaleLowerCase())
  //       .then(response => {
  //         const type = response.data.types

  //         setUrlImagem(response.data.sprites.other['official-artwork'].front_default);
  //         serName(upCase(text.toLocaleLowerCase()))

  //         setTypes([])
  //         type.forEach(function(t){
  //           const temp = <StyledText type={t.type.name}><Text style={{color:"#fff"}}>{t.type.name}</Text></StyledText>
  //           setTypes(oldArray => [...oldArray, temp])
  //         })

  //         showSheet()
  //         onChangeText('')
  //         Keyboard.dismiss();
  //       })
  //       .catch(error => {
  //         if(error.response) {
  //           console.log(error);
  //           alert("Nome do Pokemon não existe!")
  //         }
  //       });

  // <View style={styles.stats}>
  //           <Text style={{marginRight: 10}}>{s.stat.name}</Text>
  //           <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>{s.base_stat}</Text></View>
  //           <BarStats borderWidth={0} progress={100} width={s.base_stat} color="#097AFE" unfilledColor="#444"/>
  // </View>