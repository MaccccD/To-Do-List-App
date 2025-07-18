//fetching the ids
const displayNumbers = document.getElementById("linear-Search");
const searchedItem = document.getElementById("searchItem");
const itemSearched = document.getElementById("item");
const sortNumbers = document.getElementById("sortNumbers");
const unsortNumbers = document.getElementById("unsortNumbers");

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
        const searchedNumber = parseInt(this.value);
        // let searchedNumbers = [];
        //
        // switch(searchedNumber){
        //     case "64":
        //         searchedNumbers = numbers.filter((number => number.value === searchedNumber));
        //     break;
        // }
        // ShowSearchedNumbers(searchedNumbers); // this method is not working and so i made changes:
        let foundNumber = null;
        for (let i = 0; i < numbers.length; i++) {
        if(numbers[i].value === searchedNumber){
            foundNumber = numbers[i];
            console.log(`Found  ${searchedNumber}`);
            ShowSearchedNumbers([foundNumber]);
        }
        if(!foundNumber){
            itemSearched.innerHTML = `<h1 style = "color: red"> Value not found!</h1>`;
        }
        }
    });
}
SearchNumbers();

//displaying the numbers that were searched :
function ShowSearchedNumbers(searchedNumbers){
 itemSearched.innerHTML = `<h1 style = "color: green"> Value found!</h1>`;
  searchedNumbers.forEach(num => {
     const item = document.createElement("span");
     item.innerText = num.value;
     item.style.color = "orange";
    // item.setAttribute("data-index", index);
     itemSearched.appendChild(item);
     console.log(item);
  });
}

function SetOrder(){
    sortNumbers.addEventListener("click", function(){
     numbers.sort((a, b)=> a.value - b.value);
     ShowSortedNumbers();
    })
}
SetOrder();

function ResetOrder(){
   unsortNumbers.addEventListener("click", function(){
    numbers.sort((a, b) => b.value - a.value);
    ShowSortedNumbers();
   }) 
}
ResetOrder();
function ShowSortedNumbers(){
    displayNumbers.innerHTML = "";
    numbers.forEach(number => {
    const sortedNumberText = document.createElement("div");
    sortedNumberText.innerText = number.value;
    sortedNumberText.style.color = "purple";
    displayNumbers.appendChild(sortedNumberText);
    console.log(sortedNumberText);
    })
}
