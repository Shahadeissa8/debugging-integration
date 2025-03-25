import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../screens/WelcomePage";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import AllApplicants from "../screens/AllApplicants";
import ApplicantsDetails from "../screens/ApplicantsDetails";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="AllApplicants" component={AllApplicants} />
      <Stack.Screen name="ApplicantsDetails" component={ApplicantsDetails} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
