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
import AuthNavigator from "./src/navigation/AuthNavigator";
import UserContext from "./src/context/UserContext";
import { useEffect, useState } from "react";
import { getToken } from "./src/api/storage";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const queryClient = new QueryClient();
  // const checkToken = async () => {
  //   const token = await getToken();
  //   if (token) {
  //     setIsAuth(true);
  //   }
  // };
  // useEffect(() => {
  //   checkToken();
  // });
  const Stack = createStackNavigator();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setIsAuth(true);
      }
    };
    checkToken();
  });
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        > */}
        <QueryClientProvider client={queryClient}>
          <UserContext.Provider value={{ isAuth, setIsAuth }}>
            {/* <MainNavigator /> */}
            {/* <AuthNavigator/> */}
            {isAuth ? <MainNavigator /> : <AuthNavigator />}
          </UserContext.Provider>
        </QueryClientProvider>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
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
