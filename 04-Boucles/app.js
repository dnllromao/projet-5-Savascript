// Exercice : Pair et impair
var is_pair = function (n) {
	return (n%2 === 0);
}

for(i=0; i <= 20; i++) {

	console.log(i +' est ' + ((is_pair(i))?'pair':'unpair'));
}

// Exercice : Multiplication Tables
for(i=0; i <= 10; i++) {

	console.log(i+' * 9 = '+ i*9);
}

// Exercice : assigner des grades

// Écrire une boucle qui va itérer de 0 à 100
// Écrire une fonction qui va retourner des grades selon les scores reçu
// si le score au dessus de 90 le grade est A
// si le score au dessus de 80 le grade est B
// si le score au dessus de 70 le grade est C
// si le score au dessus de 65 le grade est D
// si le score n'entre pas dans ces catégories le grade est F
// afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".
for(i=0; i <= 100; i++) {
	let grade;
	if (i < 90) {
		grade = 'A';
	} else if (i < 80) {
		grade = 'B';
	} else if (i < 70) {
		grade = 'C';
	} else if (i < 65) {
		grade = 'D';
	} else {
		grade = 'F';
	}

	console.log("Pour "+i+" points vous avez le grade "+grade);
}