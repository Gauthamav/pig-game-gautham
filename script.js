'use strict';

const playerScore1 = document.querySelector('#score--0')
const playerScore2 = document.querySelector('#score--1')
const rollBtn = document.querySelector('.btn--roll')
const currentScore1 = document.querySelector('#current--0')
const currentScore2 = document.querySelector('#current--1')
const activeColor1 = document.querySelector('.player--0')
const activeColor2 = document.querySelector('.player--1')
const holdBtn = document.querySelector('.btn--hold')
const newBtn = document.querySelector('.btn--new')
const diceImage = document.querySelector('.dice')
let currentSum ;
 let arrScore ;
 let activePlayer = 0;


 // funtion to set all values 0 and restart the game again
const newGame = function (){

      currentSum = 0 ;
      arrScore = [0,0]
     playerScore1.textContent = 0;
     playerScore2.textContent = 0;
     currentScore1.textContent = 0;
     currentScore2.textContent = 0;
     diceImage.classList.add('hidden');
     activeColor1.classList.remove('player--winner')
     activeColor2.classList.remove('player--winner')
}



newGame();

// roll dice button click function
rollBtn.addEventListener('click' , function(){
 
    const randomNumber = Math.trunc(Math.random()*6)+1
    diceImage.classList.remove('hidden')
    diceImage.src = `dice-${randomNumber}.png`



// when the dice value not become 1
     if(randomNumber!=1 ){
      
        currentSum +=  randomNumber
       document.querySelector(`#current--${activePlayer}`).textContent = currentSum

    }


    // when the dice value is 1 we switch the player and make the score of that player earned to 0 
    else{      
        
         arrScore[`${activePlayer}`] = 0;
         document.querySelector(`#score--${activePlayer}`).textContent = 0
         switchPlayer();

    }
     
})


// hold button function to switch the player and save the score earned into an array called arrscores
holdBtn.addEventListener('click', function(){

     arrScore[activePlayer]  +=  currentSum
     document.querySelector(`#score--${activePlayer}`).textContent = arrScore[`${activePlayer}`] ;

   if( arrScore[activePlayer] >= 100){

     document.querySelector(`#score--${activePlayer}`).textContent = 'Winner'
     document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
     diceImage.classList.add('hidden')
     holdBtn.classList.add('hidden')
     rollBtn.classList.add('hidden')

   }
     currentSum = 0
     switchPlayer();

})


// function to clear  values when number 1 comes in dice and after each hold button
const switchPlayer = function(){
     currentSum = 0 ;
     document.querySelector(`#current--${activePlayer}`).textContent= 0
     document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
     activePlayer = activePlayer === 0 ? 1 : 0;
     document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')


}


// to restart the game and all the value become 0
newBtn.addEventListener('click', function(){

     newGame();

})

