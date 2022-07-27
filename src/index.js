const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const route = require("./routes/route")
const app = express()


app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


dotenv.config({path:"./config.env"})
const DB = process.env.DATABASE;
const PORT = process.env.PORT



mongoose.connect(DB, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Is Connected To 27017"))
    .catch(err => console.log(err))



app.use("/", route)


app.listen(PORT, () => console.log(`Express App Running On ${PORT}`))