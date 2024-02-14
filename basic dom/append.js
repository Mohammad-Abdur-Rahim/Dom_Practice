// const placelist=document.getElementById('place-list');
// const li = document.createElement('li');
// li.innerText='Gazipur my 2nd Home';
// now list code add parent node--------
// placelist.appendChild(li);


const mainContainer=document.getElementById('main-content');
// console.log(mainContainer);
// Declare what i use in html elements
const h1=document.createElement('h1');
const ul=document.createElement('ul');
const li=document.createElement('li');
const li1=document.createElement('li');
const li2=document.createElement('li');
const li3=document.createElement('li');
const li4=document.createElement('li');

// html elements value assign

h1.innerText='This is js Section create';
li.innerText='React js';
li1.innerText='Node Js';
li2.innerText='Native js';
li3.innerText='Express js';
li4.innerText='Mongo Db';
// Finnaly add append 
mainContainer.appendChild(h1);
mainContainer.appendChild(li);
mainContainer.appendChild(li1);
mainContainer.appendChild(li2);
mainContainer.appendChild(li3);
mainContainer.appendChild(li4);
mainContainer.appendChild(ul);




