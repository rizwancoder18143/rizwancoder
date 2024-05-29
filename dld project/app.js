let input = document.querySelector(".input")
let buttons = document.querySelectorAll(".btn")
let encoder = document.querySelector(".encoder")
let decoder = document.querySelector(".decoder")

let string = ""
Array.from(buttons).forEach((element)=>{

    element.addEventListener("click",(e)=>{
        string = string + e.target.innerHTML
        input.value = string;
    })
})
let cut = document.querySelector(".cut")
cut.addEventListener("click",()=>{

    string = ""
    input.value = string
})
encoder.addEventListener("click",()=>{
    if(input.value != ""){
        string = eval(string)
        // input.value = string
        console.log(string)
        input.value = string;
        string = ""
    }
    else{  
    string = ""
    input.value = string
}
if(input.value == ""){
 alert("you must write something")

}
else{
    let li = document.createElement("li")
    li.innerHTML = input.value
    let p = document.querySelector("p")
    p.appendChild(li)
}
  
})

randomNum = ""
length = "8"
let Num = "12345678"
let sNum = "084348528734"
let tNum = "084348528734"
let fNum = "0840294093188"
let allChar = Num * sNum + tNum + fNum;
decoder.addEventListener("click",()=>{
    console.log(randomNum)
    randomNum = Num[Math.floor(Math.random() * Num.length)]
    randomNum += sNum[Math.floor(Math.random() * sNum.length)]
    randomNum += tNum[Math.floor(Math.random() * tNum.length)]
    randomNum += fNum[Math.floor(Math.random() * fNum.length)]
    input.value = randomNum;


while(randomNum.length < input.value.length){
    randomNum += allChar[Math.floor(Math.random() * allChar.length)]
    randomNum = input.value
    

}  
})



