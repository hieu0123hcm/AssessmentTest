import express from "express";
import {
  searchWord,
  addWord,
  removeWord,
  loadTextFile,
} from "../controllers/corpus.js";

const router = express.Router();

//Get method
router.get("/getText", loadTextFile);
router.get("/search/:queryString", searchWord);
//Add method
router.post("/add", addWord);
//Remove method
router.patch("/remove/:param", removeWord);

export default router;
