document.getElementById('btn-post').addEventListener('click',function(){
    const input = document.getElementById('text-input');
    const newinput =input.value;
    //set the value-------
    const commentContainer=document.getElementById('comment-container');
    const p=document.createElement('p');
    p.innerText=newinput;
    commentContainer.appendChild(p);

  
});