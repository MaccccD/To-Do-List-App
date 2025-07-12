//fetching the ids
const displayNumbers = document.getElementById("linear-Search");
const searchedItem = document.getElementById("searchItem");
const itemSearched = document.getElementById("item");

//the actual array of numbers:
const numbers = [{id: 0,
    value : 64}, 
    {id: 1,
     value: 34}, 
    {id: 2,
     value: 25}, 
    {id: 3,
     value: 12}, 
    {id: 4,
     value: 22},
    { id: 5,
     value: 11}, 
    { id: 6,
     value: 90}, 
    { id: 7,
     value: 88}, 
    { id: 8,
     value: 76}, 
     {id: 9,
     value:50}
    ];

//display tge numbers in the array
function ShowNumbers(){
 displayNumbers.innerHTML = "";
 numbers.forEach(number => {
    const spanText = document.createElement("div");
    spanText.innerText = number.value;
    spanText.style.color = "green";
    displayNumbers.appendChild(spanText);
    console.log(spanText);
 });
}
ShowNumbers();

//adding search fucntionality :
function SearchNumbers(){
    searchedItem.addEventListener("change", function(){
        const searchedNumber = this.value;
        let searchedNumbers = [];

        switch(searchedNumber){
            case "64":
                searchedNumbers = numbers.map((number => number.value));
        }
        ShowSearchedNumbers(searchedNumbers);
    
    });
}
SearchNumbers();

//displaying the numbers that were searched :
function ShowSearchedNumbers(searchedNumbers){
 itemSearched.innerHTML = "";
  searchedNumbers.forEach(num => {
     const item = document.createElement("span");
     item.innerText = num;
     item.style.color = "orange";
    // item.setAttribute("data-index", index);
     itemSearched.appendChild(item);
     console.log(item);
  });
}
