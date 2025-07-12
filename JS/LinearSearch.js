//fetching the ids
const displayNumbers = document.getElementById("linear-Search");
const searchedItem = document.getElementById("searchItem");

//the actual array of numbers:
const numbers = [64, 34, 25, 12, 22, 11, 90, 88, 76, 50];

//display tge numbers in the array
function ShowNumbers(){
 displayNumbers.innerHTML = "";
 numbers.forEach(number => {
    const spanText = document.createElement("div");
    spanText.innerText = `<h1>Linear Search Numbers:</h1>`
    spanText.innerText = number;
    displayNumbers.appendChild(spanText);
    console.log(spanText);
 });
}ShowNumbers();
