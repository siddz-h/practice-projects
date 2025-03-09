var tl = gsap.timeline();

function page1animation() {
    tl.from("nav h1, nav h4, nav button", {
        y:-10,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0.1,
    })
    tl.from(".center-part1 h1", {
        y:-300,
        opacity:0,
        duration:0.7,
    }, "anime3")
    tl.from(".center-part1 p", {
        y:-100,
        opacity:0,
        duration:0.4,
    }, "anime4")
    tl.from(".center-part1 button", {
        y:100,
        opacity:0,
        duration:0.3
    }, "anime4")
    tl.from(".center-part2 img", {
        opacity:0,
        duration:0.7,
        x:300,
    }, "anime3")

}

function page2animation() {
    
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:".section2",
        scroller:"body",
        scrub:2,
        start:"top 70%",
        end:"bottom 120%"
    }
})
tl2.from(".section1bottom img", {
    opacity:0,
    y:30,
    duration:0.3,
    stagger:0.1,
})


tl2.from(".services ", {
    y:30,
    opacity:0,
    duration:0.2,

})
tl2.from(".elem.line1.left", {
    x:-300,
    opacity:0,
    duration:0.8,
}, "anime")
tl2.from(".elem.line1.right", {
    x:300,
    opacity:0,
    duration:0.8,
}, "anime")

tl2.from(".elem.line2.left", {
    x:-300,
    opacity:0,
    duration:0.8,
}, "anime1")
tl2.from(".elem.line2.right", {
    x:300,
    opacity:0,
    duration:0.8,
}, "anime1")

}
page1animation();
page2animation();

