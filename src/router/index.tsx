import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import authRoutes from "./auth.router";
import gameRoutes from "./auth.game";
import { useAuth } from "../hooks/authContext";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

const Router:React.FC = () => {
    const auth = useAuth();

    if (auth.isLoading) {
        return (
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {auth.token ? gameRoutes : authRoutes}
        </NavigationContainer>
    );
}

export default Router;