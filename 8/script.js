
var timeout;


// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main data-scroll-container'),
//   smoothMobile: true
// });

// scroll.on('scroll', (args) => {
//   if (args.currentElements['data-scroll-container']) {
//     const container = args.currentElements['data-scroll-container'];
//     // Perform actions with the container
//   }
// });


function firstPageAnime() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: "expo.inOut",
  })
  .to(".boundingelem", {
    y: 0,
    ease: "expo.inOut",
    duration: 2,
    delay: -1,
    stagger: 0.2,
  })
  .fromTo("#herofooter", {
    opacity: 0
  }, {
    y: -10,
    opacity: 1,
    duration: 1,
    delay: 0,
    ease: "expo.inOut",
  });
}
    
var timeout;

function circleMotion() {
    //define default scale value
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", (dets) => {

      clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev)

        yprev = dets.clientY
        xprev = dets.clientX

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout( () => {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        }, 100)

    })
}

circleMotion();



  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(dets)  {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
  }


  firstPageAnime();


  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrent = 0;

    elem.addEventListener("mouseleave", function(dets) {
      gsap.to(elem.querySelector("img"), {
        opacity:0,
        ease: "power1",
        duration:.3,
      })
    })

    elem.addEventListener("mousemove", function(dets) {
     var diff = dets.clientY - elem.getBoundingClientRect().top
     diffrent = dets.clientX - rotate;
     rotate = dets.clientX;

    //  gsap.utils.clamp(-20,20, diff)

      gsap.to(elem.querySelector("img"), {
        opacity:1,
        // ease:power1,
        ease: "power1.bounce",
        top: diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-20,20, diffrent * .5),

      })
    })
  })




