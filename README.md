What is this?
=============

This repository represents my own personal preferences for a template when developing a web site. Granted, this version doesn't include my server-side CMS, but its presence here is intended to help out others with a similar desire to be able to pop some commands in through terminal and have a ready-to-code project that already "looks nice".

I have used both [Ruby](https://www.ruby-lang.org/) and [Node](http://nodejs.org) to "watch" my projects while I code them (so that changes to HTML, JavaScript and CSS are shown upon save), and I prefer the Node route. It may just be my own preference, but the important difference with the Node setup is the use of [Grunt](http://gruntjs.com), which allows a host of [easily configured options](http://gruntjs.com/plugins) as well as a goodly amount of support and readables for such options. It's also wicked fast on my Mac OS, which is nice.

So far, this template includes:

* [RequireJS](http://requirejs.org), which helps to control dependencies (e.g., Bootstrap requires jQuery)
* [jQuery](http://jquery.com), which provides a very usable framework for common (and not-so-common) JavaScript tasks
* [SASS](http://sass-lang.com) and [Compass](http://compass-style.org), which both provide clear and development-friendly CSS writing
* [Bootstrap](http://getbootstrap.com), which provides a host of pre-formatted, cross-browser, mobile-friendly styles for common website elements
* [GSAP](http://greensock.com), which not only overrides the default jQuery animate method, but also provides a more robust animation engine.


Installation
============

Global Modules
--------------
```bash
npm install -g grunt-cli
npm install -g bower
```

For Locally-Stored Modules (not preferred)
------------------------------------------
```bash
npm install
```

Or... For Globally-Stored Modules (preferred)
---------------------------------------------
```bash
./setup_global
```

Update Libs
-----------
```bash
bower install
```
