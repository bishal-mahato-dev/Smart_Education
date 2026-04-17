const mongoose=require("mongoose");
require("dotenv").config();
const URL=process.env.MONGO_URI;
//console.log(URL)
mongoose.connect(URL).then(()=>{
  console.log("mongodb connected");
}).catch((error)=>{
  console.log("connection failed");
  console.log(error.message);
})