require("dotenv").config()
const express = require("express");
const moongose = require("mongoose")
const app = express();
const restaurantRoutes = require("./routes/routes");


app.use(express.json())
app.use((req,res,next)=> {console.log(`Path: ${req.path}, Method: ${req.method}`); next()})

//Routes
app.use("/api/restaurants",restaurantRoutes)
//connect to db
moongose.connect(process.env.MONGO_URL).then(
    ()=>{
        app.listen(process.env.PORT,()=>console.log(`Listening on port ${process.env.PORT}`))
    },
    e=>console.log(e)
)