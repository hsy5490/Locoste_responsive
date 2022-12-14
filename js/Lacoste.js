'use strict';

// header fixed scroll color white
const header=document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
});

// slider banner
const showing_class="showing";
const firstSlide=document.querySelector(".main_banner2:first-child");
function slide(){
  const currentSlide=document.querySelector(`.${showing_class}`);
  if(currentSlide){
    currentSlide.classList.remove(showing_class);
    const nextSlide=currentSlide.nextElementSibling;
    if(nextSlide){
      nextSlide.classList.add(showing_class);
    }else{
      firstSlide.classList.add(showing_class);
    }
  }else{
    firstSlide.classList.add(showing_class);
  }
}
slide();
setInterval(slide,2000)

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

// video play
const video = $('#l005_video');
const btn = $('#l005_btn');
btn.click(function(){
    /* 초기값 = video(paused) | button(play) */
    // video가 paused 상태면
    if(video.get(0).paused){
        // play() = Video Play
        $('#l005_video').get(0).play();
        // button paused 폰트어썸으로 바꿔라
        $('#l005_btn').html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{
        // pause() = Video Pause
        $('#l005_video').get(0).pause();
        // button play 폰트어썸으로 바꿔라
        $('#l005_btn').html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

// hamburger
const navbarMenu = document.querySelector('.gnb_menu');
const navbarToggleBtn = document.querySelector(".gnb_toggle-btn");
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})