const API_URL = "http://localhost:8000/v1";

async function httpGetPlanets() {
  console.log("fetch httpGetPlanets");
  const response = await fetch(`${API_URL}/planets`);
  return  await response.json();
 
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  console.log("fetch httpGetLaunches");
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a,b)=>{
    return a.flightNumber - b.flightNumber;
  })
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  console.log("fetch httpGetLaunches");
  try{
    return await fetch(`${API_URL}/launches`,{
      method:"post",
      body: JSON.stringify(launch),
      headers:{
        "Content-Type":"application/json",
      }
    });
  }catch(err){
    return{
      ok:false
    }
  }
  
}

async function httpAbortLaunch(id) {
  console.log("fetch httpGetLaunches");
  try{
    return await fetch(`${API_URL}/launches/${id}`,{
      method:"delete"
    });
  }catch(err){
    return{
      ok:false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};