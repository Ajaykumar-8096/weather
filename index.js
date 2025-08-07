const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultcontainer = document.getElementById("result");
const aqiresult = document.getElementById("aqi");
const coresult = document.getElementById("co");
const o3result = document.getElementById("o3");
const no2result = document.getElementById("no2");
const pm10result = document.getElementById("pm10");
const pm25result = document.getElementById("pm25");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    console.log(latitude);
    console.log(longitude);
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lat=${latitude}&lon=${longitude}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '069add3731msh274a7ce1ae24bebp192025jsn63c458db5efa',
		'x-rapidapi-host': 'air-quality.p.rapidapi.com'
	}
};
fetch(url,options)
    .then(Response=>Response.json())
    .then(result=>{
        console.log(result);
        let readings = result.data[0];
        console.log(readings);
        aqiresult.textContent=readings.aqi;
        coresult.textContent=readings.co;
        o3result.textContent=readings.o3;
        no2result.textContent=readings.no2;
        pm10result.textContent=readings.pm10;
        pm25result.textContent=readings.pm25;
        resultcontainer.style.display = 'flex';
        



    })
})