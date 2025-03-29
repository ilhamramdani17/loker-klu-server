import express from "express";
import { getStatus } from "../controllers/statusController.js";

const StatusRouter = express.Router()

StatusRouter.get('/api/status',getStatus);

export default StatusRouter;
