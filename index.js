const express = require("express");
const { getAllPosts } = require("./src/routes");

const app = express();

app.use("/", getAllPosts);

const port = 3000;

app.listen(port, () => console.log(`on 3000`));
