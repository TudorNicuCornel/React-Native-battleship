import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../hooks/authContext";
import { getUserDetails } from "../api";

const Container = styled.View`
    align-items: center;
    padding: 20px;
`;

const Email = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const SmallTitle = styled.Text`
    font-size: 16px;
`;

const Id = styled.Text`
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const Value = styled.Text`
    font-size: 40px;
`;

const UserDetails = () => {
    const [id, setId] = useState("Loading...");
    const [email, setEmail] = useState("");
    const [gamesPlayed, setGamesPlayed] = useState("...");
    const [gamesLost, setGamesLost] = useState("...");
    const [gamesWon, setGamesWon] = useState("...");
    const [currenltyPlaying, setCurrenltyPlaying] = useState("...");
    const auth = useAuth();

    useEffect(() => {
        getUserDetails(auth.token).then((response) => {
            setId(response.user.id);
            setEmail(response.user.email);
            setGamesPlayed(response.gamesPlayed);
            setGamesLost(response.gamesLost);
            setGamesWon(response.gamesWon);
            setCurrenltyPlaying(response.currentlyGamesPlaying);
        });
    }, []);

    return (
        <Container>
            <Ionicons name="person-circle" size={200} color="darkgrey" style={{ alignSelf: "center", margin: 10 }} />
            <Email> {email} </Email>
            <Id>ID: {id}</Id>

            <SmallTitle>Games Played</SmallTitle>
            <Value>{gamesPlayed}</Value>

            <SmallTitle>Games In Progress</SmallTitle>
            <Value>{currenltyPlaying}</Value>


            <SmallTitle>Games Won</SmallTitle>
            <Value>{gamesWon}</Value>

            <SmallTitle>Games Lost</SmallTitle>
            <Value>{gamesLost}</Value>
        </Container >
    );
};

export default UserDetails;