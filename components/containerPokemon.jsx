import React from 'react'
import styled from 'styled-components/native'

export const PokemonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;

  /* position: absolute;
  top: 0; */
  
  background: ${props => {
    switch (props.color) {
        case 'grass':
            return '#c1e291'
            break;
        case 'poison':
            return '#c693d4'
            break;
        case 'fire':
            return '#e59257'
            break;
        case 'water':
            return '#679fc4'
            break;
        case 'bug':
            return '#799c51' //
            break;
        case 'normal':
            return '#a4acaf'
            break;
        case 'electric':
            return '#eed535'
            break;
        case 'fairy':
            return '#fdb9e9'
            break;
        case 'ground':
            return '#ab9842'
            break;
        case 'fighting':
            return '#d56723'
            break;
        case 'psychic':
            return '#f366b9'
            break;
        case 'rock':
            return '#a38c21'
            break;
        case 'steel':
            return '#9eb7b8'
            break;
        case 'ice':
            return '#51c4e7'
            break;
        case 'ghost':
            return '#7b62a3'
            break;
        case 'dragon':
            return '9932cc'
            break;
        case 'flying':
            return '#99ccff'
            break;
        case 'dark':
            return '#707070'
            break;
    
        default:
            break;
    }
  }};
`