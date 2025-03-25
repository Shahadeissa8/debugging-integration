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
import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../context/UserContext";

const RegisterPage = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      alert("Account created");
      setIsAuth(true);
    },
    onError: () => {
      alert("Error in creating account");
    },
  });
  return (
    <LinearGradient
      colors={["#1e3c72", "#2a5298"]} // Professional blue gradient
      style={styles.container}
    >
      <Text style={styles.title}>register</Text>

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
          placeholderTextColor="#888"
          // value="Username"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, UserName: value });
          }}
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
          style={styles.password}
          placeholder="Enter Your Password"
          placeholderTextColor="#888"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, Password: value });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons
          name="accessibility-outline"
          size={20}
          color="#aaa"
          style={styles.icon}
        />

        <TextInput
          style={styles.password}
          placeholder="Enter Your HR ID"
          placeholderTextColor="#888"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, HREmployeeId: value });
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(userInfo);
          mutate();
        }}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already a user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.footerLink}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default RegisterPage;

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
