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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MainNavigator />
      </QueryClientProvider>
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
