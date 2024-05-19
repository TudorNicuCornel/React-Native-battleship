import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/Login.screens';
import RegisterScreen from '../screens/auth/Register.screens';
import { AuthRoutesNames} from './route-names';

const AuthStack = createNativeStackNavigator();

const authRoutes = (
    <AuthStack.Navigator initialRouteName='Login'>
        <AuthStack.Screen name={AuthRoutesNames.LOGIN} component={LoginScreen} />
        <AuthStack.Screen name={AuthRoutesNames.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
)

export default authRoutes;
