// Exercice : Juste prix
let count = 0;
let min = 20;
let max = 80;

function randomPrix(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

const prix = randomPrix(min,max);

function tester(nb) {
	count ++;

	if( nb === prix ) {
		return "C'est juste tu as trouvé en "+count+" coups";
	} else if ( nb < prix) {
		return "C'est plus";
	} else if ( nb > prix) {
		return "C'est moins";
	}

}
