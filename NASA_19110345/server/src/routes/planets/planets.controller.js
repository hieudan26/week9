const { getAllPlanets } = require('../../models/planets.model');

async function HttpGetAllPlanets(req, res){
    console.log(await getAllPlanets())
    return res.status(200).json(await getAllPlanets()); //default 200
}

module.exports = {
    HttpGetAllPlanets,
}