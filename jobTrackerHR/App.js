import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import LoginPage from './screens/LoginPage';
// import RegisterPage from './screens/RegisterPage';
// import NewJobs from './screens/NewJobs'
// import AllJob from './screens/AllJob';
// import AllApplicants from './screens/AllApplicants';
// import ApplicantsDetails from './screens/ApplicantsDetails';
import MainNavigator from "./src/navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
