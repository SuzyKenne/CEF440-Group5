require('dotenv').config();


//Check the second database connection
mongoose.connect(process.env.DATABASE2_URL)
.then(()=>{
    console.log("Database2 Connected Successfully");
})
 .catch(()=>{
  console.log("Database2 was not connected");
})

