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
             binaryNumbers.appendChild(binaryLet);
             
             console.log(binaryLet);
        });
    
    }
   ShowBinaryLetter();
