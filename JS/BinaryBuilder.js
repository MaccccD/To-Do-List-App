const binaryNumbers = document.getElementById("binaryNumbers");
const binaryLetters = document.getElementById("binaryLetters");
const binaryCodeEntry  = document.getElementById("addBinaryCode");

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
    ];

function ShowBinaryNumbers(){
     binaryNumbers.innerHTML = "";

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

function ShowBinaryLetter(){
        binaryLetters.innerHTML = "";

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
      const typedCode = this.value.trim(); // using parse into will convert the number to a decimal andyou wanna kep it as a string. so take out out the parse Int.
       //check if the typed binary code exists in the array:
       if(typedCode.length > 0){
        const foundCode = CheckBinaryCodes(binaryWords, typedCode);
          if(foundCode !== -1){
            alert("The binary code type does exists in the array, keep typing...");
            
            console.log("workingg")
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

  
