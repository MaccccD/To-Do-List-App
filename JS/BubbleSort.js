const bubbleSort = document.getElementById("bubble-Sort");
const swapNumbers = document.getElementById("swapNumbers");
const feedbackTxt = document.getElementById("feedbackTxt");


//the array of numbers :
const numbers = [56, 34, 78, 90, 98, 67, 88, 12, 44, 10];



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
  DisplaySwappedNumbers([numbers[index0]], numbers[index1], numbers[index2], numbers[index3], numbers[index4], numbers[index5], numbers[index6], numbers[index7]);
  feedbackTxt.innerHTML = `<h1 style = "color: green">Values Swaapped!</h1>`;
  })
}
SwapNumbers();

function DisplaySwappedNumbers(){
    bubbleSort.innerHTML = "";
    let swappedNumbers = [34, 56, 90, 78, 67, 98, 12, 88, 10, 44];
    swappedNumbers.forEach(num => {
     const boxes = document.createElement("div");
     boxes.classList.add("number-box");
     boxes.textContent = num;
     bubbleSort.appendChild(boxes);
     console.log(boxes);
   });
}