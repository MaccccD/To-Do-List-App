//fetching the ids
const displayNumbers = document.getElementById("linear-Search");
const searchedItem = document.getElementById("searchItem");
const itemSearched = document.getElementById("item");
const sortNumbers = document.getElementById("sortNumbers");
const unsortNumbers = document.getElementById("unsortNumbers");
const swapNumbers = document.getElementById("swapNumbers");

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

function ShowSwappedNumbers(){ // the fix. Just used the original values and created an array that holds those values but swapped.
  displayNumbers.innerHTML = "";

  let swappedValues = [34, 64, 12, 25, 11, 22, 88, 90, 50, 76];

  swappedValues.forEach(value =>{
    const num = document.createElement("div");
    num.innerText = value;
    num.style.color = "purple";
    displayNumbers.appendChild(num);
    console.log("showing swapped values!");
  })
}

function LinearSearch(arr, target){ // this for loop checks if the value of what is being searched for in the array (the target) in the same as the searched  value. if yes, it retuns its index
    for(let i= 0; i< arr.length; i++){
        if(arr[i].value === target){
            return i;
        }
    }
    return -1; // this is the actual index
}


//adding search fucntionality :
function SearchNumbers(){
    searchedItem.addEventListener("change", function(){
        const searchedNumber = parseInt(this.value);
        const foundIndex = LinearSearch(numbers, searchedNumber);
        //fixed search algorithm after googling:
        if(foundIndex !== -1){
           ShowSearchedNumbers([foundIndex]);
           alert("The searched number has been found !");
           console.log(`Found the searched number ${searchedNumber} at index ${foundIndex}`);
        }
        else{
            itemSearched.innerHTML = `<h1 style = "color: red"> Value not found!</h1>`;
        }
        // let searchedNumbers = [];
        //
        // switch(searchedNumber){
        //     case "64":
        //         searchedNumbers = numbers.filter((number => number.value === searchedNumber));
        //     break;
        // }
        //this aldo works but its more for a genral search not linear algorithm one
        // ShowSearchedNumbers(searchedNumbers); // this method is not working and so i made changes:
        // let foundNumber = null;
        // for (let i = 0; i < numbers.length; i++) {
        // if(numbers[i].value === searchedNumber){
        //     foundNumber = numbers[i];
        //     console.log(`Found  ${searchedNumber}`);
        //     ShowSearchedNumbers([foundNumber]);
        // }
        // if(!foundNumber){
        //     itemSearched.innerHTML = `<h1 style = "color: red"> Value not found!</h1>`;
        // }
        // }
    });
}
SearchNumbers();


function SwapValues(){
    swapNumbers.addEventListener("click", function(){
        //all 3 methods below are what i tried:
       // [numbers[this.value[0]] , numbers[this.value[1]]] = [numbers[this.value[1]], numbers[this.value[0]]];
      // [numbers[this.id[0]], numbers[this.id[1]]] = [numbers[this.id[0]], numbers[this.id[1]]];
     //   numbers[0], numbers[1] = numbers[1], numbers[0];
     //what the ai recommends:
    //  const index0 = parseInt(this.value[0]);
    //  const index1 = parseInt((this.value[1]));

    //  numbers[index0], numbers[index1] = numbers[index1], numbers[index0];
    // me trying again :
    const index0 =  0;
    const index1 =  1;

    numbers[index0], numbers[index1] = numbers[index1], numbers[index0];
    console.log(numbers[index0], numbers[index1]);
    ShowSwappedNumbers();
     
     console.log("this swap is woorking , ayyy");
     //yayyy figured it out.
    })
}
SwapValues();

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
