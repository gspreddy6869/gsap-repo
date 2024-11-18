function page1Animation(){
var t1=gsap.timeline()

t1.from("#nav1 i,#nav1 p,#nav2 a ,#nav2 button",{
    y:-40,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.15,
})

t1.from("#left-part h1",{
    x:-500,
    opacity:0,
    duration:0.4,

},"-=0.3")
t1.from("#left-part p",{
    x:-500,
    opacity:0,
    duration:0.4,

})
t1.from("#left-part-2 button",{
    x:-500,
    opacity:0,
    duration:0.4,

})
t1.from("#img img",{
    x:200,
    opacity:0,
    duration:0.5,

},"-=0.7")
t1.from("#sec-1 img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6,
})
}



function page2Animation(){
var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec-2",
        scroller: "body",
        start: "top 50%",
        end: "top -60%",
       
        scrub: 2, 
    }
});

t2.from("#sec-2", {
    y: 30,
    opacity: 0,
    duration: 0.5,
});

// Group animations by labels to keep them synchronized with scrub
t2.from("#sec-3 #first", {
    x: -300,
    opacity: 0,
    duration: 1,
}, "goli");

t2.from("#sec-3 #second", {
    x: 300,
    opacity: 0,
    duration: 1,
}, "goli");

t2.from("#sec-3 #third", {
    x: -300,
    opacity: 0,
    duration: 1,
}, "goli1");

t2.from("#sec-3 #fourth", {
    x: 300,
    opacity: 0,
    duration: 1,
}, "goli1");

// For #five and #six, use the next label without `+=1`
t2.from("#sec-3 #five", {
    x: -300,
    opacity: 0,
    duration: 1,
}, "shiva");

t2.from("#sec-3 #six", {
    x: 300,
    opacity: 0,
    duration: 1,
}, "shiva");
}





    

page1Animation()
page2Animation()