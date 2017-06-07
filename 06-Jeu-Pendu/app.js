// Info : le nombre d'essais est illimité

// Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R',

// Créer un autre tableau pour mettre les lettres devinées : '','','','','','','_'

// Écrivez une fonction appelée "guessLetter" cette fonction va

// Itérer à travers les lettres
// Voir si la lettre deviné se trouve dans le mot
// Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
// Afficher dans la console les lettre devinés
// Le jeu doit savoir quand la partie est finie et féliciter le joueur
// Bonus: Se rapprocher du vrais pendu :

// Gardez en mémoire toutes les lettres devinées (bonnes et mauvaises) et seulement laisser l'utilisateur deviner une lettre une fois.
// Si une lettre est entrée deux fois, ne rien faire.
// compter le nombre de tentatives ratés

const tb = ['B','O','N','J','O','U','R'];
let devin = ['','','','','','','_'];
let lt = [];
let count = 0;

function guessLetter(l) {
	
	tb.forEach(function(el,index) {
		if(l === el) {
			devin[index] = l;
		}
		if(lt.indexOf(l) < 0) {
			lt.push(l);
		}
	});

	count++;

	if(devin.indexOf('') < 0 && devin.indexOf('_') < 0 ){
		window.alert('Félicitations !');
	}
	
}

guessLetter('O');
console.log(devin);

guessLetter('A');
console.log(lt);

guessLetter('D');
console.log(lt);

guessLetter('B');
console.log(devin);

guessLetter('N');
console.log(devin);

guessLetter('J');
console.log(devin);

guessLetter('U');
console.log(devin);

guessLetter('R');
console.log(devin);

console.log(lt);
console.log(count);