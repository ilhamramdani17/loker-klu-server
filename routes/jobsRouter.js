import express from "express";
import { 
    getJobsData,
    getjobsByQuery,
    getJobsDataBySearch 
} from "../controllers/jobsController.js";

const jobsRouter = express.Router()

jobsRouter.get('/api/queries',getjobsByQuery);
jobsRouter.get('/api/jobs/:location',getJobsData);
jobsRouter.get('/api/jobs/:keyword',getJobsDataBySearch);

export default jobsRouter;
