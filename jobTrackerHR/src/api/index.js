import axios from "axios";

// https://react-native-food-delivery-be.eapi.joincoded.com/api/category
const instance = axios.create({
  // baseURL: "http://localhost:5208",
  baseURL: "http://192.168.2.235:5208",
  // baseURL: "http://10.0.2.2:5208",
  // baseURL: "https://react-native-food-delivery-be.eapi.joincoded.com/",
});

export default instance;
