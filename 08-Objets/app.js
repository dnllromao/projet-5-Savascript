// // Exercice : PNJ
/*
const character = {
	'name' : 'Katerine',
	'items' : [1,2,3],
	'giveItem' : function(el) {
		this.items.push(el)
	}
}

for (let key  in character) {
	console.log(character[key]);
}

character.giveItem(4);
console.log(character);
*/
// // Exercice : Shop
/*
const tb = [
	{
		'title' : 'do',
		'physic' : 4,
		'magic' : 3,
		'minLevel' : 1,
		'available' : true
	},
	{
		'title' : 're',
		'physic' : 4,
		'magic' : 3,
		'minLevel' : 1,
		'available' : true
	},
	{
		'title' : 'mi',
		'physic' : 4,
		'magic' : 3,
		'minLevel' : 10,
		'available' : false
	}
]

function getAll() {
	tb.forEach(function(el, index) {
		console.log(el);
	});
}
function getDisp() {
	return tb.filter(function(el) {
		return el.available;
	});
}

function getObj() {
	return tb.filter(function(el) {
		return el.minLevel === 10;
	});
}

getAll();
console.log(getObj());
console.log(getDisp());
*/
// // Exercice : Personnage
// const weapon = {
// 	'name' : 'knife',
// 	'damage' : 5
// }

// const mainCharacter = {
//  	'name' : 'Mon nom',
// 	'level' :  1,
// 	'life'  : 5,
// 	'weapon' : weapon,
// 	'attack' :  function () {
		//return [mainCharacter.name, mainCharacter.weapon, 'dégâts 	' + weapon.damage * mainCharacter.level];
	//}
// };

// function attack () {
// 		
// }

// console.log(attack()); 


// Exercice : Adversaire
// const weapon = {
// 	name : 'knife',
// 	damage : 5
// };

// const character = {
//  	name : 'Mon nom',
// 	level :  1,
// 	life  : 50,
// 	weapon : weapon,
// 	attack :  function (perso) {
// 		console.log(this.name);
// 		console.log(perso.name);
// 		console.log(this.weapon);
// 		perso.receiveDamage(this.level * this.weapon.damage);
// 		//return [this.name, this.weapon, 'dégâts ' + this.weapon.damage * this.level];
// 	},
// 	receiveDamage : function (a) {
// 		let degats = a;
// 		console.log(degats);	
// 		this.life -= degats;
// 	}
// };


/* version 1 */
// let opponentCharacter = Object.assign({}, character);
// console.log(opponentCharacter);

// let mainCharacter = Object.assign({}, character);
// console.log(mainCharacter);

/* version 2 */

// let mainCharacter = new Object(character); // reference of character
// console.log(mainCharacter);


// cette version ne marche pas bien car les propriertes appartienne au prototype
// du coup une faois que la porpriete life et defini l'obj concernéé a 2 fois cette porporieté (?)
// let opponentCharacter = Object.create(character);
// console.log(opponentCharacter);

// let mainCharacter = Object.create(character);
// console.log(mainCharacter);

// mainCharacter.attack(opponentCharacter);
// console.log(opponentCharacter);
// console.log(mainCharacter);



//Call by reference (also referred to as pass by reference) is an evaluation strategy 
//where a function receives an implicit reference to a variable used as argument, rather than a copy of its value.
//This typically means that the function can modify (i.e. assign to) the variable used as argument—something that will be seen by its caller. 