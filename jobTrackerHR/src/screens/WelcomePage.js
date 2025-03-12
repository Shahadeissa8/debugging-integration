import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
const { width } = Dimensions.get("window");
const WelcomePage = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1500,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [fadeAnim, slideAnim, rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <LinearGradient colors={["#1e3c72", "#2a5298"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
          <Animated.Image
            source={require("../../assets/62caea4e-1e44-4584-9d9b-a2d50cc1e9f9.jpg")} // ✅ Update with correct logo path
            style={[styles.logo, { transform: [{ rotate: spin }] }]}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.textContainer,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <Text style={styles.title}>فرصتك</Text>
        </Animated.View>

        {/* ✅ Register Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
          <Ionicons name="arrow-forward-circle" size={32} color="#007bff" />
        </TouchableOpacity>

        {/* ✅ Login Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
          <Ionicons name="arrow-forward-circle" size={32} color="#007bff" />
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 150,
  },
  textContainer: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  getStartedButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#007bff",
    marginRight: 10,
  },
});
