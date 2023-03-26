const functions = require("firebase-functions");
const productRoutes = require("./routes/product-routes");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({origin: true}));

app.use(productRoutes.routers);

exports.api = functions.https.onRequest(app);
