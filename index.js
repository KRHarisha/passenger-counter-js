//document.getElementById("count-en").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
/*9. The onclick event listener*/
//function increment()
//{
    //console.log("the button is clicked")
//}



//let firstcount = 5
//let secondbatch = 7
//let count = firstcount + secondbatch
//console.log(count)
// 1. Create a variable, myAge, and set its value to your age
//let  myAge = 28   
// 2. Log the myAge variable to the console
//console.log(myAge)
// 1. Create two variables, myAge and humanDogRatio
//let myAge = 28
//let humanDogRation = 7
// 2. Multiply the two together and store the result in myDogAge 
//let myDogAge = myAge * humanDogRation
// 3. Log myDogAge to the console
//console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
//let bonusPoints = 50
//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)
//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)
//console.log(bonusPoints)

/*10. Using functions to write less code */
//function countdown()
//{
    //console.log(5)
    //console.log(4)
    //console.log(3)
    //console.log(2)
    //console.log(1)
//}
//setting up the race
//countdown()
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾
//countdown()
// Get ready for a new race 🏎 🏎 🏎
/*11. Write your first function*/
// Create a function (you decide the name) that logs out the number 42 to the console
//function myName()
//{
    //console.log(42)
//}
// Call/invoke the function
//myName()

/*12. Write a function that logs the sum*/
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

//create a function that logs out the sum of the lap times

// function logLapTime()
// {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// logLapTime()

/*13. Write a function that increments */
// let lapsCompleted = 0
//Create a function that increments variable with one
//run it three times
 
// function incrementLap()
// {
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)

/*14. Increment on clicks */
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// let count = 0 
// function increment()
//  {
//      //console.log("clicked")
//      count = count + 1
//      console.log(count)
//  }

 /*15. Display the count */
 // document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// let countEn = document.getElementById("count-en") //pass in arguments

// console.log(countEn)
//  let count = 0
//  function increment()
//  {
//      count = count + 1
//      countEn.innerText = count
//      //console.log(count)
//  }

 /*16. The Document Object Model */
//  let countEn = document.getElementById("count-en")
//  let count = 0

//  function increment()
//  {
//      count = count + 1
//      countEn.innerText = count
//  }

/*17. Display the count with innerText */
//  let countEn = document.getElementById("count-en")
//  let count = 0

//  function increment()
//  {
//      count = count + 1
//      countEn.innerText = count
//  }

/*18. Create the save button*/
// let countEn = document.getElementById("count-en")
// let count = 0

// function increment()
// {
//     count = count + 1
//     countEn.innerText = count
// }

// 1. Create a function, save(), which logs out the count when it's called
// function save()
// {
//     console.log(count)
// }
//save()

/*19.what is String*/
/*20. Write your first string variable */
// let username ="hAri"
// //console.log(username)
// // Create a variable, message, that stores the string: "You have tree new notifications"
// let message = "You have three new notifications"
// console.log(message + " , "+ username)

// Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = message + " , "  + username + "!"
// console.log(messageToUser)

/*21. Log a greeting to the console*/

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let name = "Hari"
// let greeting = "Hi, my name is "

//  let myGreeting = greeting + name
//  console.log(myGreeting)

/*22. Strings vs. Numbers */

// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100"

/*23. Render a welcome message */
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEn = document.getElementById("welcome-en")

// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page

// let name1 = "Per Harald Borgen"
// let greeting = "Welcome back"

// // Render the welcome message using welcomeEl.innerText
// welcomeEn.innerText = greeting + name1

/*24. Improve the message with string concatenation */

// let welcomeEn = document.getElementById("welcome-en")
// let name = "hari"
// let greeting = "welcome "
// welcomeEn.innerText = greeting + name

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEn.innerText += "👋"

/*25. Use plus equal for count */
// let countEn = document.getElementById("count-en")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     count += 1
//     countEn.innerText = count
// }

// function save() {
//     console.log(count)
// }

/*26. Create the save feature */
// 1. Grab the save-en paragrah and store it in a variable called saveEn
// let saveEn = document.getElementById("save-en")
// let countEn = document.getElementById("count-en")
// let count = 0

// function increment()
// {
//     count += 1
//     countEn.innerText = count
// }
// function save()
// {
//     let countStr = count + " - "
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     saveEn.innerText += countStr
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
         
// }

/*27. Debugging online */
// let saveEn = document.getElementById("save-en")
// let countEn = document.getElementById("count-en")
// let count = 0

// function increment() {
//     count += 1
//     countEn.innerText = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEn.textContent += countStr
// }

// // Google:
// // innerText alternative mdn

/*28. Set the count to 0 */
// let countEn = document.getElementById("count-en")
// let saveEn = document.getElementById("save-en")
// let count = 0
// function increment()
// {
//     count += 1
//     countEn.textContent = count
// }
// function  save()
// {
//     let coutnStr = count + " - "
//     saveEn.textContent += coutnStr
//     countEn.textContent = 0
//     count = 0
// } 

// /*29. Congrats & recap */
// full overview of passenger counter app what we learned nd what we did in it