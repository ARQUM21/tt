import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import mongoose  from "mongoose";
import cors from "cors";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("welcome to backend")
})


app.use('/tasks',taskRoutes);



const PORT = process.env.PORT || 3333
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI).then(() => {
    console.log("DB connected");
}).catch((error) => {
    console.log("DB not connected", error);
})




app.listen(PORT, () => {
    console.log("Server Started");
})

