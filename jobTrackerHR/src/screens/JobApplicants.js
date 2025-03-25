import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPendingApplications } from "../api/applicationAPI";
import AllApplicantsCard from "../components/AllApplicantsCard";

const JobApplicants = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const params = route.params;

  console.log("PARAMS", params);

  const {
    data: applicants,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getPendingApplicants"],
    queryFn: getPendingApplications,
    onSuccess: (data) => {
      console.log("Fetched Applicants:", data); // Check the data structure
      setLoading(false);
    },
  });

  const jobCat = applicants.filter((applicant) => {
    return applicant.jobCategory === params.category;
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#3b5998" />;
  }

  if (error) {
    return <Text>Error fetching applicants: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>All Applicants</Text> */}
      {applicants && applicants.length > 0 ? (
        <FlatList
          data={jobCat}
          renderItem={({ item }) => <AllApplicantsCard applicant={item} />}
          keyExtractor={(item) =>
            item.ApplicationId ? item.ApplicationId.toString() : `${item.index}`
          }
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text>No applicants available</Text>
      )}
    </View>
  );
};

export default JobApplicants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
});
