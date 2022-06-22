class Cell{
	constructor(id){
		this.id = id
		this.value = ''
		this.self = board.domCells[id]
	}
}
class Board{
	constructor(){
		this.self = document.querySelector('.board')
		this.cellValue = 'x'
		this.domCells = document.querySelectorAll('.cell')
		this.cells = []
		this.cells.length = 9
		this.finish = false
		this.steps = 0
	}
	start(){
		this.domCells.forEach((e, item) => {
			e.onclick = (event) => {this.setValue(item)}
			this.cells[item] = new Cell(item)
		})
	}
	setValue(item){
		let cell = this.cells[item]
		if (cell.value === ''){
			if (this.cellValue === 'x') {
				cell.value = 'x'
				this.cellValue = '0'
			} else{
				cell.value = '0'
				this.cellValue = 'x'
			}
			this.steps++
		}
		this.getValues(cell)
	}
	getValues(cell){
		if (!this.finish){
			cell.self.innerHTML = `<img src="./${cell.value}.svg" alt="${cell.value}">`
			if (this.checkWinner(cell.value)){
				this.endGame(cell.value)
			} else{
				if (this.steps === 9){
					this.endGame('draw')
				}
			}
			console.log(this.steps)
		}
	}
	checkWinner(opt){
		let find = 0
		for (let i = 0; i < 9; i+=3){
			for (let j =  0; j < 3; j++){if (this.cells[i+j].value === opt) find++}
			if (find === 3) {return true}
			find = 0
		}
		for (let i = 0; i < 3; i++){
			for (let j = 0; j < 9; j+=3){if (this.cells[i+j].value === opt) find++}
			if (find === 3) return true
			find = 0
		}
		for (let i = 0; i < 9; i+=4){
			if (this.cells[i].value === opt) find++
			if (find === 3) return true
		}
		find = 0
		for (let i = 2; i < 8; i+=2){
			if (this.cells[i].value === opt) find++
			if (find === 3) return true
		}
		return false
	}
	endGame(opt){
		if(opt === 'x') opt = '❌'
		if (opt === '0') opt = '⭕️'
		if (opt === 'draw'){
			document.querySelector('h1').innerText = `DRAW!`
			this.finish = true
			return
		}
		document.querySelector('h1').innerText += ` ${opt}`
		this.finish = true
	}
}
let board = new Board
board.start()