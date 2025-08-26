const bubbleSort = document.getElementById("bubble-Sort");
const swapNumbers = document.getElementById("swapNumbers");
const feedbackTxt = document.getElementById("feedbackTxt");
const validateSwap = document.getElementById("validateSwap");
const sortNumbers = document.getElementById("sortNumbers");
const inputNumbers = document.getElementById("inputNumber");

//the array of numbers :
const numbers = [56, 34, 78, 90, 98, 67, 88, 12, 44, 100];
let index0 = 0;
let index1 = 1;
let index2 = 2;
let index3 = 3;
let index4 = 4;
let index5 = 5;
let index6 = 6;
let index7 = 7;
let index8 = 8;
let index9 = 9;


//display the numbers as boxes:
function DisplayNumbers(){
     bubbleSort.innerHTML = "";
     numbers.forEach(number => {
     const boxes = document.createElement("div");
     boxes.classList.add("number-box");
     boxes.textContent = number;
     bubbleSort.appendChild(boxes);
     console.log(boxes);
    });
}
DisplayNumbers();

function SwapNumbers(){

  swapNumbers.addEventListener("click", function(){
//     if(numbers[index0] > numbers[index1]) {
//        numbers[index1], numbers[index0];
//        console.log("numbers have swappped");
//   }
//numbers[index0], numbers[index1] = numbers[index1], numbers[index0];
//here i'm basically mapping through the numbers in the array , comparing the number of the current index with the previous one or the next one  and then swapping them together.
  numbers.map((number => {
    number[index0], number[index1] = number[index1], number[index0];
    number[index1], number[index2] = number[index2], number[index1];
    number[index2], number[index3] = number[index3], number[index2];
    number[index3], number[index4] = number[index4], number[index3];
    number[index4], number[index5] = number[index5], number[index4];
    number[index5], number[index6] = number[index6], number[index5];
    number[index6], number[index7] = number[index7], number[index6];
  }))
  console.log("numbers have swappped");
   let typedNumber =  67;
  DisplayedAddedSwappedNumbers(numbers, typedNumber);
  console.log(typedNumber);
  DisplaySwappedNumbers([numbers[index0]], numbers[index1], numbers[index2], numbers[index3], numbers[index4], numbers[index5], numbers[index6], numbers[index7]);
  feedbackTxt.innerHTML = `<h1 style = "color: green">Values Swaapped!</h1>`;
  })
}
SwapNumbers();


function DisplayedAddedSwappedNumbers(array, addedNumber){
  for (let i = 0; i < array.length; i++) {
     if(array[i].value === addedNumber){
        return i;
     }

  }
  return -1;
}


function DisplaySwappedNumbers(){
    bubbleSort.innerHTML = "";
    let swappedNumbers = [34, 56, 90, 78, 67, 98, 12, 88, 100, 44];
    
    swappedNumbers.forEach(num => {
     const boxes = document.createElement("div");
     boxes.classList.add("number-box");
     boxes.textContent = num;
     bubbleSort.appendChild(boxes);
     console.log(boxes);
   });
}

function SortNumbers (){
 validateSwap.addEventListener("click", function(){
  // if(numbers.indexOf(32, 0) > numbers.indexOf(56, 1)){ //after seeking aid: i wasn't supposed to use "indexOf" here bc it wont work for most cases
  //  bc IndexOf only tries to find the value at that index but it does not access the actual value.
  if(numbers[1] === numbers[0] || numbers[2] === numbers[1] || numbers[3] == numbers[2]){
    numbers[index1], numbers[index0] = numbers[index0], numbers[index1];
    numbers[index2], numbers[index1] = numbers[index1], numbers[index2];
    numbers[index3], numbers[index2] = numbers[index2], numbers[index1];

   DisplaySwappedNumbers(numbers[index0], numbers[index1], numbers[index2], numbers[index3]);
    console.log("Numbers have  swapped:)");
  }
  else{
    alert("Numbers won't swap bc the first number is not greater than the second number!");
    feedbackTxt.innerHTML = `<h1 style = "color: red">Values did not swap :(</h1>`;
  }
}
)}
SortNumbers();


function SetOrder(){
  sortNumbers.addEventListener("click", function(){
    numbers.sort((x, y)=> y - x);
    console.log("Workinggg");
    DisplayNumbers();
  })
}
SetOrder();


function AddNumbers(){
  inputNumbers.addEventListener("change", function(){
    // the number the user wants to add
    let typedNumber =  parseInt(this.value);
    //chec if the number the user is addng already exists in the array of numbers
    if(numbers.includes(typedNumber)){
      alert("That number already exists. Try a new one");
      console.log("the numbr is not dislayed")
    }
    else{
       numbers.push(typedNumber);
       DisplayAddedNumbers(numbers);
       alert("number has been added successfully!");
    }
    console.log("Added number to the array :", typedNumber);
  });
}
AddNumbers();


function DisplayAddedNumbers(typedNumber){
  bubbleSort.innerHTML = ""; //clear any existing info
  typedNumber.forEach(number =>{
    const numText = document.createElement("span");
    numText.textContent = number;
    numText.classList.add("number-box");
    bubbleSort.appendChild(numText);
    console.log(numText);
  });
}