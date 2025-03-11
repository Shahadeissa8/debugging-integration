import instance from ".";
import { setToken } from "./storage";

// Get application by ID
const getApplicationById = async (id) => {
  try {
    const res = await instance.get(`/api/Applications/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Approve application
const approveApplication = async (id) => {
  try {
    const res = await instance.put(`/api/Applications/${id}/approve`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Reject application
const rejectApplication = async (id) => {
  try {
    const res = await instance.put(`/api/Applications/${id}/reject`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Get pending applications
const getPendingApplications = async () => {
  try {
    console.log("📡 Fetching pending applications...");
    const res = await instance.get("/api/Applications/pending");
    console.log("✅ API Response Data:", res.data);
    return res.data;
  } catch (error) {
    console.error("❌ API Request Failed:", error);
    console.error("🛑 Error Details:", error?.response?.data || error);
    return [];
  }
};

// Get archived (rejected) applications
const getArchivedApplications = async () => {
  try {
    const res = await instance.get("/api/Applications/archived");
    return res.data;
  } catch (error) {
    console.log(error);
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
    return res.data;
  } catch (error) {
    console.log(error);
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
