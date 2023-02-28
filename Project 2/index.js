
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
let collectedCards = []
let sum_up = document.getElementById("sums")
let messages_me = document.getElementById("messages")
let cards = document.querySelector("#cards_show")

let player = {
    name: "Ameer",
    chips: 200
}
let playerEl =  document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomeCard()
    let secondCard = getRandomeCard()
    collectedCards.push(firstCard,secondCard)
    
    sum = firstCard + secondCard
    
    renderGame()

}
function getRandomeCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
    return 11
    }
    else{
    return randomNumber
    }
}
function renderGame(){
    sum_up.innerText = "Sum: " + sum
    cards.innerText = "Cards: " + collectedCards

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messages_me.textContent = message

}
function newCard(){
    if (isAlive === true && hasBlackJack === false){
    thirdCard = getRandomeCard()
    collectedCards.push(thirdCard)
    sum += thirdCard
    renderGame() }
    else{
        alert("No more cards")
    }
}