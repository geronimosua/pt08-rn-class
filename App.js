import Onboarding from "./src/screens/Onboarding";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Onboarding"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Onboarding" component={Onboarding} />
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
