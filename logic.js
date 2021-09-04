let elem=document.querySelector('span')
let bg=document.body
let text=document.querySelector('main')
const btn=document.getElementById('btn')



// For only two colurs red and aqua
// btn.addEventListener('click',function(){
//     if (elem.innerText=='aqua'){
//         elem.innerText='red';
//         bg.style.backgroundColor='red';
//     }else{
//         elem.innerText='aqua';
//         bg.style.backgroundColor='aqua';
//     }
// })



const colors=['red','blue','yellow','green','pink']
function randomnum(){
    return Math.floor(Math.random()*5);
}
btn.addEventListener('click',function(){
    let n=randomnum();
    elem.innerText=colors[n];
    bg.style.backgroundColor=colors[n];
    if(elem.innerText=='pink' || elem.innerText=='yellow'){
        text.style.fontSize='25px';
        text.style.color='black';
    }else{
        text.style.fontSize='15px';
        text.style.color='white';
    }
})