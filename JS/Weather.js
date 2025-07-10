//collecting refrences:
const displayWeather = document.getElementById("display-Weather");
const searchingItems = document.getElementById("searching");
const searchCity = document.getElementById("searchCity");

const weatherData = [{ //created my own local data
          Location: "Alberton, 1448",
          Temperature: 12,
          Precipitation: 0,
          Humidity: 50,
          Wind: 5,
          Forecast: "Clear Skies"
        }];
 async function FetchWeatherData(){
    try {
        
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
  weatherCard.innerHTML = `<h1>Location: ${data.Location}</h1>
   <p>Temperature: ${data.Temperature}</p>
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
searchCity.addEventListener("change",function(){
const searchedItem = this.value;
let filteredItems = [];
switch(searchedItem){
   case "Location":
    filteredItems = weatherData.map(data=> data.Location);
    break;
   case "Temperature":
    filteredItems = weatherData.map(data => data.Temperature + " degrees celsious");
    break;
   case "Precipitation":
      filteredItems = weatherData.map(data => data.Precipitation + "%");
      break;
   case "Humidity":
      filteredItems = weatherData.map(data=> data.Humidity + "%");
      break;
   case "Wind": 
      filteredItems = weatherData.map(data => data.Wind + "km/h");
      break;
    case "Forecast":
      filteredItems = weatherData.map(data => data.Forecast);
      break;
    
 }

  DisplaySearchedItems(filteredItems);
  console.log(filteredItems);

 });
 }
 
 Search();


function DisplaySearchedItems(searchedItems){
    searchingItems.innerHTML = "";
    displayWeather.innerText = "";
    searchedItems.forEach(itemSearched => {
    const searchedItem = document.createElement("div");
    searchedItem.textContent = itemSearched;
    searchedItem.style.color = "green";
    searchingItems.appendChild(searchedItem);
    console.log("working, yayyy! bc each searched item is showing as intended");
  });

}
