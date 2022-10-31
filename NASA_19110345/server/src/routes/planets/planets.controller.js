const {getAllPlanets} = require('../../models/planets.model');

function HttpGetAllPlanets(req, res){
    console.log(getAllPlanets())
    return res.status(200).json(getAllPlanets()); //default 200
}

module.exports = {
    HttpGetAllPlanets,
}