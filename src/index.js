const express = require("express");
const { adminRoute } = require("./routes/admin/adminRoute");
const { customerOrder } = require("./routes/customer/customerOrder");

const app = express();

require("dotenv").config()
let port = process.env.PORT


app.use('/admin',adminRoute)
app.use(customerOrder)

app.listen(port,()=>{
    console.log(`this server is running on ${port}`)
})