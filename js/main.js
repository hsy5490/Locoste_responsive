'use strict';

// header fixed scroll color white
const header=document.querySelector("#nav");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('nav-dark');
    } else {
        header.classList.remove('nav-dark');
    }
});

// slider banner
const main_bnr = document.querySelectorAll('.banner a')
let num = 0
console.log(main_bnr)
setInterval(function(){
    for(let j of main_bnr){j.style.opacity='0'}
    num++
    if(num>1){num=0}
    main_bnr[num].style.opacity='1'
},3000)

// best item tab
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    // console.log(target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    });
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    target.classList.add('active')
    tab.classList.add('active')
  })
})

// hamburger
const menu = document.querySelector('.gnb_center');
const icon = document.querySelector('.icon');
const ham= document.querySelector(".gnb_toggle-btn");

ham.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  icon.classList.toggle('active');
})