let queryCell = 'x'
let cells = []
cells.length = 9
document.querySelectorAll('.cell').forEach((e) => {e.onclick = (event) => {setQuery(event.target)}})
function setQuery(cell) {
	if (cell.innerText === ''){
		if (queryCell === 'x') {
			cell.innerText = 'x'
			queryCell = '0'
		} else{
			cell.innerText = '0'
			queryCell = 'x'
		}
	}
	getValues(cell.innerText)
}
function getValues(opt){
	document.querySelectorAll('.cell').forEach((e, item) => {cells[item] = e.innerText})
	if (w(opt)){endGame(opt); return}
}
let w = function checkWinner(opt){
	let find = 0
	for (let i = 0; i < 9; i+=3){
		for (let j = 0; j < 3; j++){if (cells[i+j] === opt) find++}
		if (find === 3) return true
		find = 0
	}
	for (let i = 0; i < 3; i++){
		for (let j = 0; j < 9; j+=3){if (cells[i+j] === opt) find++}
		if (find === 3) return true
		find = 0
	}
	for (let i = 0; i < 9; i+=4){
		if (cells[i] === opt) find++
		if (find === 3) return true
	}
	find = 0
	for (let i = 2; i < 8; i+=2){
		if (cells[i] === opt) find++
		if (find === 3) return true
	}
	return false
}
function endGame(opt){
	document.querySelector('h1').innerText = `Win ${opt}`
	w = () => {return falses}
}