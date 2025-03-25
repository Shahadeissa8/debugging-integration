// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const AllJobCard = ({job}) => {
//   return (
//     <View style = {styles.card}>

//       <View style = {styles.infoContainer}>
//       <Text style={styles.jobTitle}>Job Title : {job.title}</Text>
//       <Text style={styles.jobDescription}>Description : {job.description}</Text>
//       <Text style={styles.jobSalary}>Salary : {job.salary}</Text>
//        <TouchableOpacity style={styles.submitButton}>
//                 <Text style={styles.buttonText}>View Applicants</Text>
//               </TouchableOpacity>
//       </View>

//       <View style = {styles.infoContainer}>

//       {/* <Text style={styles.viewMenu}>VIEW DETAILS</Text> */}
//       </View>

//       </View>
//   )
// }

// export default AllJobCard

// const styles = StyleSheet.create({
//     card: {
//     alignSelf: 'center',
//     borderRadius: 15,
//     padding: 20,
//     marginVertical: 10,
//     width: '90%',
//     borderWidth: 1,
//     borderColor: '#746574',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 8,
// },
//   infoContainer: {
//     alignItems: 'center',
//   },
//   jobTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   jobDescription: {
//     fontSize: 16,
//     marginBottom: 6,
//   },
//   jobSalary: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 6,
//   },
//   submitButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 5,
//     backgroundColor: '#4CAF50',
//     alignItems: "center",
//     marginRight: 10
// },
// })
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AllApplicantsCard from "./AllApplicantsCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getActiveJobs } from "../api/jobsAPI";

const AllJobCard = ({ job, applicant }) => {
  // console.log("job", job);
  // console.log("applicant", applicant);

  const navigation = useNavigation();
  //   const { data, isLoading } = useQuery({
  //     queryKey: ["GetAllCategories"],
  //     queryFn: getAllCategories,
  //   });
  const [data, setJobBe, isLoading] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getActiveJobs();
      setJobBe(res);
    };
    fetchJobs();
  });

  // if(isLoading) {<Text>Loading...</Text>}
  // console.log("data", data);
  // console.log("job", job);
  return (
    <View style={styles.card}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{job.title}</Text>
        <View style={styles.infoRow}>
          <MaterialIcons name="title" size={20} color="#666" />
          <Text style={styles.infoText}>Job Title: {job.title}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="description" size={20} color="#666" />
          <Text style={styles.infoText}>Description: {job.description}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="attach-money" size={20} color="#666" />
          <Text style={styles.infoText}>Salary: {job.salary}</Text>
        </View>
        <View style={styles.infoRow}>
          {/* <MaterialIcons name="attach-money" size={20} color="#666" /> */}
          <Text style={styles.infoText}>category:{job.category}</Text>
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.viewApplicantsButton}
        onPress={() => navigation.navigate("AllApplicants", { jobId: job.id })}
      >
        <Text style={styles.buttonText}>View Applicants</Text>
      </TouchableOpacity> */}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.viewApplicantsButton}
          onPress={() =>
            navigation.navigate("JobApplicants", { category: job.category })
          } // Use handleApplicantPress here
        >
          <Text style={styles.buttonText}>All Applicants</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllJobCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
  },
  viewApplicantsButton: {
    // backgroundColor: "#4158D0",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
