# dom
DOM 

HTML, CSS e JavaScript sono i linguaggi che il nostro browser comprende. 
Per agganciare gli elementi del DOM, selezioniamo gli elementi tramite tag, classi e id.

------------

id=" " > retituisce un oggetto

document.getElementById('....');

document.querySelector('#....');

document.querySelector('.nomeClass'); -> nonostante sia una classe, ritorna un oggetto in quanto seleziona soltanto la prima delle classi con lo stesso nome di class

 accedi tramite dot notation come per gli oggetti

--------------

class=" " > restituisce un array e per manipolare questi elementi

document.getElementsByClassName('nomeClass');

document.getElementByTag('nomeTag');

document.querySelectorAll('.nomeClass'); -> ritorna la nodeList = array di elementi (esempio i link di una navbar)

 accedi tramite indice o un ciclo per iterare

--------------

Scarica il file index.html e script.js verifica in console le varie differenze!!
