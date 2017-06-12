// charger le fichier "data.json" tip : xmlHttpRequest
// ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
// classer l'odre du tableau selon les scores tip : arr.sort()
// mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
// compter combien de personne viennent du "Bahrain" tip : filter()
// afficher le plus grand score dans la console tip : sort()
// afficher le plus petit score tip : sort()

const ajax =  new XMLHttpRequest();
let justeSa;

ajax.onload = function() { // .onload called when transaction completes sucessfully
  if (ajax.status >= 200 && ajax.status < 400) {
    // Success!
    let json = JSON.parse(ajax.responseText);

    justeSa = json;
    console.log(justeSa);
    let scoreded = addScore(json);
	scoreded = sortByScore(scoreded);
	let categories = divideByScore(scoreded);
	let fromBahrain = filterByCountry(scoreded);
	console.log(scoreded[scoreded.length - 1 ]);
	console.log(scoreded[0]);
  } else {
    // We reached our target server, but it returned an error

  }
};

ajax.onerror = function() { //  .oneerror called when operation fails to complete due to an error.
  // There was a connection error of some sort
};

ajax.open('GET', 'files/data.json');
ajax.overrideMimeType("application/json");
ajax.send();



function addScore (data) {
	return data.map(function(el,index,arr) {
		el.score = Math.round(Math.random() * 1000);
		return el;
	});
}

function sortByScore (data) {
	return data.sort(function(a,b) {
		return (a.score > b.score) ? 1 : -1 ;
	});
}

function divideByScore (data) {
	let list = { a : [], b : [], c : [] };

	data.forEach(function(el,index,arr) {
		if (el.score > 750) {
			list.a.push(el);
		} else if (el.score > 500) {
			list.b.push(el);
		} else {
			list.c.push(el);
		}
	});

	return list;
}

function filterByCountry (data) {
	return data.filter(function(el,index,arr) {
		return el.country === 'Bahrain';
	});
}


