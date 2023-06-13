//header scroll
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let scrollAmt = window.scrollY;
    if(scrollAmt > 0){
        header.classList.add('scroll');
    }else if(scrollAmt <= 0){
        header.classList.remove('scroll');
    }
});

gsap.registerPlugin(ScrollTrigger);

let banner = gsap.timeline();
ScrollTrigger.create({
    animation: banner,
    trigger: "#banner",
    start: "top top",
    end: "70% 100%",
    scrub: 1,
});

banner.to(".main_tt.first", { x: -2000 }, 0)