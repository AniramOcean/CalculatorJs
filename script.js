/* DOM */

const display = document.querySelector('#display');

function sayHello (str) {
    console.log('Hello!', str);
    // document.body.style.backgroundColor = 'darkgray';
    // document.querySelector('#title').style.color = '#f1f1f1';
    // document.querySelector('#title').style.fontSize = '100px';
    document.querySelector('#display').value = 'Hello Display';
}

const read = () => display.value[0].toUpperCase() + display.value.slice(1);

addToList = () => {
    let nodeElement = document.createElement('li');
    let textNode = document.createTextNode(read());
    nodeElement.appendChild(textNode);
    document.querySelector('#list').appendChild(nodeElement);
};

const mouseEnter = () => console.log('You entered your mouse');
