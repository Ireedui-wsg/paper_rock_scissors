var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint')
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');
var computerChoice;
var cCount=0, pCount=0;
console.log(winner);
function play(playerChoice){
	pChoice.innerText="Player choice: "+playerChoice;
	var random = Math.floor( Math.random()*3);
	console.log(random);
	if(random==0){
		cChoice.innerText = "Computer choice:scissors";
		computerChoice="scissors"
	}else if(random==1){
		cChoice.innerText = "Computer choice:rock";
		computerChoice="rock"
	}else{
		cChoice.innerText = "Computer choice:paper";
		computerChoice="paper";
	}
	/*if(playerChoice="rock" && computerChoice=="scissors"){
		winner.innerText="Winner:Player";
	}else if(playerChoice="scissors" && computerChoice=="paper"){
		winner.innerText="Winner:Player";
	}else if(playerChoice="paper" && computerChoice=="rock"){
		winner.innerText="Winner:Player";
	}else if(playerChoice="scissors" && computerChoice=="rock"){
		winner.innerText="Winner:Computer";
	}else if(playerChoice="rock" && computerChoice=="paper"){
		winner.innerText="Winner:Computer";
	}else if(playerChoice="paper" && computerChoice=="scissors"){
		winner.innerText="Winner:Computer";
	}else{
		winner.innerText="Winner:Fair";
	}*/
	if(
	(playerChoice=="rock" && computerChoice=="scissors")
	|| (playerChoice=="paper" && computerChoice=="rock")
	|| (playerChoice=="scissors" && computerChoice=="paper")
	){
		winner.innerText="Winner:Player";
		pCount++;
	}else if(playerChoice==computerChoice){
		winner.innerText="Winner:Tie";
	}else{
		winner.innerText="Winner:Computer";
		cCount++;
	}
	cPoint.innerText="Computer:"+cCount;
	pPoint.innerText="Player:"+pCount;
}

function restart(){
	cPoint.innerText="Computer:0";
	pPoint.innerText="Player:0";
	cCount=0;
	pCount=0;
	winner.innerText="Winner: ";
}