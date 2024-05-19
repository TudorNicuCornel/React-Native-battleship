import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LobbyScreen from "../screens/game/Lobby.screens";
import TableScreen from "../screens/game/Table.screens";
import { Ionicons } from "@expo/vector-icons";
import UserDetailScreen from "../screens/user/UserDetails.screens";
import { GameRouteNames } from "./route-names";

const MenuTabs = createBottomTabNavigator();
const GameStack = createNativeStackNavigator();

const GameStackNavigator = () => (
    <GameStack.Navigator>
        <GameStack.Screen name={GameRouteNames.LOBBY} component={LobbyScreen} />
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} />
    </GameStack.Navigator>
);

const gameRoutes = (
    <MenuTabs.Navigator>
        <MenuTabs.Screen
            name="Main"
            component={GameStackNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({}) => (
                    <Ionicons name="game-controller" color="#33b864"/>
                )
            }}
        />
        <MenuTabs.Screen
            name="Profile"
            component={UserDetailScreen}
            options={{
                tabBarIcon: ({}) => (
                    <Ionicons name="person-circle" color="#33b864"/>
                ),
            }}
        />
    </MenuTabs.Navigator>
)

export default gameRoutes;;