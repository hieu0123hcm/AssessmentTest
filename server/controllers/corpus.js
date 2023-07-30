import fs from "fs";
import Fuse from "fuse.js";

const dataURL = "../server/data/hemingway.txt";
const fuzzyOptions = {
  threshold: 1,
  ignoreLocation: true,
  includeScore: true,
  useExtendedSearch: true,
};

export const loadTextFile = (req, res) => {
  fs.readFile(dataURL, "utf8", (err, data) => {
    if (err) {
      res.status(404).json({ message: "Something get wrong! (" + err + ")" });
    }

    res
      .status(200)
      .json({ message: "Load successfully", type: "load", results: data });
  });
};

export const searchWord = (req, res) => {
  const { queryString } = req.params;

  fs.readFile(dataURL, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).json({ message: "Something get wrong!" });
    }
    const dataArray = [...new Set(data.toLocaleLowerCase().split(/\W+/))];
    const searcher = new Fuse(dataArray, fuzzyOptions);
    const result = searcher.search(queryString);

    res
      .status(200)
      .json({ message: "Get successfully", type: "search", results: result });
  });
};

export const removeWord = async (req, res) => {
  const { param } = req.params;

  //read text file
  fs.readFile(dataURL, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).json({ message: "Something get wrong!" });
    }
    //search for most similar
    const dataArray = [...new Set(data.toLocaleLowerCase().split(/\W+/))];
    const searcher = new Fuse(dataArray, fuzzyOptions);
    const result = searcher.search(param);

    const mostSimilarWord = result[0].item;

    let regEx = new RegExp("\\b" + mostSimilarWord + "\\b", "gi");

    //delete word (replace word with white space)
    let newFile = data.replace(regEx, " ");
    fs.writeFileSync(dataURL, newFile, "utf-8");
    res.status(200).json({
      message: `successfully delete ${mostSimilarWord}`,
      type: "remove",
      result: mostSimilarWord,
    });
  });
};

export const addWord = async (req, res) => {
  const { content } = req.body;
  //add white space before word
  const entryContent = ` ${content}`;

  fs.appendFile(dataURL, entryContent, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).json({ message: "Something get wrong when write file!" });
    }
    res.status(200).json({
      message: `successfully add ${entryContent}`,
      type: "add",
      result: entryContent,
    });
  });
};
