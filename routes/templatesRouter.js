import express from "express";
import { getEmailTemplates } from "../controllers/templatesController.js";

const TemplatesRouter = express.Router()

TemplatesRouter.get('/api/emails/templates/:id',getEmailTemplates);

export default TemplatesRouter;
