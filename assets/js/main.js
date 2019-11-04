var keys = document.getElementsByClassName('keys');
let board = document.getElementById('innerSkin');
let piano = document.getElementById('pianoBody');
let keyCount = document.getElementById('countKey');
let blackKeys = document.getElementsByClassName('blackKeys');
let notes = document.getElementsByClassName('note');


let Octave =
	`
	<div>
		<div class="whiteKeys keys"></div>
		<div class="blackKeys keys"></div>
	</div>
	<div>
		<div class="whiteKeys keys"></div>
		<div class="blackKeys keys"></div>
	</div>

	<div class="whiteKeys keys"></div>
	<div>
		<div class="whiteKeys keys"></div>
		<div class="blackKeys keys"></div>
	</div>

	<div>
		<div class="whiteKeys keys"></div>
		<div class="blackKeys keys"></div>
	</div>

	<div>
		<div class="whiteKeys keys"></div>
		<div class="blackKeys keys"></div>
	</div>

	<div class="whiteKeys keys"></div>
	`
	;



function CountKeys() {
	keyCount.innerHTML = keys.length;
	return keys.length;
}

function getKeys() {
	[...keys].map((element, index) => {
		return element.addEventListener('click', () => {
			return play(index);
		}
		)
	});
}

function play(index) {
	let noteSounds = [...notes]
	noteSounds[index].play();
	// noteSounds[index].playBackRate = 2.0;
	// console.log(index);
}

function newOctave() {
	let count = CountKeys();
	if (count <= 24) {
		board.innerHTML += Octave;
		piano.style.width = `${piano.offsetWidth + 400}px`;
		board.style.marginTop = '-20px';

		getKeys();
		CountKeys();
	}
	else {
		alert('Cannot add more keys to this screen');
	}
}

function removeOctave() {
	if (keys.length === 12) {
		alert('Cannot delete keys');
	}
	else {
		piano.style.width = `${piano.offsetWidth - 400}px`;
		let newKey = [...keys].slice(0, keys.length - 12);
		let content = '';

		for (let i = 0; i < newKey.length / 12; i++) {
			content += Octave;
		}

		console.log(newKey.length)
		board.innerHTML = content;
	}
	CountKeys();
	getKeys();
}

function showNames() {
	// keys.
}

function useKeyboard() {
	document.addEventListener('keydown', (e) => {
		let definedKeys = [65, 87, 83, 69, 68, 70, 84, 71, 89,
			72, 85, 74, 75, 79, 76, 80, 59, 222, 221, 163];
		let code = e.which || e.keycode;
		let index = definedKeys.indexOf(code);
		play(index);
		let allKeys = [...keys];
		allKeys[index].style.backgroundColor = '#000000cc'
		setTimeout(() => {
			allKeys[index].style.backgroundColor = 'initial';
			if (allKeys[index].className[0] === 'b') {
				allKeys[index].style.backgroundColor = 'black';
			}
		}, 0900);
	});
}

CountKeys();
getKeys();
useKeyboard();