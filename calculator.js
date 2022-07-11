
//flag
	let turnedOn = false;
	let total = 100;
	let total2 = '';
	let numOne = '';
	let operator = '';
	let numTwo = '';
	let operatorPressed = false;


	// if(operator == false) console.log('it is false')

	//selectors
	let displayy = document.querySelector(".display");
	let acButton = document.querySelector(".clear");
	let backButton = document.querySelector('.back');
	// console.log(displayy, acButton)

	//functions
	function turningOn(){
		turnedOn = !turnedOn
		console.log(turnedOn)

		turnedOn == true ? displayy.classList.add('onn'): turnedOn == false ? displayy.classList.remove('onn') : null;

		// turnedOn == true ? displayy.innerText = '0' && numOne = '0' : turnedOn == false ? displayy.innerText = "Double Click AC to Turn On/Off" : null;

		if(turnedOn)  displayy.innerText = '0';
		if(turnedOn == false) displayy.innerText = "Double Click AC to Turn On/Off";
	}

	function displayIt(item){
		displayy.innerText = item;
	}


	//deals with the Ac button and the text it displays when either on or off
	function ChangeBacktoAC(e){
		if(turnedOn) acButton.style.alignItems = 'center', acButton.style.fontSize = '27px', acButton.innerText = 'Clear'
		else acButton.style.fontSize = '40px', acButton.innerText = "AC"
	}

	function clearIt(){
		if(turnedOn) numOne = '', numTwo = '', operator = '', operatorPressed = false, displayIt('0');
	}


	function backOne(){
		if(turnedOn && displayy.innerText.length > 1) {
			if(operatorPressed == false){
			numOne = displayy.innerText.substring(0, displayy.innerText.length - 1),
			displayIt(displayy.innerText.substring(0, displayy.innerText.length - 1));
			}
			if(operatorPressed){
			numTwo = displayy.innerText.substring(0, displayy.innerText.length - 1),
			displayIt(displayy.innerText.substring(0, displayy.innerText.length - 1));	
			}
		}
	}
		
	
	function buttonDown(){
		if(turnedOn) this.classList.add('buttonDown')
	}

	function removeButtonDown(e){
		this.classList.remove('buttonDown');
	}

	function setUp(e){
		if(turnedOn){
			if(operatorPressed == false){
				numOne += String(this.innerText);
				if(numOne.length > 17 ) alert('Do you really need a number that long, Please press back'), numOne = numOne.substring(0,17), displayIt(numOne);

				else	displayIt(numOne);
			}
			if(operatorPressed == true) {
				numTwo += String(this.innerText);
				if(numTwo.length > 17 ) alert('Do you really need a number that long, Please press back'), numTwo = numTwo.substring(0,17), displayIt(numTwo);
				else	displayIt(numTwo);
			}
		}
	}

	function setOperator(){
		if(turnedOn && numOne) operatorPressed = true, operator = this.innerText;
		
	}

	function doOperation(){
		if(operatorPressed && numTwo){
			console.log(operator)
		switch (operator) {
			case '+':
				total = Number(numOne) + Number(numTwo);
				console.log(total)
				total2 = String(total).substr(0,17)
				numOne = total2, operatorPressed = false, numTwo = '', operatorPressed = false;
				displayIt(total2);
				break;
			case '-':
				total = Number(numOne) - Number(numTwo);
				total2 = String(total).substr(0,17)
				numOne = total2, operatorPressed = false, numTwo = '', operatorPressed = false;
				displayIt(total2);
				break;
			case 'x':
				total = Number(numOne) * Number(numTwo);
				total2 = String(total).substr(0,17)
				numOne = total2, operatorPressed = false, numTwo = '', operatorPressed = false;
				displayIt(total2);
				break;
			case '/':
				total = Number(numOne) / Number(numTwo)
				total2 = String(total).substr(0,17)
				numOne = total2, operatorPressed = false, numTwo = '', operatorPressed = false;
				displayIt(total2);
				break;
			default:
				displayIt('Error Press Clear')
				break;
		}
		
	}
	}





	//event listeners 

	//calls calulator on method
	acButton.addEventListener('dblclick', turningOn);
	//calls button dowm effect
	Array.from(document.querySelectorAll('.button')).forEach(button => button.addEventListener('mousedown', buttonDown));
	//calls remove button down
	Array.from(document.querySelectorAll('.button')).forEach(button => button.addEventListener('transitionend', removeButtonDown));
	//turns ac into clear and back
	acButton.addEventListener('dblclick', ChangeBacktoAC);
	//clears callculator
	acButton.addEventListener('click', clearIt)
	//functionality
	Array.from(document.querySelectorAll('.numbers')).forEach(button => button.addEventListener('click', setUp));
	//deletes one character 
	backButton.addEventListener('click', backOne)
	//set the operator 
	Array.from(document.querySelectorAll('.operator')).forEach(button => button.addEventListener('click', setOperator));
	//do operation
	document.querySelector('.equal').addEventListener('click', doOperation)