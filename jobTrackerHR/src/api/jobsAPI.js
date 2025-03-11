import instance from ".";
import { setToken } from "./storage";

// Create a new job
const createJob = async (jobInfo) => {
  const formData = new FormData();

  for (let key in jobInfo) {
    formData.append(key, jobInfo[key]);
  }

  try {
    const res = await instance.post("/api/Jobs/CreateJob", formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Get job by ID
const getJobById = async (id) => {
  try {
    const res = await instance.get(`/api/Jobs/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Get active jobs
const getActiveJobs = async () => {
  try {
    const res = await instance.get("/api/Jobs/active");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Get applicants for a job by job ID
const getApplicantsByJobId = async (jobId) => {
  try {
    const res = await instance.get(`/api/Jobs/job/AllApplicants/${jobId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { createJob, getJobById, getActiveJobs, getApplicantsByJobId };
