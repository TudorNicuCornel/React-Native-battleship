import styled from "styled-components/native";
import UserDetails from "../../components/UserDetails";
import { useAuth } from "../../hooks/authContext";

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const LogOutButton = styled.TouchableOpacity`
    width: 25%;
    height: 40px;
    background-color: #de0a26;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 7px;
`;

const LogOutText = styled.Text`
    font-size: 20px;
    color: #fff;
`;

const UserDetailScreen = () => {
    const auth = useAuth();

    return (
        <Container>
            <UserDetails />
            <LogOutButton onPress={auth.logout}>
                <LogOutText>Log Out</LogOutText>
            </LogOutButton>
        </Container>
    )
}

export default UserDetailScreen;