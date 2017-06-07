// Exercice : addition
const tb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let r = tb.reduce(function(acc, el) {
 	return acc + el;
});


console.log(tb);

let acc = 0;
for(i=0;i<tb.length;i++) {
 	console.log(tb[i]);
 	acc += tb[i]
}

console.log(acc);

//Exercice : Vos meilleurs choix
const actors = ['Act1','Act2','Act3'];
const actorsObj = {
	'premier' : 'Act1',
	'deuxième': 'Act2',
	'troisième': 'Act3',
}

actors.forEach(function(el, key) {
	console.log("Le numero "+key+" est "+el);
});

for (var prop in actorsObj) {
	console.log("Le "+prop+" est "+actorsObj[prop]);
}

// Exercice : clone
const names = ["Mario", "Luigi", "Peach"];
let clone = names.slice(0); // slice create a new obj 'o'
clone.push("Bowser");

console.log(names);
console.log(clone);

// Exercice : aléatoire

// crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
// choisir un personnage aléatoirement dans le tableau
const nm = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
var alet = nm[Math.floor(Math.random() * nm.length)];

console.log(alet);
/*
liste.push()// add to the end 
liste.pop()// retirer le dernier el
liste.shift()// retirer element du debut
liste.unshift() // add as first el
*/