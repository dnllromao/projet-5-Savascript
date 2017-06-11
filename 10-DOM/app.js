// DOM

// Télécharger fichier "file.zip"
// Utiliser fonctions apprises pour modifier le DOM :
// Crée des éléments, ajoute les au DOM (h4, p, li, th, td)
// Ajouter des classes (regarde le fichier css)
// Supprimer des classes (que ce soit plus joli)
// Ajouter la classe "shadow" à tous les paragraphes

let h4 = document.createElement('h4');
h4.innerText = 'Je suis une table';
h4.id = "table-heading";

let p = document.createElement('p');
//p.appendChild()
p.innerText = 'Ceci es un lorem'; // can i do it in one line ?

let li = document.createElement('li');
li.innerHtml = '<a href="">List line</a>';

let th = document.createElement('th');
th.innerText = 'Table title';

let td = document.createElement('td');
td.innerText = 'Line title';

h4 = document.getElementsByClassName('container')[0].appendChild(h4);

p = h4.parentNode.appendChild(p);
p.classList.add('bg-fuchsia');

/*
// create function, it expects 2 values.
function insertAfter(newElement,targetElement) {
    // target is what you want it to go after. Look for this elements parent.
    var parent = targetElement.parentNode;

    // if the parents lastchild is the targetElement...
    if (parent.lastChild == targetElement) {
        // add the newElement after the target element.
        parent.appendChild(newElement);
    } else {
        // else the target has siblings, insert the new element between the target and it's next sibling.
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
*/

document.getElementsByTagName('ul')[0].appendChild(li);
//document.getElementsByTagName('ul')[0].append(li);
// Differences to Node.appendChild():
// ParentNode.append() allows you to also append DOMString object, whereas Node.appendChild() only accepts Node objects.
// ParentNode.append() has no return value, whereas Node.appendChild() returns the appended Node object.
// ParentNode.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

th = document.querySelector('tr').appendChild(th);;
td = document.getElementsByTagName('tr')[1].appendChild(td);

document.getElementById('first-paragraph').classList.remove('bg-lime');

let paragphs = document.querySelectorAll('.container > p');

paraghs.forEach(function(el, key) {
	console.log(el);
	el.classList.add('shadow');
});
