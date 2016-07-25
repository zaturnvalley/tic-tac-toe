console.log('So you want to see my code, eh?');

var currentPlayer = 'dog';

function fillSquareChangePlayer(param1){
	if (document.getElementById(param1).classList.contains('dog') || document.getElementById(param1).classList.contains('cat')){
			return;
		} else{
			document.getElementById(param1).classList.add(currentPlayer);
				if (currentPlayer === 'dog'){
					currentPlayer = 'cat';
					document.getElementById('result').innerHTML = "Cat's Turn";
						if(document.getElementById('sq1').classList.contains('dog') && document.getElementById('sq2').classList.contains('dog') &&  document.getElementById('sq3').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq4').classList.contains('dog') && document.getElementById('sq5').classList.contains('dog') &&  document.getElementById('sq6').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq7').classList.contains('dog') && document.getElementById('sq8').classList.contains('dog') &&  document.getElementById('sq9').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq1').classList.contains('dog') && document.getElementById('sq5').classList.contains('dog') &&  document.getElementById('sq9').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq3').classList.contains('dog') && document.getElementById('sq5').classList.contains('dog') &&  document.getElementById('sq7').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq1').classList.contains('dog') && document.getElementById('sq4').classList.contains('dog') &&  document.getElementById('sq7').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq2').classList.contains('dog') && document.getElementById('sq5').classList.contains('dog') &&  document.getElementById('sq8').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq3').classList.contains('dog') && document.getElementById('sq3').classList.contains('dog') &&  document.getElementById('sq6').classList.contains('dog')){
							document.getElementById('result').innerHTML = 'Dog Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
				} else if (currentPlayer === 'cat'){
					currentPlayer = 'dog';
					document.getElementById('result').innerHTML = "Dogs's Turn";
				}
						if(document.getElementById('sq1').classList.contains('cat') && document.getElementById('sq2').classList.contains('cat') &&  document.getElementById('sq3').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq4').classList.contains('cat') && document.getElementById('sq5').classList.contains('cat') &&  document.getElementById('sq6').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq7').classList.contains('cat') && document.getElementById('sq8').classList.contains('cat') &&  document.getElementById('sq9').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq1').classList.contains('cat') && document.getElementById('sq5').classList.contains('cat') &&  document.getElementById('sq9').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq3').classList.contains('cat') && document.getElementById('sq5').classList.contains('cat') &&  document.getElementById('sq7').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq1').classList.contains('cat') && document.getElementById('sq4').classList.contains('cat') &&  document.getElementById('sq7').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq2').classList.contains('cat') && document.getElementById('sq5').classList.contains('cat') &&  document.getElementById('sq8').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
						else if(document.getElementById('sq3').classList.contains('cat') && document.getElementById('sq3').classList.contains('cat') &&  document.getElementById('sq6').classList.contains('cat')){
							document.getElementById('result').innerHTML = 'Cat Wins!';
							document.getElementById('result').style.color = 'white';
							document.getElementById('result').style.backgroundColor = 'red';
						}
			}
}


function resetBoard(){
	var clearMe = document.getElementsByClassName('square');
	for (var clearer in clearMe) {
		clearMe[clearer].classList.remove('dog');
		clearMe[clearer].classList.remove('cat');
		document.getElementById('result').innerHTML = "Result";
	}
}

var aI = 'arty';

function artBrain(){
	var rando = (Math.floor(Math.random()*9)+1);
	return 'sq' + rando;
}

// function artChoice(dig){
// 	if (document.getElementById(dig).classList.contains('dog'){
// 		return;
// 	} else {
// 		document.getElementById('sq' + (Math.floor(Math.random()*9)+1)).classList.add(currentPlayer)
// 	}
// }

// var squares = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];

// for (var i = 0; i < squares.length - 1; i++) {
// 	squares[i] = document.getElementById(squares[i])
// }
// console.log(squares)
// for (var i = 0; i < squares.length - 1; i++){
// 	console.log(squares[i])
// 	squares[i].addEventListener('click', function(){
// 		alert('current player is: ' + currentPlayer)
// 		var clickedElement = squares[i]
// 		console.log(clickedElement)
		
// 		// if current player is you, make it a dog, if not, cat
// 		if (currentPlayer === 'you'){
// 			squares[i].classList.remove('cat');
// 			squares[i].classList.add('dog');
// 			currentPlayer = 'me';
// 		} else if (currentPlayer === 'me') {
// 			squares[i].classList.remove('cat');
// 			squares[i].classList.add('cat');
// 			currentPlayer = 'you';
// 		}

// 	});
// }

// a way of keeping track of played squares

//fill square and changes player

// val squareID = ['sq1', 'sq2', 'sq3', 'sq4', 'sq5', 'sq6', 'sq7', 'sq8', 'sq9'];

// function whoWins(){

// 	for (var i = 0; i < squareID.length; i++){
// 		if (document.getElementById(squareID[i]).classList.contains('dog') && document.getElementById(squareID[i+1]).classList.contains('dog') &&  document.getElementById(squareID[i]+2).classList.contains('dog')){
// 			document.getElementById('result').style.color = 'green';
// 		} 
// 	}
// }

//Notes
	// alert('current player is: ' + currentPlayer)
	// check if this square has been clicked already
	// if it has been clicked, return (exit the function)
	// if not, run logic to change background
	// if current player is you, make it a dog, if not, cat

//Old Code
	// if (currentPlayer === 'dog'){
	// 	document.getElementById(squares[0]).classList.remove('cat');
	// 	document.getElementById(squares[0]).classList.add('dog');
	// 	currentPlayer = 'cat';
	// } else if (currentPlayer === 'cat') {
	// 	document.getElementById(squares[0]).classList.remove('cat');
	// 	document.getElementById(squares[0]).classList.add('cat');
	// 	currentPlayer = 'dog';
	// }
	