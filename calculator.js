let num1 = 8
let num2 = 2
document.getElementById("num1-en").textContent = num1
document.getElementById("num2-en").textContent = num2
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEn = document.getElementById("sum-en")
function add()
{
    let result = num1 + num2
    sumEn.textContent = "sum: " + result
    // console.log("add clicked")
}
function subtract()
{
    let result = num1 - num2
    sumEn.textContent = "sum: " + result
}
function divide()
{
    let result = num1 / num2
    sumEn.textContent = "sum: " + result
}
function multiply()
{
    let result = num1 * num2
    sumEn.textContent = "sum: " + result
}