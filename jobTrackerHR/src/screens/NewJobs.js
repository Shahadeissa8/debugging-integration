// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

// const NewJobs = () => {
//   return (
//     <View   style={styles.container}>
//      {/* <LinearGradient  */}
//         {/* //   colors={['#020024', '#090979', '#00d4ff']}
//         //   colors={['#090979', '#f9f9f9', '#ffe000']}
//         //   colors={['#1b66ab', '#5c82af']}
//         // colors={['#6a11cb', '#2575fc']}
//             //   colors={['#fd1d1d', '#fcb045']}

//           style={styles.container}
//         > */}
//           <Text style={styles.title}>create new job post</Text>

//           <View style={styles.inputContainer}>
//             <Ionicons name="archive-outline" size={20} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.email}
//               placeholder='Job Title'
//               placeholderTextColor="#888"
//             />
//           </View>

//           <View style={styles.inputContainer}>
//             <Ionicons name="attach-sharp" size={20} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.email}
//               placeholder='Job Description'
//               placeholderTextColor="#888"
//             //   secureTextEntry
//             />

//           </View>
//           <View style={styles.inputContainer}>
//             <Ionicons name="apps-outline" size={20} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.email}
//               placeholder='Requirements'
//               placeholderTextColor="#888"
//             />

//           </View>
//           <View style={styles.inputContainer}>
//             <Ionicons name="cash" size={20} color="#888" style={styles.icon} />
//             <TextInput
//               style={styles.email}
//               placeholder='Salary'
//               placeholderTextColor="#888"
//             />

//           </View>

//           {/* <TouchableOpacity
//             style={styles.button}
//             // onPress={handleLogin}
//           >
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>     */}
//          <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.submitButton}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cancelButton}>
//           <Text style={styles.buttonText}>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//       {/* </View> */}

//       </View>
//       )
//     };
//     export default NewJobs

//      const styles = StyleSheet.create({
//         container: {
//         flexGrow: 1,
//         paddingTop: 90,
//         paddingBottom: 30,
//         paddingHorizontal: 15,
//        justifyContent: 'center',
//        alignItems: 'center',
//        backgroundColor :'white'
//       },
//       title: {
//         fontSize: 32,
//         fontWeight: 'bold',
//         // color: '#fff',
//         marginBottom: 20,
//       },
//       inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#f1f1f1',
//         borderRadius: 12,
//         marginBottom: 15,
//         paddingLeft: 15,
//         width : '100%',
//         // height : 100,
//           },
//       icon: {
//         marginRight: 10,
//       },
//       email: {
//         width: '100%',
//         height: 50,
//         fontFamily: 'Roboto',
//         fontSize: 16,
//         color: '#333',
//       },
//       button: {
//         padding: 15,
//         borderRadius: 5,
//         backgroundColor: '#4CAF50',
//         alignItems: "center",
//         width: '100%',
//         marginTop: 10,
//       },
//       buttonText: {
//         fontWeight: "bold",
//         fontSize: 16,
//         color: "white",
//       },
//       forgotPassword: {
//         color: '#fff',
//         marginTop: 10,
//         textDecorationLine: 'underline',
//       },buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         marginTop: 20,
//       },
//       align: {
//         color: '#fff',
//         marginTop: 10,
//       },  submitButton: {
//         flex: 1,
//         padding: 15,
//         borderRadius: 5,
//         backgroundColor: '#4CAF50',
//         alignItems: "center",
//         marginRight: 10,
//       },
//       cancelButton: {
//         flex: 1,
//         padding: 15,
//         borderRadius: 5,
//         backgroundColor: '#d9534f',
//         alignItems: "center",
//       },
//       buttonText: {
//         fontWeight: "bold",
//         fontSize: 16,
//         color: "white",
//       }

//     });

// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from "react-native";

// const NewJobs = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     requirements: "",
//     salary: "",
//   });

//   return (
//     <LinearGradient colors={["#f6f6f6", "#ffffff"]} style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>Create New Job</Text>

//           <View style={styles.inputWrapper}>
//             <Text style={styles.label}>Job Title</Text>
//             <View style={styles.inputContainer}>
//               <Ionicons
//                 name="briefcase-outline"
//                 size={22}
//                 color="#2a5298"
//                 style={styles.icon}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter job title"
//                 placeholderTextColor="#aaa"
//               />
//             </View>
//           </View>

//           <View style={styles.inputWrapper}>
//             <Text style={styles.label}>Description</Text>
//             <View style={[styles.inputContainer, styles.textAreaContainer]}>
//               <Ionicons
//                 name="document-text-outline"
//                 size={22}
//                 color="#2a5298"
//                 style={[styles.icon, styles.textAreaIcon]}
//               />
//               <TextInput
//                 style={[styles.input, styles.textArea]}
//                 placeholder="Enter job description"
//                 placeholderTextColor="#aaa"
//                 multiline={true}
//                 numberOfLines={4}
//               />
//             </View>
//           </View>

//           <View style={styles.inputWrapper}>
//             <Text style={styles.label}>Requirements</Text>
//             <View style={[styles.inputContainer, styles.textAreaContainer]}>
//               <Ionicons
//                 name="list-outline"
//                 size={22}
//                 color="#2a5298"
//                 style={[styles.icon, styles.textAreaIcon]}
//               />
//               <TextInput
//                 style={[styles.input, styles.textArea]}
//                 placeholder="Enter job requirements"
//                 placeholderTextColor="#aaa"
//                 multiline={true}
//                 numberOfLines={4}
//               />
//             </View>
//           </View>

//           <View style={styles.inputWrapper}>
//             <Text style={styles.label}>Salary</Text>
//             <View style={styles.inputContainer}>
//               <Ionicons
//                 name="cash-outline"
//                 size={22}
//                 color="#2a5298"
//                 style={styles.icon}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter salary"
//                 placeholderTextColor="#aaa"
//                 keyboardType="numeric"
//               />
//             </View>
//           </View>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.submitButton}>
//               <LinearGradient
//                 colors={["#2a5298", "#1e3c72"]}
//                 style={styles.gradient}
//               >
//                 <Ionicons
//                   name="checkmark-circle-outline"
//                   size={24}
//                   color="white"
//                 />
//                 <Text style={styles.buttonText}>Submit</Text>
//               </LinearGradient>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.cancelButton}>
//               <LinearGradient
//                 colors={["#dc3545", "#c82333"]}
//                 style={styles.gradient}
//               >
//                 <Ionicons name="close-circle-outline" size={24} color="white" />
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   formContainer: {
//     padding: 20,
//     paddingTop: 40,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#2a5298",
//     marginBottom: 30,
//     textAlign: "center",
//     textTransform: "uppercase",
//     letterSpacing: 1,
//   },
//   inputWrapper: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//     marginBottom: 8,
//     marginLeft: 4,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "white",
//     borderRadius: 12,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: "#e0e0e0",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.05,
//     shadowRadius: 3.84,
//     elevation: 2,
//   },
//   textAreaContainer: {
//     alignItems: "flex-start",
//     paddingVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   textAreaIcon: {
//     marginTop: 12,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: "#333",
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: "top",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 15,
//     marginTop: 30,
//   },
//   submitButton: {
//     flex: 1,
//     height: 55,
//     borderRadius: 12,
//     overflow: "hidden",
//   },
//   cancelButton: {
//     flex: 1,
//     height: 55,
//     borderRadius: 12,
//     overflow: "hidden",
//   },
//   gradient: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 8,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "white",
//   },
// });

// export default NewJobs;

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { createJob } from "../api/jobsAPI";
// import { createJob } from "../../api/jobs"; // Import API function

const NewJobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    durationInDays: "",
    category: "",
  });

  // Handle input change
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !formData.salary) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    try {
      await createJob(formData);
      Alert.alert("Success", "Job created successfully!");
      setFormData({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        durationInDays: "",
        category: "",
      });
    } catch (error) {
      Alert.alert("Error", "Failed to create job.");
    }
  };

  // Handle cancel button (reset form)
  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      requirements: "",
      salary: "",
      durationInDays: "",
      category: "",
    });
  };

  return (
    <LinearGradient colors={["#f6f6f6", "#ffffff"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Create New Job</Text>

          {/* Job Title */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Job Title</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="briefcase-outline"
                size={22}
                color="#2a5298"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter job title"
                placeholderTextColor="#aaa"
                value={formData.title}
                onChangeText={(text) => handleChange("title", text)}
              />
            </View>
          </View>

          {/* Description */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Description</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <Ionicons
                name="document-text-outline"
                size={22}
                color="#2a5298"
                style={[styles.icon, styles.textAreaIcon]}
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter job description"
                placeholderTextColor="#aaa"
                multiline={true}
                numberOfLines={4}
                value={formData.description}
                onChangeText={(text) => handleChange("description", text)}
              />
            </View>
          </View>

          {/* Requirements */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Requirements</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <Ionicons
                name="list-outline"
                size={22}
                color="#2a5298"
                style={[styles.icon, styles.textAreaIcon]}
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Enter job requirements"
                placeholderTextColor="#aaa"
                multiline={true}
                numberOfLines={4}
                value={formData.requirements}
                onChangeText={(text) => handleChange("requirements", text)}
              />
            </View>
          </View>

          {/* Salary */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Salary</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="cash-outline"
                size={22}
                color="#2a5298"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter salary"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={formData.salary}
                onChangeText={(text) => handleChange("salary", text)}
              />
            </View>
          </View>

          {/* Duration */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Duration (Days)</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="time-outline"
                size={22}
                color="#2a5298"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter job duration in days"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={formData.durationInDays}
                onChangeText={(text) => handleChange("durationInDays", text)}
              />
            </View>
          </View>

          {/* Category */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.inputContainer}>
              <Ionicons
                name="pricetag-outline"
                size={22}
                color="#2a5298"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter job category"
                placeholderTextColor="#aaa"
                value={formData.category}
                onChangeText={(text) => handleChange("category", text)}
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <LinearGradient
                colors={["#2a5298", "#1e3c72"]}
                style={styles.gradient}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="white"
                />
                <Text style={styles.buttonText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <LinearGradient
                colors={["#dc3545", "#c82333"]}
                style={styles.gradient}
              >
                <Ionicons name="close-circle-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Cancel</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  formContainer: { padding: 20, paddingTop: 40 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2a5298",
    marginBottom: 30,
    textAlign: "center",
  },
  inputWrapper: { marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "600", color: "#333", marginBottom: 8 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    elevation: 2,
  },
  textAreaContainer: { alignItems: "flex-start", paddingVertical: 10 },
  icon: { marginRight: 10 },
  textAreaIcon: { marginTop: 12 },
  input: { flex: 1, height: 50, fontSize: 16, color: "#333" },
  textArea: { height: 100, textAlignVertical: "top" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginTop: 30,
  },
  submitButton: { flex: 1, height: 55, borderRadius: 12, overflow: "hidden" },
  cancelButton: { flex: 1, height: 55, borderRadius: 12, overflow: "hidden" },
  gradient: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "white" },
});

export default NewJobs;
