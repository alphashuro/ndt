$(function() { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

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

    function pathPrepare ($el) {
      var lineLength = $el[0].getComputedTextLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
    }

    var $servicesHeader = $("#services-header");
    var $serviceSlides = $("#service-slides");

    pathPrepare($servicesHeader);

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .to($servicesHeader, 1, {strokeDashoffset: 0, ease:Linear.easeNone})
      .to($servicesHeader, 0.5, {fillOpacity: 1}, "-=0.5")
      .fromTo($serviceSlides, 1, {opacity: 0}, {opacity: 1}, "-=1")
      .fromTo($serviceSlides, 1, {y: 100}, {y: 0}, "-=1")
      // .to("#services .section-header p", 0.5, { opacity: "0" })
      // .fromTo("#service")
      .to("#service-slides", 0.5, {z: -150})    // move back in 3D space
      .to("#service-slides", 1,   {x: "-33.3%"})  // move in to first panel
      .to("#service-slides", 0.5, {z: 0})       // move back to origin in 3D space
      // animate to third panel
      .to("#service-slides", 0.5, {z: -150, delay: 1})
      .to("#service-slides", 1,   {x: "-66.6%"})
      .to("#service-slides", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#services",
            triggerHook: "onLeave",
            duration: "500%",
            reverse: true,
            // offset: "50"
        })
        .setPin("#services")
        .setTween(wipeAnimation)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});
