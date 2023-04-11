const playBox = (id) => {
	const element = document.getElementById(id);
	element.style.backgroundImage = ``;
	const audio = new Audio('rr' + id + '.mp3');
	audio.play();
};

function Grid() {
	const queue = [];

	const handleGo = () => {
		const interval = setInterval(() => {
			if (queue.length > 0) {
				const id = queue.shift();
				playBox(id);
			} else {
				clearInterval(interval);
			}
		}, 1000);
	};

	const boxClicked = (event) => {
		const id = event.target.id;
		if (!queue.includes(id)) {
			queue.push(id);
			event.target.style.backgroundImage = `url(${'rr' + id + '.jpg'})`;
		}
	};

	return (
		<div className='grid'>
			{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
				<div className={`gridbox`} id={id} onClick={boxClicked}></div>
			))}
			<div></div>
			<button id='go' onClick={handleGo}>
				Go
			</button>
		</div>
	);
}

export default Grid;
