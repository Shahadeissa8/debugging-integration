import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

const Archive = () => {
  const [applicants, setApplicants] = useState([
    {
      applicationId: "A",
      applicantName: "Beaver Lodge",
      applicantImage:
        "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
      applicantCVUrl:
        "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/two_page_scientific_resume_marine_resource_management.pdf",
      applicantMajor: "Marine e Resource Management",
      applicantSkills: "R Studio, ArcGIS, Public Science Education",
      jobId: "6975d703-19a8-4bf5-81bb-ffd59d09ea77",
    },
    {
      applicationId: "B",
      applicantName: "Ana M. Banana",
      applicantImage: "https://www.refinery29.com/images/10267701.jpg",
      applicantCVUrl:
        "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/phd_cv_-_anthropology_example_brief.pdf",
      applicantMajor: "Doctor of Philosophy in Applied Anthropology",
      applicantSkills:
        "Proficient in Microsoft Office, Atlas.ti, SPSS, SAS, JMP, Adobe Dreamweaver",
      jobId: "8cb4c1f6-0679-4591-a7c5-4e4dbaec144d",
    },
    // {
    //   applicationId: "C",
    //   applicantName: "Cathy Counselor",
    //   applicantImage:
    //     "https://m.media-amazon.com/images/M/MV5BMjMzODQzNjk3NF5BMl5BanBnXkFtZTgwOTE5MDI2MDI@._V1_.jpg",
    //   applicantCVUrl:
    //     "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/phd_cv_-_counseling_psychology.pdf",
    //   applicantMajor: "Doctorate of Philosophy",
    //   applicantSkills: "Microsoft Word",
    //   jobId: "8cb4c1f6-0679-4591-a7c5-4e4dbaec144d",
    // },
    // {
    //   applicationId: "D",
    //   applicantName: "Harry Sasquatch",
    //   applicantImage:
    //     "https://static.wikia.nocookie.net/harrypotter/images/c/ce/Harry_Potter_DHF1.jpg/revision/latest/thumbnail/width/360/height/360?cb=20140603201724",
    //   applicantCVUrl:
    //     "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/environmental_sciences_cv.pdf",
    //   applicantMajor: "Ph.D. in Environmental Sciences",
    //   applicantSkills:
    //     "Working knowledge of ArcMap for GIS analysis, Web development experience, including knowledge of HTML, CSS, and JavaScript",
    //   jobId: "6975d703-19a8-4bf5-81bb-ffd59d09ea77",
    // },
    // {
    //   applicationId: "E",
    //   applicantName: "Jake R. Nelson",
    //   applicantImage:
    //     "https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3042083.png",
    //   applicantCVUrl:
    //     "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/tenure_track_faculty_geography_gis_degree.pdf",
    //   applicantMajor: "Public Administration and Policy",
    //   applicantSkills: "Public Speaking, Microsoft Power Point",
    //   jobId: "72921322-5acc-4a02-8489-4a534a3b3086",
    // },
    // {
    //   applicationId: "F",
    //   applicantName: "Ryan N. Contreras",
    //   applicantImage:
    //     "https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg",
    //   applicantCVUrl:
    //     "https://career.oregonstate.edu/sites/career.oregonstate.edu/files/2024-09/osu_tenured_faculty_cv_horticulture.pdf",
    //   applicantMajor: "genetic analysis",
    //   applicantSkills: "Public Speaking, Microsoft Power Point",
    //   jobId: "6975d703-19a8-4bf5-81bb-ffd59d09ea77",
    // },
  ]);

  const [originalApplicants, setOriginalApplicants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setOriginalApplicants(applicants);
  }, []);

  const openCV = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this CV URL");
      }
    } catch (error) {
      console.error("Error opening CV:", error);
      Alert.alert("Error", "Failed to open CV");
    }
  };

  const deleteApplicant = (applicationId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this applicant?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            const updatedApplicants = applicants.filter(
              (applicant) => applicant.applicationId !== applicationId
            );
            setApplicants(updatedApplicants);
            setOriginalApplicants(updatedApplicants);
          },
        },
      ]
    );
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filteredData = originalApplicants.filter((item) => {
        const itemData = `${item.applicantName.toLowerCase()} ${item.applicantMajor.toLowerCase()} ${item.applicantSkills.toLowerCase()}`;
        return itemData.includes(text.toLowerCase());
      });
      setApplicants(filteredData);
    } else {
      setApplicants(originalApplicants);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.applicantImage }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.applicantName}</Text>
        <Text style={styles.major}>{item.applicantMajor}</Text>
        <Text style={styles.skills}>Skills: {item.applicantSkills}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => openCV(item.applicantCVUrl)}
            style={styles.viewButton}
          >
            <Text style={styles.buttonText}>View CV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteApplicant(item.applicationId)}
            style={styles.deleteButton}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
    
        <Searchbar
          placeholder="Search jobs..."
          onChangeText={handleSearch}
          value={searchQuery}
          style={styles.searchBar}
          iconColor="#666"
          inputStyle={styles.searchInput}
        />
        
      <FlatList
        data={applicants}
        renderItem={renderItem}
        keyExtractor={(item) => item.applicationId}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  searchContainer: { padding: 15, backgroundColor: "transparent" },
  searchBar: {
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  searchInput: { fontSize: 16 },
  // searchInput: {
    // height: 40,
    // borderColor: "#ddd",
    // borderWidth: 1,
    // borderRadius: 8,
    // paddingHorizontal: 10,
    // marginBottom: 10,
    // backgroundColor: "white",
  //   elevation: 2,
  //   borderRadius: 10,
  //   backgroundColor: "white",
  //   marginBottom: 10,

  // },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  major: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  skills: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
  },
  viewButton: {
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Archive;
