const generateBtn = document.getElementById("Generate-Btn");
const output = document.getElementById("input");
const chars = "123456789azertyuiopmlkjhgfdsqwxcvbnAZERTYUIOPMLKJHGFDSQWXCVBN&é+-*/!:;,§/.?%¨£µù*^${[|`^@]}="
let res ="";


generateBtn.addEventListener("click",() => {
    res = "";
    output.textContent = res;
    for(let i = 0; i<8 ; i++){
        res+= chars.charAt(Math.floor(Math.random()*chars.length-1));
    }
    output.textContent = res;
    console.log(res);
})