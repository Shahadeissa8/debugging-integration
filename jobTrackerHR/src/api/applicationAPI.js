// import instance from ".";
// import { setToken } from "./storage";

// // Get application by ID
// const getApplicationById = async (id) => {
//   try {
//     const res = await instance.get(`/api/Applications/${id}`);
//     return res.data;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log("Applicant not found");
//     } else {
//       console.log("An error occurred:", error.message);
//     }
//   }
// };

// // Approve application
// const approveApplication = async (id) => {
//   try {
//     const res = await instance.put(`/api/Applications/${id}/approve`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Reject application
// const rejectApplication = async (id) => {
//   try {
//     const res = await instance.put(`/api/Applications/${id}/reject`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Get pending applications
// const getPendingApplications = async () => {
//   try {
//     const response = await instance.get("/api/Applications/pending"); // Fetch the list of applicants
//     return response.data;
//   } catch (error) {
//     throw new Error("Error fetching applicants: " + error.message);
//   }
// };

// // Get archived (rejected) applications
// const getArchivedApplications = async () => {
//   try {
//     const res = await instance.get("/api/Applications/archived");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Get approved applications (NEW FUNCTION ADDED)
// const getApprovedApplications = async () => {
//   try {
//     const res = await instance.get("/api/Applications/approved", {
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export {
//   getApplicationById,
//   approveApplication,
//   rejectApplication,
//   getPendingApplications,
//   getArchivedApplications,
//   getApprovedApplications,
// };

import instance from ".";

// Get application by ID
const getApplicationById = async (id) => {
  try {
    const res = await instance.get(`/api/Applications/${id}`);
    // Return the data directly if the response is successful
    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Applicant not found");
      return null; // Returning null if not found
    } else {
      console.log("An error occurred:", error.message);
      return null; // Returning null on error
    }
  }
};

// Approve application
const approveApplication = async (id) => {
  try {
    const res = await instance.put(`/api/Applications/${id}/approve`);
    return res.data; // Return the approved application data
  } catch (error) {
    console.log("Error approving application:", error);
    return null; // Return null on error
  }
};

// Reject application
const rejectApplication = async (id) => {
  try {
    const res = await instance.put(`/api/Applications/${id}/reject`);
    return res.data; // Return rejected application data
  } catch (error) {
    console.log("Error rejecting application:", error);
    return null; // Return null on error
  }
};

// Get pending applications
const getPendingApplications = async () => {
  try {
    const response = await instance.get("/api/Applications/pending");
    return response.data; // Return the list of pending applications
  } catch (error) {
    console.log("Error fetching pending applications:", error.message);
    return []; // Return an empty array in case of error
  }
};

// Get archived (rejected) applications
const getArchivedApplications = async () => {
  try {
    const res = await instance.get("/api/Applications/archived");
    return res.data; // Return the archived (rejected) applications
  } catch (error) {
    console.log("Error fetching archived applications:", error.message);
    return []; // Return an empty array in case of error
  }
};

// Get approved applications (NEW FUNCTION ADDED)
const getApprovedApplications = async () => {
  try {
    const res = await instance.get("/api/Applications/approved", {
      headers: {
        Accept: "application/json",
      },
    });
    return res.data; // Return the approved applications
  } catch (error) {
    console.log("Error fetching approved applications:", error.message);
    return []; // Return an empty array in case of error
  }
};

export {
  getApplicationById,
  approveApplication,
  rejectApplication,
  getPendingApplications,
  getArchivedApplications,
  getApprovedApplications,
};
