const navIcon = document.querySelector('.nav-icon');
const sideNav = document.querySelector('.side-nav');
const burgerLine1 = document.querySelector('.burgerLine1');
const bannerImage = document.querySelector('.banner-left img');
$(window).scroll(function() {
    let wScroll = $(this).scrollTop();
    
    $(".banner-left img").css({
        transform: "translate(0%, " + wScroll / 45 + "%)"
      });
})


navIcon.addEventListener('click', ()=> {
    let width = sideNav.offsetWidth / 2 + 'px';
    navIcon.classList.toggle('nav-icon-active');
    sideNav.classList.toggle('side-nav-active');
    bannerImage.classList.toggle('greyscaleImg')
    if(sideNav.classList.contains('side-nav-active')) {
        navIcon.style.transform = `translateX(${width}) rotate(90deg)`
        burgerLine1.style.width = '40px'
    } else {
        navIcon.style.transform = 'translateX(0) rotate(0deg)'
        burgerLine1.style.width = '30px'
    }
    // sideNav.style.display = "none"
    // console.log(width)
})