import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import corpusRoutes from "./routes/corpus.js";

const app = express();

//server config
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//main routing
app.use("/corpus", corpusRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started Port: ${PORT}`));
