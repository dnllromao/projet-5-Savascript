// Exercice : Juste prix

// Déclarez les variables suivantes :

// Variable qui sera utilisée pour afficher un message
// Variable qui va compter le nombre d'essais
// Variable de la valeur minimum qu'on peut entrer (ici 20)
// Variable de la valeur maximale qu'on peut entrer (ici 80)
// Déclarez les fonctions suivantes :

// crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
// crée une fonction
// qui prends un argument pour tester si le numéro qu'on a entré est le bon
// la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups
// Utiliser la console ou les fonctions natives suivantes :

// window.prompt();
// window.alert();
// window.confirm();
const prix = 60;
let msg;
let count = 0;
let min = 20;
let max = 80;

function randomPrix(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

function tester(nb) {
	count ++;

	if( nb === prix ) {
		return "C'est juste tu as trouvé en "+count+" coups";
	} else if ( nb < prix) {
		return "C'est plus";
	} else if ( nb > prix) {
		return "C'est plus";
	}

}

console.log(tester(randomPrix(min,max)));