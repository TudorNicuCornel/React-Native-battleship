import { register } from "../../api";
import Register from "../../components/Register";
import { useAuth } from "../../hooks/authContext";

const RegisterScreen = () => {
    const auth = useAuth();
    return <Register onRegister={register}/>
}

export default RegisterScreen;