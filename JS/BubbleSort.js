const bubbleSort = document.getElementById("bubble-Sort");
const swapNumbers = document.getElementById("swapNumbers");


//the array of numbers :
const numbers = [56, 34, 78, 90, 98, 67, 88, 12, 88, 10];



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
  swapNumbers.addEventListener("click", function(){
//     if(numbers[index0] > numbers[index1]) {
//        numbers[index1], numbers[index0];
//        console.log("numbers have swappped");
//   }
  numbers[index0], numbers[index1] = numbers[index1], numbers[index0];
  console.log("numbers have swappped");
  DisplaySwappedNumbers([numbers[index1]], numbers[index0]);
  })
}
SwapNumbers();

function DisplaySwappedNumbers(swappedNumbers){
    bubbleSort.innerHTML = "";
    swappedNumbers.forEach(num => {
     const boxes = document.createElement("div");
     boxes.classList.add("number-box");
     boxes.textContent = num;
     bubbleSort.appendChild(boxes);
     console.log(boxes);
   });
}