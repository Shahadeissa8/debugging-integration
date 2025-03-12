import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";

// const LoginPage = () => {
//   const navigation = useNavigation();

//   const [userInfo, setUserInfo] = useState({});
//   const { isAuth, setIsAuth } = useContext(UserContext);
//   const { mutate } = useMutation({
//     mutationKey: ["login"],
//     mutationFn: () => login(userInfo),
//     onSuccess: () => {
//       alert("welcome");
//       setIsAuth(true);
//     },
//     onError: (error) => {
//       console.error("mutation error", error);
//       alert(`Error Occurred: ${error.message || "Unknown error"}`);
//     },
//   });
//   // State variables
//   const [username, setUsername] = useState({});
//   const [password, setPassword] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   // Handle login
//   const handleLogin = () => {
//     // Validate the fields
//     if (!username || !password) {
//       Alert.alert("Error", "Please fill in both fields");
//       return;
//     }

//     // Username validation (ensure username is at least 7 characters)
//     if (username.length < 7) {
//       Alert.alert("Error", "Username must be at least 7 characters");
//       return;
//     }

//     // Password validation (strong password rules)
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordRegex.test(password)) {
//       Alert.alert(
//         "Error",
//         "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character."
//       );
//       return;
//     }
//     mutate(); // Call the mutation on form validation success

//     console.log("Logging in:", { username, password });
//     // Make API request for login here
//   };

//   return (
//     <LinearGradient
//       colors={["#1e3c72", "#2a5298"]} // Professional blue gradient
//       style={styles.container}
//     >
//       <Text style={styles.title}>Login</Text>

//       <View style={styles.inputContainer}>
//         <Ionicons
//           name="person-outline"
//           size={20}
//           color="#aaa"
//           style={styles.icon}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           placeholderTextColor="#aaa"
//           value={username}
//           onChangeText={(value) => {
//             setUserInfo({ ...userInfo, UserName: value });
//           }}
//         />

//         {/* <Ionicons name="person-outline" size={20} color="#aaa" style={styles.icon} /> */}
//       </View>

//       <View style={styles.inputContainer}>
//         <Ionicons
//           name="lock-closed-outline"
//           size={20}
//           color="#aaa"
//           style={styles.icon}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!showPassword}
//           value={password}
//           onChangeText={setPassword}
//         />
//         {/* <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} /> */}
//         <TouchableOpacity
//           onPress={() => setShowPassword(!showPassword)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={showPassword ? "eye-outline" : "eye-off-outline"}
//             size={20}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate("Register")}>
//           <Text style={styles.footerLink}>Register Here</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// import { useMutation } from "@tanstack/react-query";
// import { Alert } from "react-native";

// Function to handle API call for login
// const login = async (userInfo) => {
//   try {
//     // Replace this with your actual API call
//     const response = await fetch("/api/Account/Login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userInfo),
//     });

//     if (!response.ok) {
//       throw new Error("Login failed. Please check your credentials.");
//     }

//     // Assuming you get a token or user info back
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

const LoginPage = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({});
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: (data) => {
      alert("Welcome");
      setIsAuth(true);
      // You might want to save the user data or token to local storage/session here.
    },
    onError: (error) => {
      console.error("mutation error", error);
      alert(`Error Occurred: ${error.message || "Unknown error"}`);
    },
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Validate the fields
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields");
      return;
    }

    // Username validation (ensure username is at least 7 characters)
    if (username.length < 7) {
      Alert.alert("Error", "Username must be at least 7 characters");
      return;
    }

    // Password validation (strong password rules)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    setUserInfo({ username, password }); // Update the user info state
    mutate(); // Call the mutation
  };

  return (
    <LinearGradient
      colors={["#1e3c72", "#2a5298"]} // Professional blue gradient
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#aaa"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.footerLink}>Register Here</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: "100%",
    height: 55,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#1e3c72",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#fff",
    marginTop: 15,
    fontSize: 14,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  registerHint: {
    color: "#fff",
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  footer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
  footerLink: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
