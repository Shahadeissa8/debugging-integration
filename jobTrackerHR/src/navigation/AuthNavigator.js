import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../screens/WelcomePage";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
