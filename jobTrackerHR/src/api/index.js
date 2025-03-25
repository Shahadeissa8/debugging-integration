import axios from "axios";

// https://react-native-food-delivery-be.eapi.joincoded.com/api/category
const instance = axios.create({
  baseURL: "http://192.168.2.236:5208",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
