import express from 'express';
import dotenv from "dotenv";
import { AuthRouter } from "./routes/auth.js";
import { PostRoute } from "./routes/posts.js";
import { CONNECTDB } from "./config/config.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection 
CONNECTDB(process.env.MONGO_DB_URL);

app.get('/', (req, res, next) => {
    res.send({ message: 'on running' })
})
app.use("/api/user", AuthRouter);
app.use("/api/post", PostRoute);

//listen to the port 
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})