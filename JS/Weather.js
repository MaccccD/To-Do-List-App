//collecting refrences:
const displayWeather = document.querySelector("div");
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
        const response = await fetch(weatherData);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        DisplayWeatherData(data);
    }
    catch(error){
        console.error("Error fetching data, pls try again!", error);
    }
   
}
FetchWeatherData();

//display the fetched weather data:
function DisplayWeatherData(data){
  displayWeather.innerHTML = "";
  const spanText = document.createElement("span");
  spanText.innerText = data;
  displayWeather.appendChild(spanText);
  console.log(spanText);

}

//searching by city functionality:
function Search(){

}