$(function() { // wait for document ready
    // init
    // var controller = new ScrollMagic.Controller();

    // define movement of panels
    // var wipeAnimation = new TimelineMax()
    //     .fromTo("#services .service.non-destructive", 1, {
    //         "background-position": "-50px"
    //     }, {
    //         "background-position": "50px",
    //         ease: Linear.easeNone
    //     })
    //     .fromTo("#services .service.heat-treatment", 1, {
    //         "background-position": "-50px"
    //     }, {
    //         "background-position": "0px",
    //         ease: Linear.easeNone
    //     })
    //     .fromTo("#services .service.sand-blasting", 1, {
    //         "background-position": "-100%"
    //     }, {
    //         "background-position": "0%",
    //         ease: Linear.easeNone
    //     }) // in from left

    // function pathPrepare ($el) {
    //   var lineLength = $el[0].getComputedTextLength();
    //   $el.css("stroke-dasharray", lineLength);
    //   $el.css("stroke-dashoffset", lineLength);
    // }
    //
    // var $serviceSlides = $("#service-slides");
    //
    // pathPrepare($servicesHeader);
    //
    // // define movement of panels
    // var wipeAnimation = new TimelineMax()
    //   .fromTo($serviceSlides, 1, {opacity: 0}, {opacity: 1}, "-=1")
    //   .fromTo($serviceSlides, 1, {y: 100}, {y: 0}, "-=1")
    //   .to($serviceSlides, 0.5, {z: -150})    // move back in 3D space
    //   .to($serviceSlides, 1,   {x: "-33.3%"})  // move in to first panel
    //   .to($serviceSlides, 0.5, {z: 0})       // move back to origin in 3D space
    //   // animate to third panel
    //   .to($serviceSlides, 0.5, {z: -150, delay: 1})
    //   .to($serviceSlides, 1,   {x: "-66.6%"})
    //   .to($serviceSlides, 0.5, {z: 0});
    //
    // // create scene to pin and link animation
    // new ScrollMagic.Scene({
    //         triggerElement: "#services",
    //         triggerHook: "onLeave",
    //         duration: "500%",
    //         reverse: true,
    //         // offset: "50"
    //     })
    //     .setPin("#services")
    //     .setTween(wipeAnimation)
    //     // .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
});
