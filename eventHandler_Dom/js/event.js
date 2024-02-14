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