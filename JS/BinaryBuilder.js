const binaryNumbers = document.getElementById("binaryNumbers");
const binaryLetters = document.getElementById("binaryLetters");
const binaryCodeEntry  = document.getElementById("addBinaryCode");
const createdWord = document.getElementById("createdWord");

let binaryWords = [
     {letter: "A",
      binary: "01000001"},
     {letter: "B",
      binary: "01000010"
     },
     {letter: "C",
      binary: "01000011"
     },
     {letter: "D",
      binary: "01000100"
     },
     {letter: "E",
      binary: "01000101"
     },
     {
        letter: "D",
        binary: "01000100"
     },
     {
        letter: "a",
        binary: "01100001"
     },
     {
        letter: "u",
        binary: "01110101"
     }, {
        letter: "m",
        binary: "01101101"
     }, 
     {
        letter: "i",
        binary: "01101001"
     }
    ];

function ShowBinaryNumbers(){
     binaryNumbers.innerHTML = "";
     binaryNumbers.style.display = "flex";
     binaryNumbers.style.gap = "20px";
     binaryNumbers.style.flexWrap = "wrap";

     binaryWords.forEach(binary => {
        let binaryNum = document.createElement("div");
        binaryNum.textContent = binary.binary;
        binaryNum.style.color = "limegreen";
        binaryNum.style.fontStyle = 'italic'
        binaryNum.classList.add("binary-box")
        binaryNumbers.appendChild(binaryNum);
        console.log(binaryNum);

    });
}
ShowBinaryNumbers();

  function ShowWordFormed(typedCode){
    createdWord.innerHTML = "";
    typedCode.forEach(code=> {
      let matchingCode = document.createElement("div");
      matchingCode.innerText = code;
      matchingCode.style.display = "flex";
      matchingCode.style.color = "Green";
      matchingCode.style.fontWeight = "bold";
      createdWord.appendChild(matchingCode);
      console.log(matchingCode);
    });

    // binaryWords.forEach(binLetter => {
    //      let foundLetter = document.createElement("div");
    //      foundLetter.innerText = binLetter.letter;
    //      foundLetter.style.color = "Orange";
    //      foundLetter.classList.add("binary-box-letter");
    //      createdWord.appendChild(foundLetter);
    //      console.log(foundLetter);
    // });
  }

function ShowBinaryLetter(){
        binaryLetters.innerHTML = "";
        binaryLetters.style.display = "flex";// make the container the flex layout. not the actual item.
        binaryLetters.style.gap = "20px";
        binaryLetters.style.flexWrap = "wrap";

        binaryWords.forEach(binaryW => {
             let binaryLet = document.createElement("div");
             binaryLet.textContent = binaryW.letter;
             binaryLet.style.color = "orange";
             binaryLet.classList.add("binary-box-letter");
             binaryLetters.appendChild(binaryLet);
             console.log(binaryLet);
        });
    
    }
   ShowBinaryLetter();

   function AddBinaryCode(){
    binaryCodeEntry.addEventListener("input", function(event){
      if(event.type === "keydown" && event.type !== "Enter"){ // this is to ensure that the input fiel pickes up the code being punched in
         console.log("it works!");
         return;
      }

      
      const typedCode = this.value.trim(); // using parse into will convert the number to a decimal and you wanna keep it as a string. so take out out the parse Int.
       //check if the typed binary code exists in the array:
     
      //  typedCode = "01000100" + "01110101" + "01101101" + "01101001"; // this needed to be separated instead of one string by using "Split"
       if(typedCode.length > 0){
         //After seeking help: The codes need to be split by a + sign:
         const codesArray = typedCode.split("+");
         const matchedLetters = [];
         let allFound = true;

         //check each binary code :
         codesArray.forEach(code => {
            const trimmedCode = code.trim();

            //the complete binary code:// changed the lnegth to be 8 instead of zero bc there are 8 binary codes in one letter. 
            if(trimmedCode.length === 8){
              const foundLetter = FindLetterByBinary(trimmedCode); // mapping the binary code with the letter:
              if(foundLetter){
                matchedLetters.push(foundLetter); // if the binary code typed matches the one associated with the a certain letter, add the latter to the matching letters array via the push method.
                console.log(foundLetter);
               // alert("letter has been found !");
                allFound = true;
              }
              else{
               allFound = false;
              }
            }
         });

         //show the actual letter that has been matched with the binary code:
         if(matchedLetters.length > 0){
            ShowWordFormed(matchedLetters);
         }
         else{
            createdWord.innerHTML = "";
            console.log("no valid word formed!");
         }
          
         //returning the full message of the created word:
         // if(allFound && codesArray.every(code => code.trim().length === 8)){
         //    console.log("all codes entered are valid!!", matchedLetters.join("")); // jpining all matched lettr to form one word
         //    alert("All Typed In codes are valid and here is the word :)");
         // }

         // my own code before soliciting help:
      //  const foundCode = CheckBinaryCodes(binaryWords, typedCode);
      //     if(foundCode !== -1){
      //       alert("The binary code type does exists in the array, keep typing...");
      //       ShowWordFormed(typedCode);
      //       return;
      //    }
      //   else{
      //      //alert("Binary Code not found !!!!!");
      //      console.log("No match has been found", foundCode);
      //    }
     
        }
    });

    binaryCodeEntry.addEventListener("keydown", function(event){
      if(event.key === "Enter"){
         console.log("the enter key is working");
         return;
         
      }
    })
    }
   AddBinaryCode();


   function FindLetterByBinary(binaryCode){
      const found = binaryWords.find(item => item.binary === binaryCode);// here i'm trying to check if the code users input already exists and is found in the array where all the binary codes are:
      return found ? found.letter : null; // if the binary code matches , return the letter associated with the code or else return nothing.
   }
   

   function CheckBinaryCodes(arr, target){
    for (let i = 0; i < arr.length; i++) {
       // this checks in the array if the binary code typed in matches what already exists in the binary Words arr:
        if(arr[i].binary === target){ // fixed "value" to be "bainry" bv the actual code is called"binary"
            return i;
        }        
    }
        return -1; // the returned index if the value of the array matched the target

   }

   


  
