import express from "express";
import { 
    getJobsData,
    getjobsByQuery,
    getCurrentJobs,
    getCompaniesJobs,
    getJobsDataBySearch 
} from "../controllers/jobsController.js";

const jobsRouter = express.Router()

jobsRouter.get('/api/queries',getjobsByQuery);
jobsRouter.get('/api/jobs/:location',getJobsData);
jobsRouter.get('/api/jobs/:keyword',getJobsDataBySearch);
jobsRouter.get('/api/current/jobs/:keyword',getCurrentJobs);
jobsRouter.get('/api/companie/jobs/:keyword',getCompaniesJobs);

export default jobsRouter;
