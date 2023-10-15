'use strict'
const input=document.querySelector('.input');
const body=document.querySelector('body');
const btn=document.querySelector('.btn')

const color=function(e){
    e.preventDefault;
    body.style.backgroundColor=input.value;
    input.style.color=input.value;
}
input.addEventListener('input',color)
 