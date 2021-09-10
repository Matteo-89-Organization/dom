const element = document.querySelector('.elemento');
console.log(element);
const elements = document.querySelectorAll('.elemento');
console.log(elements);
const thirdElement = document.getElementById('el3');
console.log(thirdElement);
const lista = document.getElementsByClassName('elemento');
console.log(lista);

const friends = ['Elena', 'Sara', 'Cristina', 'Chiara', 'Fabio', 'Nadia', 'Michele'];
const friendsList = document.querySelector('#listaAmici');

friends.forEach(friend => {
    let singleFriendLine = document.createElement('LI');
    singleFriendLine.innerHTML = `${friend}`;
    friendsList.appendChild(singleFriendLine);
})
