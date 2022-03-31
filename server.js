const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const url =
  "https://6227584d-65bc-4880-a99a-95ad9dbfeea6-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";
const token =
  "AstraCS:nDDKQiOEHpUZvYkBJbZOXwqe:805b8a2dfc799db7c9159eb744be14bf13fe00352bd6a117477f216d336dab8a";

app.get("/tickets", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
    },
  };

  try {
    const response = await axios(`${url}?page-size=20`, options);
    res.status(200).json(response.data)
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log("Running"));
