import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/authContext";
import { TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";
import { listGames, createGame } from "../../api";
import GameListItem from "../../components/GameListItem";
import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameRouteNames } from "../../router/route-names";

const Container = styled(SafeAreaView)`
    display: flex;
    flex: 1;
    padding: 0 8px;
`;

const GameList = styled.ScrollView``;

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: #33b864;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 7px;
    z-index: 10;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

const LobbyScreen = () => {
    const auth = useAuth();
    const [games, setGames] = useState<any[]>([]);
    const navigation = useNavigation<any>();

    useEffect(() => {
        listGames(auth.token).then(setGames);
    }, [auth.token]);

    const handleAddGame = async () => {
        await createGame(auth.token);
        await listGames(auth.token).then(setGames);
    };

    return (
        <Container>
            <TouchableOpacity onPress={handleAddGame} style={{ marginBottom: 10 }}>
                <Button>
                    <ButtonText>New Game</ButtonText>
                </Button>
            </TouchableOpacity>
            <GameList>
                {games.map((game) => (
                    <GameListItem
                        status={game.status}
                        id={game.id}
                        key={game.id}
                        onPress={() => {
                            navigation.navigate(GameRouteNames.TABLE);
                        }}
                    />
                ))}
            </GameList>
        </Container>
    );
};

export default LobbyScreen;
