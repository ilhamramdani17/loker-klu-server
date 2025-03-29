import express from "express";
import { getKategories } from "../controllers/kategoriesController.js";

const KategoriesRouter = express.Router()

KategoriesRouter.get('/api/kategories',getKategories);

export default KategoriesRouter;
