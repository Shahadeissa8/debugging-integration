import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const AllApplicantsCard = ({ applicant }) => {
  const navigation = useNavigation();

  // const handleApplicantPress = (ApplicationId) => {
  //   // Navigate to the details page, passing the applicationId
  //   navigation.navigate("ApplicantsDetails", { applicant });
  //   console.log("Applicant ID:", ApplicationId);
  //   console.log("Applicant:", applicant);
  // };

  return (
    <View style={styles.card}>
      <LinearGradient
        colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]}
        style={styles.gradientOverlay}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: applicant.applicantImage }}
            style={styles.image}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{applicant.applicantName}</Text>

          <View style={styles.row}>
            <MaterialIcons name="school" size={20} color="#666" />
            <Text style={styles.text}>{applicant.applicantMajor}</Text>
          </View>

          <View style={styles.row}>
            <MaterialIcons name="star" size={20} color="#666" />
            <Text style={styles.text}>{applicant.applicantSkills}</Text>
          </View>

          <View style={styles.row}>
            <MaterialIcons name="cake" size={18} color="#888" />
            <Text style={styles.text}>
              {new Date(applicant.applicantDOB).toDateString()}
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.viewApplicantsButton}
              onPress={() =>
                navigation.navigate("ApplicantsDetails", { applicant })
              } // Use handleApplicantPress here
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  imageWrapper: {
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#555",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  viewApplicantsButton: {
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

export default AllApplicantsCard;
