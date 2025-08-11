//grabbng the refrences:
const bubbleWords = document.getElementById("bubble-Words");
const swapLetters = document.getElementById("swapLetters");
const sortLetters = document.getElementById("sortLetters");
//lettes array:
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//unsorted letters
let unsortedLetters =  ["b", "a", "d", "c", "f", "e", "g", "h", "j", "i"];
//indexes for each letter:
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

function DisplayLetters(){
     bubbleWords.innerHTML = ""; // cleat existing data
     letters.forEach(letter => {
        const letterText = document.createElement("div");
        letterText.innerText = letter;
        letterText.classList.add("letter-box");
        bubbleWords.appendChild(letterText);
        console.log(letterText);
    });
}
DisplayLetters();


function SwapLetters(){
    swapLetters.addEventListener("click", function(){
        letters.map((letter)=>{
         letter[index0], letter[index1] = letter[index1] , letter[index0];
         letter[index1], letter[index2] = letter[index2] , letter[index1];
         letter[index2], letter[index3] = letter[index3] , letter[index2];
         letter[index3], letter[index4] = letter[index4] , letter[index3];
         letter[index4], letter[index5] = letter[index5] , letter[index4];
         letter[index5], letter[index6] = letter[index6] , letter[index5];
         letter[index6], letter[index7] = letter[index7] , letter[index6];
         letter[index7], letter[index8] = letter[index8] , letter[index7];
         letter[index8], letter[index9] = letter[index9] , letter[index8];
        });
        console.log("letters have been swapped");
        DisplaySwappedLetters(letters[index0], letters[index1], letters[index2], letters[index3], letters[index4], letters[index5], letters[index6], letters[index7], letters[index8], letters[index9]);
    });
}
SwapLetters();

function DisplaySwappedLetters(){
    bubbleWords.innerHTML = "";
       let swappedLetters = ["b", "a", "d", "c", "f", "e", "g", "h", "j", "i"];
     swappedLetters.forEach(swappedLetter => {
        const swapLetterText = document.createElement("div");
        swapLetterText.textContent = swappedLetter;
        swapLetterText.classList.add("letter-box");
        bubbleWords.appendChild(swapLetterText);
        console.log("letters have been swapped and are showing!");
     });
}


function SortLetters(){
    sortLetters.addEventListener("click", function(){
    unsortedLetters.sort((d, e) => (e, d));
   // DisplayLetters();
    console.log("letters have been sorted in ascending order");
    });  
}
SortLetters();