const timeline = gsap.timeline();
timeline.from(".containner span",1.5,{
    delay:.5,
    skewX:-10,
    skewY:10,
    stagger:.4,
    y:50,
    x:-20,
    opacity:0
})
timeline.from('.img',1,{
    Y:-100,
    opacity:0,
    stagger:.2
})
gsap.timeline({
    scrollTrigger:{
        trigger: 'containner',
        start:'top top',
        scrub:1
    }
})
.to('overlay',{
    height:"110%",ease:Expo.easeOut
},'start')
.to('.img',{
    boxShadow:"0px 0px 0px #000",ease:Expo.easeOut
},'start')

gsap.timeline({
    scrollTrigger:{
        trigger: '.wrap',
        scrub:8
    }
})
.to('.slider',1,{
    x:innerWidth * -1
})