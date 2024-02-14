function makered(){
    document.body.style.backgroundColor='red';
}
function makePink(){
    document.body.style.backgroundColor='pink';
}
const purple=document.getElementById('purple');
purple.onclick=function purple(){
    document.body.style.backgroundColor='purple';
}
//addEventListner ------
const pink=document.getElementById('pink');
pink.addEventListener('click',makePink); 
//addEventListner direct function ------
const green=document.getElementById('green');
green.addEventListener('click',function green(){
    document.body.style.backgroundColor='green';
})
//addEventListner Finally use ------
document.getElementById('blue').addEventListener('click', function blue(){
    document.body.style.backgroundColor='blue';
})