const sections=document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border='2px solid black';
    section.style.marginBottom='5px';
    section.style.borderRadius='5px';
    section.style.backgroundColor='lightgray';
}
// const placeContainer=document.getElementById('place-container');
// placeContainer.style.backgroundColor='yellow';
// add and remove class in js dom------------
const placeContainer=document.getElementById('place-container');
 placeContainer.classList.add('text-cenetr');
 placeContainer.classList.remove('text-cenetr');