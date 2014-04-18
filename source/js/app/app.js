require(
  [
    'jquery',
    'bootstrap-sass-official'
  ],
  function($, _bootstrap) {

    'use strict';

    console.log("this is running correctly.");

    // added jquery check
    $('body').append("<p>jQuery is loaded.</p>");

  }
);