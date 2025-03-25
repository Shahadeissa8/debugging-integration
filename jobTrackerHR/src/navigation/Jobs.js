import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllJob from "../screens/AllJob";
import AllApplicants from "../screens/AllApplicants";
import JobApplicants from "../screens/JobApplicants";

const Stack = createStackNavigator();

const Jobs = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllJobs" component={AllJob} />
      <Stack.Screen name="JobApplicants" component={JobApplicants} />
    </Stack.Navigator>
  );
};

export default Jobs;

const styles = StyleSheet.create({});
