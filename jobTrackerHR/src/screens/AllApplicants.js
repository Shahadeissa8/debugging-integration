// import { StyleSheet, Text, View, FlatList } from "react-native";
// import React, { useEffect, useState } from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import AllApplicantsCard from "../components/AllApplicantsCard";
// import { ActivityIndicator } from "react-native-paper";
// import { getPendingApplications } from "../api/applicationAPI";
// import { useQuery } from "@tanstack/react-query";

// // const applicant = [
// //   {
// //     ApplicantName: "Beaver Lodge",
// //     ApplicantImage:
// //       "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
// //     ApplicantCVUrl:
// //       "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
// //     ApplicantMajor: "Marine Resource Management",
// //     ApplicantSkills: "R Studio, ArcGIS, Public Science Education",
// //     ApplicantDOB: "23/05/1990",
// //     JobId: "A1",
// //   },
// //   {
// //     ApplicantName: "Beaver Lodge",
// //     ApplicantImage:
// //       "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
// //     ApplicantCVUrl:
// //       "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
// //     ApplicantMajor: "Marine Resource Management",
// //     ApplicantSkills: "R Studio, ArcGIS, Public Science Education",
// //     ApplicantDOB: "23/05/1990",
// //     JobId: "A1",
// //   },
// // ];

// const AllApplicants = () => {
//   //   const [applicants, setApplicants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetchApplicants();
//   // }, []);

//   const { data: applicants } = useQuery({
//     queryKey: ["getPendingApplicants"],
//     queryFn: () => getPendingApplications(),
//     onSuccess: () => {
//       setLoading(false);
//     },
//   });

//   const fetchApplicants = async () => {
//     try {
//       const data = await getPendingApplications(); // Fetch pending applicants
//       // const data = await categories(); // Fetch pending applicants
//       console.log("Fetched Applicants:", data);
//       if (!data) {
//         console.log("❌ API returned undefined. Possible issue with API call.");
//         return;
//       }
//       setApplicants(data); // Update state with API response
//     } catch (error) {
//       console.log("Error fetching applicants:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
//     <View style={styles.container}>
//       <Text style={styles.title}>All Applicants</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#3b5998" />
//       ) : (
//         applicants && (
//           <FlatList
//             data={applicants}
//             renderItem={({ item }) => <AllApplicantsCard applicant={item} />}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.list}
//           />
//         )
//       )}
//     </View>
//     // </LinearGradient>
//   );
// };

// export default AllApplicants;

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
// });

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   ActivityIndicator,
// } from "react-native";
// import { useQuery } from "@tanstack/react-query";
// import { LinearGradient } from "expo-linear-gradient";
// import AllApplicantsCard from "../components/AllApplicantsCard";
// import { getPendingApplications } from "../api/applicationAPI"; // API call to get applicants

// const AllApplicants = () => {
//   const [loading, setLoading] = useState(true);

//   const {
//     data: applicants,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["getPendingApplicants"],
//     queryFn: getPendingApplications,
//     onSuccess: () => {
//       setLoading(false);
//     },
//   });

//   if (isLoading) {
//     return <ActivityIndicator size="large" color="#3b5998" />;
//   }

//   if (error) {
//     return <Text>Error fetching applicants: {error.message}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>All Applicants</Text>
//       {applicants && applicants.length > 0 ? (
//         <FlatList
//           data={applicants}
//           renderItem={({ item }) => <AllApplicantsCard applicant={item} />}
//           keyExtractor={(item) => item.ApplicationId.toString()}
//           contentContainerStyle={styles.list}
//         />
//       ) : (
//         <Text>No applicants available</Text>
//       )}
//     </View>
//   );
// };

// export default AllApplicants;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
// });

import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import AllApplicantsCard from "../components/AllApplicantsCard";
import { getPendingApplications } from "../api/applicationAPI"; // API call to get applicants
import { useNavigation } from "@react-navigation/native";
import { deleteToken } from "../api/storage";
import UserContext from "../context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AllApplicants = ({ route }) => {
  const navigation = useNavigation();
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

  if (isLoading) {
    return <ActivityIndicator size="large" color="#3b5998" />;
  }

  if (error) {
    return <Text>Error fetching applicants: {error.message}</Text>;
  }

  const handleApplicantPress = (ApplicationId) => {
    // Navigate to the details page, passing the applicationId
    navigation.navigate("ApplicantsDetails", { ApplicationId });
  };
  const { isAuth, setIsAuth } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.title}>All Applicants</Text> */}

      {applicants && applicants.length > 0 ? (
        <FlatList
          data={applicants}
          renderItem={({ item }) => <AllApplicantsCard applicant={item} />}
          keyExtractor={(item) =>
            item.ApplicationId ? item.ApplicationId.toString() : `${item.index}`
          }
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text>No applicants available</Text>
      )}
    </ScrollView>
  );
};

export default AllApplicants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: -20,
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
    // paddingBottom: 20,
  },
});
