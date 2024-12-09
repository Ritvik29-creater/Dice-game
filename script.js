let dice1 = Math.floor(Math.random() * 6) + 1; // Dice 1: 1 to 6
let dice2 = Math.floor(Math.random() * 6) + 1; // Dice 2: 1 to 6
let player1Dice = document.querySelector('.img1');
let player2Dice = document.querySelector('.img2');
player1Dice.src ='dice'+dice1+'.png';
player2Dice.src = 'dice'+dice2+'.png';
let heading = document.getElementById('heading');
    heading.textContent = 'Dice Roll Result';
if(dice1>dice2){
    heading.textContent = 'player1 won';
}
else if(dice1==dice2){
    heading.textContent = 'it is a tie';
}
else{
      heading.textContent='player2 won'
}
