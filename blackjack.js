let player={
  Name:"Tony",
  Chips: 45

}
let cards = []
let sum = 0
let hasBlackJack=false
let isAlive=false
message=""
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")



document.getElementById("player-el").textContent=player.Name+": $"+player.Chips


function getRandomCard(){
  let randomCard=Math.floor(Math.random()*13)+1
  if (randomCard===1){
    return 11
  } else if (randomCard>=11){
    return 10
  } else {
    return randomCard
  }
}

function startGame() {
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame() {
   cardsEl.textContent="Cards: "
    for (let i=0; i<cards.length; i++){
       cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: " + sum
if (sum<=20) {
    message="Do you want to draw another card?"
} else if (sum===21){
    message="Wohoo. Youve got a blackjack!"
    hasBlackjack=true
} else {
    message="You are out of the game"
    isAlive=false
}

messageEl.textContent=message
}

function newCard() {
    if (isAlive===true && hasBlackJack===false){
    let newDC=getRandomCard()
    sum+=newDC
    cards.push(newDC)
    renderGame()
    }
} 


/** Arrays
 * Objects
 * if else statement
 * bolean
 * logical operators
 * for loops
 * Math objects
 * return statements
 */