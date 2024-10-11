let scoreIndo = 2;
let scoreBahrain = 1;

let time = 90;
let additionalTime = 6;

console.log(`Additional time: ${additionalTime}`);
console.log(`Indo: ${scoreIndo} & Bahrain: ${scoreBahrain}\n`);

function wasitGoblok() {
	while (scoreIndo > scoreBahrain) {
		additionalTime++;

		if (additionalTime === 9) {
			scoreBahrain = 2;
		}
	}
	let totalTime = time + additionalTime;

	console.log(`Indo: ${scoreIndo} & Bahrain: ${scoreBahrain}`);
	console.log(`Total time: ${totalTime}`);
}

wasitGoblok();
