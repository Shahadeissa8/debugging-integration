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

const LoginPage = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const { isAuth, setIsAuth } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: (userInfo) => login(userInfo),
    onSuccess: (data) => {
      console.log("API Response:", data);
      if (data && data.token) {
        // Check if a token is received
        alert("Welcome");
        setIsAuth(true);
      } else {
        alert("Login failed. No token received.");
      }
    },
    onError: (error) => {
      console.error("mutation error", error);
      alert(`Error Occurred: ${error.message || "Unknown error"}`);
    },
  });

  const handleLogin = (credentials) => {
    // Validate the fields
    // setUserInfo({ UserName: username, Password: password });

    const userInfo = {
      UserName: username,
      Password: password,
    };
    // setUserInfo({ username, password }); // Update the user info state
    // mutate(); // Call the mutation
    mutate(userInfo);
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
          // onChangeText={(value) => {
          //   setUserInfo({ ...userInfo, UserName: value });
          // }}
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
          // onChangeText={(value) => {
          //   setUserInfo({ ...userInfo, Password: value });
          // }}
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

      {/* <TouchableOpacity style={styles.button} onPress={handleLogin}> */}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => {
        //   mutate(userInfo);
        // }}
        onPress={handleLogin}
      >
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
    color: "lightblue",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginPage;
