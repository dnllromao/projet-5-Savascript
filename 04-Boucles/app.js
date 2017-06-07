// Exercice : Pair et impair
var is_unpair = function (n) {
	return (n%2);
}

for(i=0; i <= 20; i++) {
	console.log(i +' est ' + ((is_unpair(i))?'unpair':'pair'));
}

// Exercice : Multiplication Tables
for(i=0; i <= 10; i++) {

	console.log(i+' * 9 = '+ i*9);
}

// Exercice : assigner des grades
for(i=0; i <= 100; i++) {
	let grade;
	if (i < 65) {
		grade = 'D';
	} else if (i < 70) {
		grade = 'C';
	} else if (i < 80) {
		grade = 'B';
	} else if (i < 90) {
		grade = 'A';
	} else {
		grade = 'F';
	}

	console.log("Pour "+i+" points vous avez le grade "+grade);
}

var a = "";
for(i=0; i < 5; i++) {
	a += '* ';
	console.log(a);
}