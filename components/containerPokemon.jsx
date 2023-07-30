import React from 'react'
import styled from 'styled-components/native'

export const PokemonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  
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
            return '#7b955d' //
            break;
        case 'normal':
            return '#d5e2e7'
            break;
        case 'electric':
            return '#dbcb63'
            break;
        case 'fairy':
            return '#ddbfd4'
            break;
        case 'ground':
            return '#9c9368'
            break;
        case 'fighting':
            return '#ae724c'
            break;
        case 'psychic':
            return '#df8fbe'
            break;
        case 'rock':
            return '#7d7242'
            break;
        case 'steel':
            return '#c2d2d3'
            break;
        case 'ice':
            return '#96d4e7'
            break;
        case 'ghost':
            return '#87799f'
            break;
        case 'dragon':
            return '#a267bf'
            break;
        case 'flying':
            return '#95aec8'
            break;
        case 'dark':
            return '#a9a6a6'
            break;
    
        default:
            break;
    }
  }};
`