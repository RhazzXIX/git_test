const myHeading = document.querySelector('h1');



function multiply(num1, num2) {
    let result = num1 * num2;
     return(result);
}

document.querySelector('html')
    .addEventListener('click', () => {
        myHeading.textContent = 'Hello Up-Skilling World!'
    });

const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySRC = myImage.getAttribute('src');
    if (mySRC === './image/a5af578ee61164da9e437fe6a3391d44.jpg') {
        myImage.setAttribute('src', './image/samurai proverb.jpg');
        myImage.setAttribute('alt', 'Samurai Image with proverb');
    } else { 
        myImage.setAttribute('src', './image/a5af578ee61164da9e437fe6a3391d44.jpg');
        myImage.setAttribute('alt', 'Taurus Zodiac Image')
    }
};

variableNoLet = 'test';

let variable = 'test2';

let objTest = {
    fname: 'John',
    lname: 'Doe', 
    age: '30',
};

let array1 = [
    'test',
    'this',
    2, 
    'array',
]

function greeting () {
    alert('Hello Up-skilling World!');
}

let obj2 = {
    greetings: 'Hello Up-skilling World!',
    func: function () {
        return alert(this.greetings);
    },
};


let testProto = {
    age: 33,
    fname: 'jhek',
    lname: 'jay',
};

let testObj = {
    vessel: 'breeze'
};

