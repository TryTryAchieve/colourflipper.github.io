const selec=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
let btn=document.getElementById('btn')
let text=document.querySelector('span')
let bg=document.querySelector('main')


btn.addEventListener('click',function(){
    let str='#';
    for(let i=0;i<6;i++){
        str+=selec[randomnum()];
    }
    console.log(str);
    text.innerText=str;
    bg.style.backgroundColor=str;
    

})

function randomnum(){
    return Math.floor(Math.random()*selec.length);
}