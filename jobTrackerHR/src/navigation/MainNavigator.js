// import { StyleSheet, Text, View } from "react-native";
// import React, { useContext } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AllApplicants from "../screens/AllApplicants";
// import AllJob from "../screens/AllJob";
// import NewJobs from "../screens/NewJobs";
// import RegisterPage from "../screens/RegisterPage";
// import LoginPage from "../screens/LoginPage";
// import {
//   HeaderBackground,
//   HeaderShownContext,
// } from "@react-navigation/elements";
// import ApplicantsDetails from "../screens/ApplicantsDetails";
// import UserContext from "../context/UserContext";
// const Tab = createBottomTabNavigator();
// const MainNavigator = () => {
//   const { isAuth, setIsAuth } = useContext(UserContext);
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="All Applicants" component={AllApplicants} />
//       <Tab.Screen name="Applicant Details" component={ApplicantsDetails} />
//       <Tab.Screen name="All Jobs" component={AllJob} />
//       <Tab.Screen name="New Job" component={NewJobs} />
//       <Tab.Screen name="Register" component={RegisterPage} />
//       <Tab.Screen name="Login" component={LoginPage} />
//     </Tab.Navigator>
//   );
// };

// export default MainNavigator;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import NewJobs from "../screens/NewJobs";
import RegisterPage from "../screens/RegisterPage";
import LoginPage from "../screens/LoginPage";
import UserContext from "../context/UserContext";
import { Ionicons } from "@expo/vector-icons";
import Archive from "../screens/Archive";
import { MaterialIcons } from "@expo/vector-icons";

import ApplicantsDetails from "../screens/ApplicantsDetails";
import AllJob from "../screens/AllJob";
import AllApplicants from "../screens/AllApplicants";
import AllJobCard from "../components/AllJobCard";
import Jobs from "./Jobs";
import { deleteToken } from "../api/storage";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ApplicantsStack = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllApplicants"
        component={AllApplicants}
        options={{
          headerShown: true,
          headerTitle: "All Applicants",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => {
                deleteToken();
                setIsAuth(false);
              }}
            >
              <MaterialIcons name="logout" size={28} color="#EE6F57" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ApplicantsDetails"
        component={ApplicantsDetails}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="AllJobCard"
        component={AllJobCard}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* sd */}

      {/* <Stack.Screen name="ApplicantsDetails" component={ApplicantsDetails} /> */}
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
        name="Applicants"
        component={ApplicantsStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={24} color={color} />
          ),
        }}
        name="All Jobs"
        component={Jobs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
        name="New Job"
        component={NewJobs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="archive-outline" size={24} color={color} />
          ),
        }}
        name="Archive"
        component={Archive}
      />
      {/* <Tab.Screen name="Register" component={RegisterPage} /> */}
      {/* <Tab.Screen name="Login" component={LoginPage} /> */}
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
