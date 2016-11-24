function ley() {
var get = document.getElementById('button')
	get.className = 'button'
	get.setAttribute('onclick', 'double()')
	var getDiv = document.getElementById('directions')
	
	get.innerHTML = 'Double it' 
}
ley()
	var getD = document.getElementById('directions')
function double() {
	var userInput = document.getElementById('input').value
	var getShow = document.getElementById('show')
	newUserInput = userInput * 2
	getShow.innerHTML = userInput + " x 2 = " + newUserInput
	var get = document.getElementById('button') 
	get.removeAttribute('onclick')
	get.className = 'button'
	get.setAttribute('onclick', 'add()')
	get.innerHTML = 'Add 10' 
	getD.className = 'delete'
}

function add() {
	var userInput = document.getElementById('input').value
	var out = Number(userInput) * 2 + 10
	var getShow = document.getElementById('show')
	var get = document.getElementById('button') 
	getShow.innerHTML = (Number(userInput) * 2) + ' + 10 = ' + out
	get.className = 'button'
	get.setAttribute('onclick', 'half()')
	get.innerHTML = 'Halve it' 
	getD.className = 'delete'
}

function half() {
	var userInput = document.getElementById('input').value
	var out = (Number(userInput) * 2 + 10) / 2
	var getShow = document.getElementById('show')
	var get = document.getElementById('button') 
	getShow.innerHTML = (Number(userInput) * 2 + 10) + "/2 = " + out
	get.className = 'button'
	get.setAttribute('onclick', 'original()')
	get.innerHTML = 'Subtract' 
	getD.className = 'delete'
}

function original() {
	var userInput = document.getElementById('input').value
	var out = ((Number(userInput) * 2 + 10) / 2) - userInput
	var getShow = document.getElementById('show')
	var get = document.getElementById('button')
	var getFive = document.getElementById('five')
	get.className = 'delete'
	getShow.className = 'h3 animated infinite bounce'
	getD.className = 'delete'
	getFive.className = 'show'
	getShow.innerHTML = ((Number(userInput) * 2 + 10) / 2) + ' - ' + userInput + " = " + out
}