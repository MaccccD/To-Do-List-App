//collecting refrences:
const displayWeather = document.getElementById("display-Weather");
const searchCity = document.getElementById("searchCity");


//Fetch data from an external API:
async function FetchWeatherData(){
    try {
        const weatherData = [{
          location: "Alberton, 1448",
          temperature: 12,
          Precipitation: 0,
          Humidity: 50,
          Wind: 5,
          Forecast: "Clear Skies"
        }];
         DisplayWeatherData(weatherData);
        // const response = await fetch(weatherData); //comented it put bc the fetch expects a url not an array and i diecided to create my own data
        // if(!response.ok){
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // console.log(data);
       
    }
    catch(error){
        console.error("Error fetching data, pls try again!", error);
    }
   
}
FetchWeatherData();

//display the fetched weather data:
function DisplayWeatherData(dataInfo){
  displayWeather.innerHTML = "";
  dataInfo.forEach(data => {
  const weatherCard = document.createElement("div");
  weatherCard.innerHTML = `<h1>Location: ${data.location}</h1>
   <p>Temperature: ${data.temperature}</p>
   <p>Forecast: ${data.Forecast}</p>
   <p>Precipitation: ${data.Precipitation}%</p>
   <p>Humidity: ${data.Humidity}%</p>
   <p>Wind: ${data.Wind}km/h.
  `
  displayWeather.appendChild(weatherCard);
  console.log(weatherCard);
  });
 

}

//searching by city functionality:
function Search(){

}