const express = require('express');
const { customercontroler } = require('../../controlers/customerControler/customerControler');

const customerOrder = express.Router();



customerOrder.get('/customerOrder',customercontroler)



module.exports = {customerOrder}