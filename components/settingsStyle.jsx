import styled from 'styled-components'

export const OptionContainer = styled.View`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-left: none;
    border-right: none;
    height: 50px;

`

export const TextOption = styled.Text`

    font-size: 20px;
    margin-left: 16px;
    font-weight: bold;

`

export const TextLanguege = styled.Text`

    font-size: 20px;
    margin-right: 16px;
    color: #ccc;

`

export const ContainerSettings = styled.View`

    display: flex;
    justify-content: flex-start;
    height: 100%;

`

export const Container = styled.View`

    display: flex;
    background-color: ${props => props.mode ? '#000' : '#fff'};
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;

`

