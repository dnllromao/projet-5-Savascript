// charger le fichier "data.json" tip : xmlHttpRequest
// ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
// classer l'odre du tableau selon les scores tip : arr.sort()
// mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
// compter combien de personne viennent du "Bahrain" tip : filter()
// afficher le plus grand score dans la console tip : sort()
// afficher le plus petit score tip : sort()

let ajax =  new XMLHttpRequest();
console.log(ajax);

ajax.overrideMimeType("application/json");  
ajax.open('get', 'data.json');
ajax.send();

ajax.onreadystatechange = function (truc) {
	console.log(ajax);
	let json = JSON.parse(ajax.responseText);

	
	console.log(json);
}

