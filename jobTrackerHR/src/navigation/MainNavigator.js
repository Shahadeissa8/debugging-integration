import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllApplicants from "../screens/AllApplicants";
import AllJob from "../screens/AllJob";
import NewJobs from "../screens/NewJobs";
import RegisterPage from "../screens/RegisterPage";
import LoginPage from "../screens/LoginPage";
import {
  HeaderBackground,
  HeaderShownContext,
} from "@react-navigation/elements";
import ApplicantsDetails from "../screens/ApplicantsDetails";
import UserContext from "../context/UserContext";
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Applicants" component={AllApplicants} />
      <Tab.Screen name="Applicant Details" component={ApplicantsDetails} />
      <Tab.Screen name="All Jobs" component={AllJob} />
      <Tab.Screen name="New Job" component={NewJobs} />
      <Tab.Screen name="Register" component={RegisterPage} />
      <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
