//const container = document.querySelector('#container');


//const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = 'Hello Upskilling World!!!';

//const para = document.createElement('p');
//para.setAttribute('style', 'color: red;')
//para.textContent = 'Hey I\'m red!'

//const title = document.createElement('h3');
//title.setAttribute('style', 'color: blue;');
//title.textContent = 'I\'m a blue h3!'

//const subDiv = document.createElement('div');
//subDiv.setAttribute('style', 'padding: 6px; border: solid black; background: pink;');

//const subTitle = document.createElement('h1');
//subTitle.textContent = 'Im in a div';

//const subPara = document.createElement('p');
//subPara.textContent = 'ME TOO';

//subDiv.appendChild(subTitle);
//subDiv.appendChild(subPara);




//container.appendChild(content);
//container.appendChild(para);
//container.insertBefore(title, content);
//container.appendChild(subDiv);

//const btn = document.querySelector('#btn');
//btn.onclick = () => alert('Hello Upskilling World!!!');
//const butn = document.querySelector('#butn');
//butn.addEventListener('click', () => {
 //   alert('Hello Upskilling World!!!');
//});

//function alertFunction() {
 //   alert('YAY! I DID IT!');
//}

//btn.onclick = alertFunction;
//btn.addEventListener('click', alertFunction);
//const bttn = document.querySelector('#bttn');
//bttn.addEventListener('click', function (e) {
//    e.target.style.background = 'blue';
//});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});