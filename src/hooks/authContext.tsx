import React, { createContext, useContext, useEffect, useState } from "react";
import { login, register } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthContext {
    token: string;
    login: (email: string, password: string) => Promise<void>;
    isLoading: boolean;
    logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
    token: '',
    login: async () => {},
    isLoading: false,
    logout: () => {}
})

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [token, setToken] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        AsyncStorage.getItem('token')
        .then(value => {
            if (value !== null) {
                setToken(value)
            }
        })
        .finally(() => {setIsLoading(false)})
    }, []);

    const handleLogin = async (email: string, password: string) => {
        try {
            const result = await login(email, password);
            //console.log('Login: ' + result);
            if(result != "Email and password are required."){
                setToken(result);
                await AsyncStorage.setItem('token', result);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleLogOut = async () => {
        try {
            await AsyncStorage.removeItem('token');
            setToken("");
        } catch (error) {
            console.log("Failed to remove token:", error);
        }
    }
    
    return (
        <AuthContext.Provider value={{
            token,
            login: handleLogin,
            isLoading,
            logout: handleLogOut
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
