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
      matchingCode.style.color = "Yellow";
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
    binaryCodeEntry.addEventListener("input", function(){
      const typedCode = this.value.trim(); // using parse into will convert the number to a decimal and you wanna keep it as a string. so take out out the parse Int.
       //check if the typed binary code exists in the array:
       typedCode = "01000100" + "01110101" + "01101101" + "01101001";
       if(typedCode.length > 0){
        const foundCode = CheckBinaryCodes(binaryWords, typedCode);
          if(foundCode !== -1){
            alert("The binary code type does exists in the array, keep typing...");
            ShowWordFormed(typedCode);
            return;
         }
        else{
           //alert("Binary Code not found !!!!!");
           console.log("No match has been found", foundCode);
         }
     
        }
    })
    }
   AddBinaryCode();

   

   function CheckBinaryCodes(arr, target){
    for (let i = 0; i < arr.length; i++) {
       // this checks in the array if the bnary code tyoed in matches what already exists in the binary Words arr:
        if(arr[i].binary === target){ // fixed "value" to be "bainry" bv the actual code is called"binary"
            return i;
        }        
    }
        return -1; // the returned index if the value of the array matched the target

   }

   


  
