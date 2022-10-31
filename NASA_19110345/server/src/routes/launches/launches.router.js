const express = require('express');
const {
    HttpGetAllLaunches,
    HttpAddLaunches,
    HttpAbortLaunches
    
} = require('./launches.controller')
const planetsRouter = express.Router();

planetsRouter.get('/',HttpGetAllLaunches);
planetsRouter.post('/',HttpAddLaunches);
planetsRouter.delete('/:id',HttpAbortLaunches);
module.exports = planetsRouter;