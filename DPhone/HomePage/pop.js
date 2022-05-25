

const pop = document.querySelector('.overlay');

setTimeout(function(){
    pop.classList.add("show-pop");
},2000);

document.querySelector('#close-pop').addEventListener('click',function(){
    pop.classList.remove('show-pop');
    pop.classList.add('hide-pop');
})