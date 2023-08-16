
const express = require("express");
const { adminControler } = require("../../controlers/admincontroler/adminControler");


const adminRoute = express.Router();


adminRoute.get('/adminData',adminControler)


// named  export 
module.exports = {adminRoute};