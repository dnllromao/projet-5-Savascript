// Exercice : Langues
const lg = 'en';
let msg;

if(lg === 'en') {
	msg = "Hello world";
} else if (lg === 'fr') {
	msg = "Bonjour tout le monde";
} else if (lg === 'es') {
	msg = "Hola, Mundo";
}

console.log(msg)

//Exercice : Affichage des scores
let score = 30;
let result;

if(score >= 90) {
	result = 'rangA';
} else if (score < 90) {
	result = 'rangB';
} else if (score <= 50) {
	result = 'rangC';
}

console.log(result);

// Exercice : Mettre au pluriel
const word = 'apple';
let nb = 1;
let resulti = word;

if(nb > 1) {
	resulti = word + 's';
}

console.log("Je possède "+nb+" "+resulti);