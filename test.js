/* DOM */

const disp = document.querySelector('#disp');

function sayHello (str) {
    console.log('Hello!', str);
    // document.body.style.backgroundColor = 'darkgray';
    // document.querySelector('#title').style.color = '#f1f1f1';
    // document.querySelector('#title').style.fontSize = '100px';
    document.querySelector('#disp').value = 'Hello Display';
}

const read = () => disp.value[0].toUpperCase() + disp.value.slice(1);

const addToList = () => {
    const nodeElement = document.createElement('li');
    const textNode = document.createTextNode(read());
    nodeElement.appendChild(textNode);
    document.querySelector('#list').appendChild(nodeElement);
};

const mouseEnter = () => console.log('You entered your mouse');


