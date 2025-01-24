// Importing express
import express from "express";
// Improting cors which handile cors policies
import cors from "cors";
// Importing dotenv
import dotenv from "dotenv";
dotenv.config();
// imporing DB connection
import connectDB from "./database/connection.js";

import router from "./Route/route.js";
import userRouter from "./Route/userRoute.js";

// Creating object for expresss
const app = express();
// For allowing other orgin
app.use(cors());

app.use(express.json());
// creating responce for home routs
app.get("/", (req, res) => {
    res.status(200).json("Sucessfully connected");
  });

app.use("/user",userRouter)
app.use("/api", router);
// app.get("/madhu",(req,res) =>{

// })

// connnection
const startserver = async () => {
    await connectDB();
    //  starting server
    app.listen(process.env.X_ZOHO_CATALYST_LISTEN_PORT, '0.0.0.0', () => {
      console.log(`Server Running at ${process.env.X_ZOHO_CATALYST_LISTEN_PORT}`);
    });
    
  };
  startserver();