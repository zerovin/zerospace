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

gsap.to('#banner',{
    position:'fixed',
    scrollTrigger: {
        trigger: "#banner",
        start: "top top",
        pin: true,
        scrub: true
    }
});
gsap.to('.main_tt.first',{
    x:'0%',duration:0.5,scrollTrigger:{
    trigger:'#banner',
    scrub:true,
    start:'top 20%'
    }
});
gsap.to('.main_tt.second',{
    x:'0%',duration:0.5,scrollTrigger:{
    trigger:'#banner',
    scrub:true,
    start:'top 20%'
    }
});