import { useNavigation } from "@react-navigation/native";
import Login from "../../components/LogIn";
import { useAuth } from "../../hooks/authContext";

const LoginScreen = () => {
    const navigation = useNavigation<any>()
    const handleGoToRegister = () => {
        navigation.navigate("Register");
    }
    const auth = useAuth();
    return <Login onLogIn={auth.login} goToRegister={handleGoToRegister}/>
}

export default LoginScreen;