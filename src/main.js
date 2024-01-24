'use strict';

//Header 헤더 투명으로 적용 후 브라우저 스크롤시 헤더높이 만큼 도달했을때 스타일적용 
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

//브라우저 스크롤시 홈-컨텐츠 높이에 따른 동적으로 투명하게 처리
const home =  document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//브라우저 스크롤시 홈높이의 절반 정도 지났을때 화살표 아이콘 숨기기 
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight / 2) {
        arrow.style.opacity = 1;
    } else {
        arrow.style.opacity = 0;
    }
});

//**미디어 상태일때 메뉴 대신 토글버튼 적용
const navbarMenu = document.querySelector('.header__menu');
const menuToggle = document.querySelector('.menu__toggle');
menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});


//헤더메뉴 아이템 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
});