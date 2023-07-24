import React from 'react'
import styled from 'styled-components/native'

export const StyledText = styled.View`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${props => {
    switch (props.type) {
        case 'grass':
            return '#9bcc50'
            break;
        case 'poison':
            return '#b97fc9'
            break;
        case 'fire':
            return '#fd7d24'
            break;
        case 'water':
            return '#4592c4'
            break;
        case 'bug':
            return '#729f3f'
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