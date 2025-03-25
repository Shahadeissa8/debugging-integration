// import instance from ".";
// import { setToken } from "./storage";

// const register = async (userInfo, image) => {
//   const formData = new FormData();

//   for (key in userInfo) {
//     formData.append(key, userInfo[key]);
//   }
//   // formData.append("image", {
//   //   name: "image.jpeg",
//   //   type: "image/jpeg",
//   //   uri: image,
//   // });

//   console.log(formData);
//   try {
//     const res = await instance.post("/api/Account/Register", formData);
//     console.log(res);

//     setToken(res.data.token);

//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const login = async (userInfo) => {
//   const res = await instance.post("/api/Account/Login", userInfo);
//   // console.log("LOGIN TOKEN", res.data.token);
//   setToken(res.data.token);
//   return res.data;
// };
// // const profile = async () => {
// //   const res = await instance.get("/auth/profile");
// //   return res.data;
// // };

// export { login, register };

import instance from ".";
import { setToken } from "./storage";

const register = async (userInfo, image) => {
  const formData = new FormData();

  for (key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  formData.append("image", {
    name: "image.jpeg",
    type: "image/jpeg",
    uri: image,
  });

  console.log(formData);
  try {
    const res = await instance.post("/api/Account/register", formData);
    console.log(res);

    setToken(res.data.token);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  const res = await instance.post("/api/Account/Login", userInfo);

  console.log("LOGIN TOKEN", res.data.token);
  setToken(res.data.token);
  return res.data;
};

export { login, register };
