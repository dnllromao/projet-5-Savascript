// DOM

// Télécharger fichier "file.zip"
// Utiliser fonctions apprises pour modifier le DOM :
// Crée des éléments, ajoute les au DOM (h4, p, li, th, td)
// Ajouter des classes (regarde le fichier css)
// Supprimer des classes (que ce soit plus joli)
// Ajouter la classe "shadow" à tous les paragraphes

let h4 = document.createElement('h4');
h4.innerText = 'Je suis une table';

let p = document.createElement('p');
p.innerText = 'Ceci es un lorem'	; // can i do it in one line ?

let li = document.createElement('li');
li.innerText = 'List line';

let th = document.createElement('th');
th.innerText = 'Table title';

let td = document.createElement('td');
td.innerText = 'Line title';

var h4Dom = document.querySelector('.container').insertBefore(h4, document.querySelector('table') );
// did find how to insert after ?
document.querySelector('.container').insertBefore(p, document.querySelector('table') );

document.getElementsByTagName('ul')[0].appendChild(li);
document.getElementsByTagName('ul')[0].append(li);
// Differences to Node.appendChild():
// ParentNode.append() allows you to also append DOMString object, whereas Node.appendChild() only accepts Node objects.
// ParentNode.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// ParentNode.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

document.getElementsByTagName('tr')[0].appendChild(th);
console.log(document.getElementsByTagName('tr')[0].nextElementSibling);
document.getElementsByTagName('tr')[0].nextElementSibling.appendChild(td);

document.getElementById('first-paragraph').classList.remove('bg-lime');
let paragh = document.querySelectorAll('.container > p');
console.log(paragh);

paragh.forEach(function(el, key) {
	console.log(el);
	el.classList.add('shadow');
});
