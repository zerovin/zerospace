//header scroll
let hamburger = $('header .hamburger'),
    menu = $('header aside');

hamburger.click(function(){
    $(this).toggleClass('open');
    if(!$(this).hasClass('open')){
        menu.removeClass('open');
    }else{
        menu.addClass('open');
    }
});
menu.find('a').click(function(){
    menu.removeClass('open');
    hamburger.removeClass('open');
});

// gsap.to('#banner',{
//     position:'fixed',
//     scrollTrigger: {
//         trigger: "#banner",
//         start: "top top",
//         pin: true,
//         scrub: true
//     }
// });
// gsap.to('.main_tt.first',{
//     x:'0%',duration:0.5,scrollTrigger:{
//     trigger:'#banner',
//     scrub:true,
//     start:'top 20%'
//     }
// });
// gsap.to('.main_tt.second',{
//     x:'0%',duration:0.5,scrollTrigger:{
//     trigger:'#banner',
//     scrub:true,
//     start:'top 20%'
//     }
// });