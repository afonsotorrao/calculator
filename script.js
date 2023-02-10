let numbers = document.getElementsByClassName("numbers")
let currentNum = document.getElementById("currentNum")
let previousNum = document.getElementById("previousNum")
let operators = document.getElementsByClassName("operators")
let op = ""
let equal = document.getElementById("calculate")
let total
let clearBtn = document.getElementById("clear")
let deleteBtn = document.getElementById("delete")

for (const number of numbers) {number.addEventListener("click", function(e){
    currentNum.removeAttribute("id", "reformat")
    currentNum.setAttribute("id","currentNum")
    if (total){
    total = undefined
    currentNum.textContent = ""
    currentNum.textContent += e.target.value}
    else if (currentNum.textContent.length < 12) {
        currentNum.textContent += e.target.value}

})}

for (const operator of operators) {operator.addEventListener("click", function(e){
    if (currentNum.textContent !== "Error. Can't divide by 0."){
    op = operator.value
    previousNum.textContent = currentNum.textContent + " " + op
    currentNum.textContent = ""}
    else {
        currentNum.textContent = ""
    }
})}

clearBtn.addEventListener("click", function clear(){
    currentNum.textContent = ""
    previousNum.textContent = ""
    op = ""
    total = undefined
})

deleteBtn.addEventListener("click",function(){
    currentNum.textContent = currentNum.textContent.slice(0,-1)
})

equal.addEventListener("click",operate)

function operate(){
let helper = previousNum.textContent.slice(0,-2)
let a = Number(helper)
let b = Number(currentNum.textContent)

if (op === "+"){
    total = a + b
    let length = total.toString().length
        if(length > 16){
        total = a + b
        let newTotal = total.toPrecision(10)
        currentNum.textContent = newTotal
        previousNum.textContent = ""
    }
    else {
        currentNum.textContent = total
        previousNum.textContent = ""
    }
    }
else if (op === "-"){
    total = a - b
    let length = total.toString().length
    if(length > 16){
        let newTotal = total.toPrecision(8)
        currentNum.textContent = newTotal
        previousNum.textContent = ""
    }
    else {
        currentNum.textContent = total
        previousNum.textContent = ""
    }}
else if (op === "x"){
    total = a * b
    let length = total.toString().length
    if(length > 16){
        let newTotal = total.toPrecision(8)
        currentNum.textContent = newTotal
        previousNum.textContent = ""
    }
    else {
        currentNum.textContent = total
        previousNum.textContent = ""
    }
}
else if (op === "/"){
    if (b !== 0){
    total = a/b
    let length = total.toString().length
    if(length > 16){
        let newTotal = total.toPrecision(8)
        currentNum.textContent = newTotal
        previousNum.textContent = ""
    }
    else {
        currentNum.textContent = total
        previousNum.textContent = ""
    }}
    else if (b === 0){
    previousNum.textContent = ""
    total = 1
    currentNum.textContent = "Error. Can't divide by 0."
    currentNum.setAttribute("id","reformat")
    }}}