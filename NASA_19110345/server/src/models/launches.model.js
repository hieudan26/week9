const launches = new Map();
var lastLaunch = 100;
const launch = {
    flightNumber: 100,
    mission : 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate : new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){

    return Array.from(launches.values());
}

function addNewLaunch(launch){
    lastLaunch++;
    launches.set(lastLaunch, Object.assign(launch,{
        customer: ['NASA', 'ZTM'],
        flightNumber : lastLaunch, 
        upcoming: true,
        success: true,
    }));

}

function abortLaunch(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
function existLauncheWithId(launchId){
    return launches.has(launchId);
}

module.exports ={
    getAllLaunches,
    abortLaunch,
    existLauncheWithId,
    addNewLaunch,
}
