import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);
mongoose
  .connect(
    "mongodb+srv://@cmongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("successfully connected");
    app.listen(PORT, () => console.log(`App is listening to port ${PORT}`));
  })
  .catch((e) => {
    console.log(e);
  });
