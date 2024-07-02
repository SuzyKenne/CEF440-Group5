require('dotenv').config();
const express = require ('express');
const path = require('path');
const mongoose = require ('mongoose');




const app = express();


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
})


//Check database connect or not

mongoose.connect(process.env.DATABASE1_URL)
.then(()=>{
    console.log("Database Connected Successfully");
})
 .catch(()=>{
  console.log("Database was not connected");
})