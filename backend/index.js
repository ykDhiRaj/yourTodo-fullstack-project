const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const todoRouter = require("./routes/todoRoute")
const userRouter = require("./routes/userRoute")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})


app.use("/api/todos",todoRouter);
app.use("/api/user",userRouter)


app.listen(process.env.PORT);

//MongoDB connection
mongoose.connect(process.env.URI).then(()=>{
    console.log(`Connected to MongoDB app running at Port ${process.env.PORT}`)
}).catch(()=>{
    console.log("Some error occured")
})