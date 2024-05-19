import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.TouchableOpacity<{color: string}>`
    padding: 8px;
    border: 1px solid black;
    border-radius: 4px;
    margin-bottom: 4px;
`

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: #33b864;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 7px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export interface IGameListItem {
    id: number;
    onPress?: () => void;
    status: string
}

const GameListItem: React.FC<IGameListItem> = ({id, status, onPress}) => {
    return (
        <Container color="green" onPress={onPress}>
            <Text>Game ID: {id}</Text>
            <Text>Game Status: {status}</Text>
            <Button onPress={onPress}>
                <ButtonText>Join Game</ButtonText>
            </Button>
        </Container>
    )
}

export default GameListItem