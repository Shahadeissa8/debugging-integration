import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AllApplicantsCard from "../components/AllApplicantsCard";
import { ActivityIndicator } from "react-native-paper";
import { getPendingApplications } from "../api/applicationAPI";

// const applicant = [
//   {
//     ApplicantName: "Beaver Lodge",
//     ApplicantImage:
//       "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
//     ApplicantCVUrl:
//       "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
//     ApplicantMajor: "Marine Resource Management",
//     ApplicantSkills: "R Studio, ArcGIS, Public Science Education",
//     ApplicantDOB: "23/05/1990",
//     JobId: "A1",
//   },
//   {
//     ApplicantName: "Beaver Lodge",
//     ApplicantImage:
//       "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
//     ApplicantCVUrl:
//       "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
//     ApplicantMajor: "Marine Resource Management",
//     ApplicantSkills: "R Studio, ArcGIS, Public Science Education",
//     ApplicantDOB: "23/05/1990",
//     JobId: "A1",
//   },
// ];

const AllApplicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const data = await getPendingApplications(); // Fetch pending applicants
      // const data = await categories(); // Fetch pending applicants
      console.log("Fetched Applicants:", data);
      if (!data) {
        console.log("❌ API returned undefined. Possible issue with API call.");
        return;
      }
      setApplicants(data); // Update state with API response
    } catch (error) {
      console.log("Error fetching applicants:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
    <View style={styles.container}>
      <Text style={styles.title}>All Applicants</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#3b5998" />
      ) : (
        <FlatList
          data={applicants}
          renderItem={({ item }) => <AllApplicantsCard applicant={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
    // </LinearGradient>
  );
};

export default AllApplicants;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
});
