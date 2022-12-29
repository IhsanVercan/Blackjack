
//array
let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerName = "You"



function getRamdomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber ===1){
        return 11
    } else {
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRamdomCard()
    let secondCard = getRamdomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){

    cardsEl.textContent = "Cards:" 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?🤔"
    } else if (sum === 21) {
        message = "Congratulations, you've got Blackjack!😎"
        hasBlackJack = true
    } else {
        message = "You're out of the game!😭"
        isAlive = false
    }
    messageEl.textContent = message

    }

    function newCard(){
        if (isAlive === true && hasBlackJack === false){       
        let card = getRamdomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    }




























    //push = add the item to the last part of the array
    //pop = remove the last item in the array

    


























//ctrl + k+c = comment all chosen lines.!!!!!!!!!!!!!!!!!!!!!!!!

//document.getElementById("count").innerText = 5
      

//let myAge = 25;
//console.log(myAge);



// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let myAge = 25
// let humanDogRatio = 7
// let myDogsAge = myAge * humanDogRatio
// console.log(myDogsAge);
//let myAge = 25;
//console.log(myAge);
// function increment() {
//     console.log("The button was clicked")
// }
// SASS 
// Web Pack
// Tailwind
// TypeScript
// Redux
// Next,js
// Agile/Scrum
//ctrl + k+c = comment all chosen lines