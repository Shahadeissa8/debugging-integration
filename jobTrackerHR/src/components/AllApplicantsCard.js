import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const AllApplicantsCard = ({ applicant }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Animated.View style={[styles.card, isPressed && styles.cardPressed]}>
      <LinearGradient
        colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]}
        style={styles.gradientOverlay}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: applicant.ApplicantImage }}
            style={styles.imageContainer}
            resizeMode="cover"
          />
          <View style={styles.statusIndicator} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.applicantName}>{applicant.ApplicantName}</Text>

          <View style={styles.majorContainer}>
            <MaterialIcons name="school" size={20} color="#666" />
            <Text style={styles.major}>{applicant.ApplicantMajor}</Text>
          </View>

          <View style={styles.skillsContainer}>
            {applicant.ApplicantSkills.split(",").map((skill, index) => (
              <View key={index} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill.trim()}</Text>
              </View>
            ))}
          </View>

          <View style={styles.dobContainer}>
            <MaterialIcons name="cake" size={18} color="#888" />
            <Text style={styles.dob}>{applicant.ApplicantDOB}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => setIsPressed(true)}
            >
              <MaterialIcons name="visibility" size={20} color="#fff" />
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cvButton}>
              <MaterialIcons name="description" size={20} color="#4CAF50" />
              <Text style={styles.cvButtonText}>View CV</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

export default AllApplicantsCard;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 10,
    width: "95%",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    overflow: "hidden",
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  gradientOverlay: {
    padding: 15,
  },
  imageWrapper: {
    position: "relative",
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  statusIndicator: {
    position: "absolute",
    right: "30%",
    bottom: 5,
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#fff",
  },
  infoContainer: {
    padding: 10,
  },
  applicantName: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  majorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "center",
    gap: 8,
  },
  major: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    marginBottom: 15,
  },
  skillBadge: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  skillText: {
    fontSize: 13,
    color: "#666",
  },
  dobContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginBottom: 20,
  },
  dob: {
    fontSize: 14,
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#4CAF50",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  cvButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  cvButtonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "600",
  },
});
