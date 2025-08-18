//grabbng the refrences:
const bubbleWords = document.getElementById("bubble-Words");
const swapLetters = document.getElementById("swapLetters");
const sortLetters = document.getElementById("sortLetters");
const addLetter =   document.getElementById("addLetter");
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
    DisplayLetters();
    console.log("letters have been sorted in ascending order");
    });  
}
SortLetters();

function DisplayAddedLetters(typedLetter){
    bubbleWords.innerHTML = "";
    typedLetter.forEach(let => {
        const letText = document.createElement("span");
        letText.innerText = let;
        letText.classList.add("letter-box");
        bubbleWords.appendChild(letText);
        console.log(letText + "i have added the letter");
    });
}

function AddLetters(){
    addLetter.addEventListener("change", function(){
       // let typedletter = parseInt(this.value);// this does not work in terms of showing the actual letter bc parseInt converts a string into a number. But bc i want the string to show but it returns "NaN"
         // addd the letter you're typing into the array;
        let typedletter = this.value; // this was the fix. To remove the parse Int.
       //this one works.  Just had to use "Includes"
        if(letters.includes(typedletter)){
            alert("This letter already exists in here! Try another one!");
            console.log("searching letters works");
        }
        else{
            letters.push(typedletter);
            DisplayAddedLetters(letters);
        }
       
        //  letters.forEach(let => {
        //     if(typedletter === let){
        //         alert("This letter already exists in here! Try another one!");
        //         console.log("searching letters works");
        //     }
        //     else if(typedletter =! let){
        //          DisplayAddedLetters(letters);
        //     }
        //  });
        // console.log("a typed letter has been added to the array");
        // replacing the "for each" with a "for loop" to map the array to the index and then searcgh for the exisiting in each index within the array of letters
    //     for (let i = 0; i < letters.length; i++) {
            
    //         if(letters.includes(typedletter)){
    //         alert("This letter already exists in here! Try another one!");
    //         console.log("searching letters works");
    //         }
    //         else if (element.includes(!typedletter)){
    //             DisplayAddedLetters(letters);
    //             console.log("the letter has been added bc it did not exist in the array");
    //         }
            
    //     }// did not work. After asking deep seek, i need to use "Includes"
    }); 
}
AddLetters();
