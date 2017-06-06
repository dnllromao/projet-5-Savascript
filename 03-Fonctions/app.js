// Exercice : Calculs
const soustraction = function (a,b) {
	return a - b;
}

const division  = function (a,b) {
	return a / b;
}

const multiplication  = function (a,b) {
	return a * b;
}

const pourcentage  = function (prc,value) {
	return division(multiplication(prc, value), 100);
}

const calcVitesse = function (dist, temp) {
	return division(dist, temp) + 'km/h';
}


console.log(calcVitesse(50, 0.2));