const express= require('express');
const app= express();
const port= 8000;
const cors = require ('cors');
const mongoose= require('mongoose');
const userRouter= require('./routes/userRoute');
const queryRoute = require('./routes/queryRoute');
const adRoute= require('./routes/adRoute');
// app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/karam')
.then(()=>console.log("Connection done"))
.catch((err)=>console.log("Error found",err));

app.use(express.json());
app.use(cors());
app.use(adRoute);
app.use(queryRoute);
app.use(userRouter)

app.listen(port,()=>console.log(`server started on ${port}`));