(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  const countDown = new Date("May 27, 2026 23:59:59").getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Это конец";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
}());

function Nush() {
	// 1. Создаем букву
	// const alphabet = "Инертный";
	const letter = document.createElement('span');
	letter.className = 'letter';
	letter.innerText = 'И'

	const letter2 = document.createElement('span');
	letter2.className = 'letter';
	letter2.innerText = 'н'

	const letter3 = document.createElement('span');
	letter3.className = 'letter';
	letter3.innerText = 'е'

	const letter4 = document.createElement('span');
	letter4.className = 'letter';
	letter4.innerText = 'р'

	const letter5 = document.createElement('span');
	letter5.className = 'letter';
	letter5.innerText = 'т'

	const letter6 = document.createElement('span');
	letter6.className = 'letter';
	letter6.innerText = 'н'

	const letter7 = document.createElement('span');
	letter7.className = 'letter';
	letter7.innerText = 'ы'

	const letter8 = document.createElement('span');
	letter8.className = 'letter';
	letter8.innerText = 'й'
	// letter.innerText = alphabet[Math.floor(Math.random() * alphabet.length)];

	// 2. Случайная позиция 
	
	letter.style.left = Math.random() * window.innerWidth + 'px';
	letter.style.top = Math.random() * window.innerHeight + 'px';
	
	letter2.style.left = Math.random() * window.innerWidth + 'px';
	letter2.style.top = Math.random() * window.innerHeight + 'px';

	letter3.style.left = Math.random() * window.innerWidth + 'px';
	letter3.style.top = Math.random() * window.innerHeight + 'px';

	letter4.style.left = Math.random() * window.innerWidth + 'px';
	letter4.style.top = Math.random() * window.innerHeight + 'px';

	letter5.style.left = Math.random() * window.innerWidth + 'px';
	letter5.style.top = Math.random() * window.innerHeight + 'px';

	letter6.style.left = Math.random() * window.innerWidth + 'px';
	letter6.style.top = Math.random() * window.innerHeight + 'px';

	letter7.style.left = Math.random() * window.innerWidth + 'px';
	letter7.style.top = Math.random() * window.innerHeight + 'px';

	letter8.style.left = Math.random() * window.innerWidth + 'px';
	letter8.style.top = Math.random() * window.innerHeight + 'px'; 

	document.body.appendChild(letter); 
	document.body.appendChild(letter2);
	document.body.appendChild(letter3);
	document.body.appendChild(letter4);
	document.body.appendChild(letter5);
	document.body.appendChild(letter6);
	document.body.appendChild(letter7);
	document.body.appendChild(letter8);

	// 3. Удаление через 3 секунды
	setTimeout(() => {
		letter.remove();
		letter2.remove();
		letter3.remove();
		letter4.remove();
		letter5.remove();
		letter6.remove();
		letter7.remove();
		letter8.remove();
	}, 3000);
}
function Anekdot() {
	// 1. Создаем букву
	// const alphabet = "Дефект";
	const letter = document.createElement('span');
	letter.className = 'letter';
	letter.innerText = 'Д'

	const letter2 = document.createElement('span');
	letter2.className = 'letter';
	letter2.innerText = 'е'

	const letter3 = document.createElement('span');
	letter3.className = 'letter';
	letter3.innerText = 'ф'

	const letter4 = document.createElement('span');
	letter4.className = 'letter';
	letter4.innerText = 'е'

	const letter5 = document.createElement('span');
	letter5.className = 'letter';
	letter5.innerText = 'к'

	const letter6 = document.createElement('span');
	letter6.className = 'letter';
	letter6.innerText = 'т'

	// 2. Случайная позиция
	letter.style.left = Math.random() * window.innerWidth + 'px';
	letter.style.top = Math.random() * window.innerHeight + 'px';
	
	letter2.style.left = Math.random() * window.innerWidth + 'px';
	letter2.style.top = Math.random() * window.innerHeight + 'px';

	letter3.style.left = Math.random() * window.innerWidth + 'px';
	letter3.style.top = Math.random() * window.innerHeight + 'px';

	letter4.style.left = Math.random() * window.innerWidth + 'px';
	letter4.style.top = Math.random() * window.innerHeight + 'px';

	letter5.style.left = Math.random() * window.innerWidth + 'px';
	letter5.style.top = Math.random() * window.innerHeight + 'px';

	letter6.style.left = Math.random() * window.innerWidth + 'px';
	letter6.style.top = Math.random() * window.innerHeight + 'px';

	document.body.appendChild(letter); 
	document.body.appendChild(letter2);
	document.body.appendChild(letter3);
	document.body.appendChild(letter4);
	document.body.appendChild(letter5);
	document.body.appendChild(letter6);

	// 3. Удаление через 3 секунды
	setTimeout(() => {
		letter.remove();
		letter2.remove();
		letter3.remove();
		letter4.remove();
		letter5.remove();
		letter6.remove();
	}, 3000);
}
function Alex() {
	// 1. Создаем букву
	// const alphabet = "Креза";
	const letter = document.createElement('span');
	letter.className = 'letter';
	letter.innerText = 'К'

	const letter2 = document.createElement('span');
	letter2.className = 'letter';
	letter2.innerText = 'р'

	const letter3 = document.createElement('span');
	letter3.className = 'letter';
	letter3.innerText = 'е'

	const letter4 = document.createElement('span');
	letter4.className = 'letter';
	letter4.innerText = 'з'

	const letter5 = document.createElement('span');
	letter5.className = 'letter';
	letter5.innerText = 'а'

	// 2. Случайная позиция
	letter.style.left = Math.random() * window.innerWidth + 'px';
	letter.style.top = Math.random() * window.innerHeight + 'px';
	
	letter2.style.left = Math.random() * window.innerWidth + 'px';
	letter2.style.top = Math.random() * window.innerHeight + 'px';

	letter3.style.left = Math.random() * window.innerWidth + 'px';
	letter3.style.top = Math.random() * window.innerHeight + 'px';

	letter4.style.left = Math.random() * window.innerWidth + 'px';
	letter4.style.top = Math.random() * window.innerHeight + 'px';

	letter5.style.left = Math.random() * window.innerWidth + 'px';
	letter5.style.top = Math.random() * window.innerHeight + 'px';

	document.body.appendChild(letter); 
	document.body.appendChild(letter2);
	document.body.appendChild(letter3);
	document.body.appendChild(letter4);
	document.body.appendChild(letter5);

	// 3. Удаление через 3 секунды
	setTimeout(() => {
		letter.remove();
		letter2.remove();
		letter3.remove();
		letter4.remove();
		letter5.remove();
	}, 3000);
}
function Dastr() {
	// 1. Создаем букву
	// const alphabet = "Анафема";
	const letter = document.createElement('span');
	letter.className = 'letter';
	letter.innerText = 'А'

	const letter2 = document.createElement('span');
	letter2.className = 'letter';
	letter2.innerText = 'н'

	const letter3 = document.createElement('span');
	letter3.className = 'letter';
	letter3.innerText = 'а'

	const letter4 = document.createElement('span');
	letter4.className = 'letter';
	letter4.innerText = 'ф'

	const letter5 = document.createElement('span');
	letter5.className = 'letter';
	letter5.innerText = 'е'

	const letter6 = document.createElement('span');
	letter6.className = 'letter';
	letter6.innerText = 'м'

	const letter7 = document.createElement('span');
	letter7.className = 'letter';
	letter7.innerText = 'а'

	// 2. Случайная позиция
	letter.style.left = Math.random() * window.innerWidth + 'px';
	letter.style.top = Math.random() * window.innerHeight + 'px';
	
	letter2.style.left = Math.random() * window.innerWidth + 'px';
	letter2.style.top = Math.random() * window.innerHeight + 'px';

	letter3.style.left = Math.random() * window.innerWidth + 'px';
	letter3.style.top = Math.random() * window.innerHeight + 'px';

	letter4.style.left = Math.random() * window.innerWidth + 'px';
	letter4.style.top = Math.random() * window.innerHeight + 'px';

	letter5.style.left = Math.random() * window.innerWidth + 'px';
	letter5.style.top = Math.random() * window.innerHeight + 'px';

	letter6.style.left = Math.random() * window.innerWidth + 'px';
	letter6.style.top = Math.random() * window.innerHeight + 'px';

	letter7.style.left = Math.random() * window.innerWidth + 'px';
	letter7.style.top = Math.random() * window.innerHeight + 'px';

	document.body.appendChild(letter); 
	document.body.appendChild(letter2);
	document.body.appendChild(letter3);
	document.body.appendChild(letter4);
	document.body.appendChild(letter5);
	document.body.appendChild(letter6);
	document.body.appendChild(letter7);

	// 3. Удаление через 3 секунды
	setTimeout(() => {
		letter.remove();
		letter2.remove();
		letter3.remove();
		letter4.remove();
		letter5.remove();
		letter6.remove();
		letter7.remove();
	}, 3000);
}
function triggerScreamer() {
    const screamerImage = document.getElementById('screamer-image');
    screamerImage.style.display = 'block';    
    document.getElementById('jump').style.display = 'none';
	// setTimeout(triggerScreamer, 1000);
	// setTimeout(unTriggerScreamer, 1000);
}
function unTriggerScreamer() {
	const sreamerImage = document.getElementById('screamer-image');
    const okak = document.getElementById('jump');
	sreamerImage.style.display = 'none';  
    okak.style.display = 'block';
}
console.clear();

let size = 16; // size x size tiles
let bombFrequency = 0.12; // percentage of bombs
let tileSize = 25;
let wins = 0;
console.log(wins);

const board = document.querySelectorAll('.board')[0];
let tiles;
let boardSize;
var audio = document.getElementById("mm");
audio.volume = 0.1;

const restartBtn = document.querySelectorAll('.btn')[0];
const endscreen = document.querySelectorAll('.endscreen')[0]

// settings
const boardSizeBtn = document.getElementById('boardSize');
const tileSizeBtn = document.getElementById('tileSize');
const difficultyBtns = document.querySelectorAll('.difficulty');


let bombs = [];
let numbers = [];
let numberColors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d',];
let endscreenContent = {win: '<span>✔</span> you won!', loose: '💣 Booom! Game over.'};

let gameOver = false;

/* clear board */
const clear = () => {
	console.clear();
	gameOver = false;
	bombs = [];
	numbers = [];
	endscreen.innerHTML = '';
	endscreen.classList.remove('show');
	tiles.forEach(tile => {
		tile.remove();
	});
	
	setup();
}


/* setup the game */
const setup = () => {
	for (let i = 0; i < Math.pow(size, 2); i++) {
		const tile = document.createElement('div');
		tile.classList.add('tile');
		board.appendChild(tile);
	}
	tiles = document.querySelectorAll('.tile');
	boardSize = Math.sqrt(tiles.length);
	board.style.width = boardSize * tileSize + 'px';
	
	document.documentElement.style.setProperty('--tileSize', `${tileSize}px`);
	document.documentElement.style.setProperty('--boardSize', `${boardSize * tileSize}px`);
	
	let x = 0;
	let y = 0;
	tiles.forEach((tile, i) => {
		// set tile coordinates
		tile.setAttribute('data-tile', `${x},${y}`);

		// add bombs
		let boolean = Math.random() < bombFrequency;
		if (boolean) {
			bombs.push(`${x},${y}`);
			if (x > 0) numbers.push(`${x-1},${y}`);
			if (x < boardSize - 1) numbers.push(`${x+1},${y}`);
			if (y > 0) numbers.push(`${x},${y-1}`);
			if (y < boardSize - 1) numbers.push(`${x},${y+1}`);
			
			if (x > 0 && y > 0) numbers.push(`${x-1},${y-1}`);
			if (x < boardSize - 1 && y < boardSize - 1) numbers.push(`${x+1},${y+1}`);
			
			if (y > 0 && x < boardSize - 1) numbers.push(`${x+1},${y-1}`);
			if (x > 0 && y < boardSize - 1) numbers.push(`${x-1},${y+1}`);
		}

		x++;
		if (x >= boardSize) {
			x = 0;
			y++;
		}
		
		/* rightclick */
		tile.oncontextmenu = function(e) {
			e.preventDefault();
			flag(tile);
		}
		
		/* leftclick */
		tile.addEventListener('click', function(e) {
			clickTile(tile);
		});
	});
	
/* пп hh*/

	numbers.forEach(num => {
		let coords = num.split(',');
		let tile = document.querySelectorAll(`[data-tile="${parseInt(coords[0])},${parseInt(coords[1])}"]`)[0];
		let dataNum = parseInt(tile.getAttribute('data-num'));
		if (!dataNum) dataNum = 0;
			tile.setAttribute('data-num', dataNum + 1);
	});
}


/* flag a tile */
const flag = (tile) => {
	if (gameOver) return;
	if (!tile.classList.contains('tile--checked')) {
		if (!tile.classList.contains('tile--flagged')) {
			tile.innerHTML = '<img src="flas.png">';
			tile.classList.add('tile--flagged');
		} else {
			tile.innerHTML = '';
			tile.classList.remove('tile--flagged');
		}
	}
}


/* check if bomb or not */
const clickTile = (tile) => {
	if (gameOver) return;
	if (tile.classList.contains('tile--checked') || tile.classList.contains('tile--flagged')) return;
	let coordinate = tile.getAttribute('data-tile');
	if (bombs.includes(coordinate)) {
		endGame(tile);
	} else {
		/* check if nearby bomb */
		let num = tile.getAttribute('data-num');
		if (num != null) {
			tile.classList.add('tile--checked');
			tile.innerHTML = num;
			tile.style.color = numberColors[num-1];
			setTimeout(() => {
				checkVictory();
			}, 100);
			return;
		}
		
		checkTile(tile, coordinate);
	}
	tile.classList.add('tile--checked');
}


/* clicked the right one */
const checkTile = (tile, coordinate) => {
	
	console.log('✔');
	let coords = coordinate.split(',');
	let x = parseInt(coords[0]);
	let y = parseInt(coords[1]);
	
	/* check nearby tiles */
	setTimeout(() => {
		if (x > 0) {
			let targetW = document.querySelectorAll(`[data-tile="${x-1},${y}"`)[0];
			clickTile(targetW, `${x-1},${y}`);
		}
		if (x < boardSize - 1) {
			let targetE = document.querySelectorAll(`[data-tile="${x+1},${y}"`)[0];
			clickTile(targetE, `${x+1},${y}`);
		}
		if (y > 0) {
			let targetN = document.querySelectorAll(`[data-tile="${x},${y-1}"]`)[0];
			clickTile(targetN, `${x},${y-1}`);
		}
		if (y < boardSize - 1) {
			let targetS = document.querySelectorAll(`[data-tile="${x},${y+1}"]`)[0];
			clickTile(targetS, `${x},${y+1}`);
		}
		
		if (x > 0 && y > 0) {
			let targetNW = document.querySelectorAll(`[data-tile="${x-1},${y-1}"`)[0];
			clickTile(targetNW, `${x-1},${y-1}`);
		}
		if (x < boardSize - 1 && y < boardSize - 1) {
			let targetSE = document.querySelectorAll(`[data-tile="${x+1},${y+1}"`)[0];
			clickTile(targetSE, `${x+1},${y+1}`);
		}
		
		if (y > 0 && x < boardSize - 1) {
			let targetNE = document.querySelectorAll(`[data-tile="${x+1},${y-1}"]`)[0];
			clickTile(targetNE, `${x+1},${y-1}`);
		}
		if (x > 0 && y < boardSize - 1) {
			let targetSW = document.querySelectorAll(`[data-tile="${x-1},${y+1}"`)[0];
			clickTile(targetSW, `${x-1},${y+1}`);
		}
	}, 10);
}




/* Bomb clicked -> end game */
const endGame = (tile) => {
	// console.log('💣 Booom! Game over.');
	endscreen.innerHTML = endscreenContent.loose;
	endscreen.classList.add('show');
	gameOver = true;
	tiles.forEach(tile => {
		let coordinate = tile.getAttribute('data-tile');
		if (bombs.includes(coordinate)) {
			tile.classList.remove('tile--flagged');
			tile.classList.add('tile--checked', 'tile--bomb');
			tile.innerHTML = '<img src="bimbi.png">';
		}
	});
}

// huy 


const checkVictory = () => {
	let win = true;
	tiles.forEach(tile => {
		let coordinate = tile.getAttribute('data-tile');
		if (!tile.classList.contains('tile--checked') && !bombs.includes(coordinate)) win = false;
	});
	if (win) {
		wins++; // Увеличение счетчика
		console.log(wins);
		endscreen.innerHTML = endscreenContent.win;
		endscreen.classList.add('show');
		gameOver = true;
		if (wins === 2) {
			setTimeout(Nush, 1000);
		}
		if (wins === 6) {
			setTimeout(Anekdot, 1000);
		}
		if (wins === 8) {
			setTimeout(Alex, 1000);
		}
		if (wins === 13) {
			setTimeout(Dastr, 1000);
		}
	}
	
}


/* start game */
setup();

/* click button for new game */
restartBtn.addEventListener('click', function(e) {
	e.preventDefault();
	clear();
});

// settings закомить


boardSizeBtn.addEventListener('change', function(e) {
	// console.log(this.value);
	size = this.value;
	clear();
});

tileSizeBtn.addEventListener('change', function(e) {
	// console.log(this.value);
	tileSize = this.value;
	clear();
});
//  это чтоб не было ошибки в консоле

difficultyBtns.forEach(btn => {
	btn.addEventListener('click', function() {
		// console.log(this.value);
		bombFrequency = this.value;
		clear();
	});
});

// console.log(`${boardSize} x ${boardSize} tiles`);
// console.log('bombs');
// console.log(bombs);
// console.log('numbers');
// console.log(numbers);
