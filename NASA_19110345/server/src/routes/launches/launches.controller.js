const {getAllLaunches,
addNewLaunch,
existLauncheWithId,
abortLaunch} = require('../../models/launches.model');

function HttpGetAllLaunches(req, res){
    console.log(getAllLaunches())
    return res.status(200).json(getAllLaunches()); //default 200
}
function HttpAddLaunches(req, res){
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.target){
            return res.status(400).json(
                {
                    error:'Missing required launch property'
                }
            );
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json(
            {
                error:'Invalid Date'
            }
        );
    }

    addNewLaunch(launch);
    res.status(201).json(launch);
}


function HttpAbortLaunches(req, res){
    const launchId = Number(req.params.id);
    if(!existLauncheWithId(launchId)){
        return res.status(404).json({
            error : "not found"
        });
    }
    const aborted = abortLaunch(launchId);
    return res.status(200).json(aborted);

}
module.exports = {
    HttpGetAllLaunches,
    HttpAddLaunches,
    HttpAbortLaunches
}