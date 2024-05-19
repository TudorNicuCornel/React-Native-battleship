import React, {useState} from "react";
import styled from "styled-components/native";

const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    background-color: #f0f0f0;
`;

const TextInput = styled.TextInput`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 0 10px;
`;

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: #33b864;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export interface IRegister {
    onRegister: (email: string, password: string) => void;
}

const Register: React.FC<IRegister> = ({onRegister}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => onRegister(email, password)

    return (
        <Container>
            <TextInput
                keyboardType="email-address"
                onChangeText={setEmail}
                placeholder="Email"
            />
            
            <TextInput
                secureTextEntry
                onChangeText={setPassword}
                placeholder="Password"
            />
            
            <Button onPress={handleRegister}>
                <ButtonText>Register</ButtonText>
            </Button>
        </Container>
    );
};

export default Register;
