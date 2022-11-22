const { 
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchById,
  } = require('../../models/launches.model');
  
  const {
    getPagination,
  } = require('../../services/query');

async function HttpGetAllLaunches(req, res){
    const { skip, limit } = getPagination(req.query);
    const launches = await getAllLaunches(skip, limit);
    return res.status(200).json(launches); //default 200
}

async function HttpAddLaunches(req, res){
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

    await scheduleNewLaunch(launch)
    res.status(201).json(launch);
}


async function HttpAbortLaunches(req, res){
    const launchId = Number(req.params.id);

    const existLaunch = await existLauncheWithId(launchId);
    if(!existLaunch){
        return res.status(404).json({
            error : "not found"
        });
    }
    const aborted =  await abortLaunch(launchId);
    if (!aborted) {
        return res.status(400).json({
          error: 'Launch not aborted',
        });
      }

      return res.status(200).json({
        ok: true,
      });

}
module.exports = {
    HttpGetAllLaunches,
    HttpAddLaunches,
    HttpAbortLaunches
}