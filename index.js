import Cors from "cors";
import "./utils/database.js";
import express from "express";
import bodyParser from "body-parser";
import jobsRouter from "./routes/jobsRouter.js";
import StatusRouter from "./routes/statusRouter.js";
import TemplatesRouter from "./routes/templatesRouter.js";
import KategoriesRouter from "./routes/kategoriesRouter.js";

const PORT = 3000;
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Cors middleware
app.use(Cors());

//routes
app.use(jobsRouter);
app.use(StatusRouter);
app.use(TemplatesRouter);
app.use(KategoriesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
