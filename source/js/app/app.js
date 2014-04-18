require(
  [
    'jquery',
    'bootstrap-sass-official',
    'gsap'
  ],
  function($, _bootstrap, _gsap) {

    'use strict';

    var spiralPulseTween;

    // animation for loader
    var spiralRotateTween = TweenMax.to( $('.spiral'), 1, { ease:Linear.easeNone, rotation: 360, repeat: -1 });
    TweenMax.to( $('.spiral'), 0.5, { ease:Power3.easeOut, opacity: 1, marginTop: -21, onComplete: function() {
        spiralPulseTween = TweenMax.to( $('.spiral'), 0.5, { scaleX: 1.25, scaleY: 1.25, opacity: 0.5, repeat: -1, yoyo: true  });
      } 
    });
    TweenMax.to( $('.spiral-text'), 0.5, { delay: 0.25, ease:Power3.easeOut, opacity: 1, marginTop: 21 });

    // fake span of time for content load
    setTimeout(function() {

      // change loading to complete!
      $('.spiral-text').text("Complete!");

      // complete spiral animation
      spiralRotateTween.pause(0);
      spiralPulseTween.pause(0);

      // ultra glow
      $('.spiral').css({ boxShadow: "0px 0px 50px 4px white" }); // snaps glow to big and white
      TweenMax.to( $('.spiral'), 1, { ease:Linear.easeNone, boxShadow: "0px 0px 50px 4px transparent" }); // animates glow to nothing

      // animation for overlay lift
      TweenMax.to( $('.overlay'), 0.8, { delay: 1, ease:Power3.easeIn, bottom: "100%" });

    }, 5000);

  }
);