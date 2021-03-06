require.config({
	shim: {
		'bootstrap-sass-official': {
			deps: [
				'modernizr',
				'jquery',
				'bso-affix',
				'bso-alert',
				'bso-button',
				'bso-carousel',
				'bso-collapse',
				'bso-dropdown',
				'bso-modal',
				'bso-popover',
				'bso-scrollspy',
				'bso-tab',
				'bso-tooltip',
				'bso-transition'
			]
		},
		'bso-popover': {
			deps: [
				'bso-tooltip'
			]
		},
		'jquery-gsap': {
			deps: [
				'jquery',
				'gsap'
			]
		}
	},
	baseUrl: 'js/app',
	paths: {
		app: 'app',
		'bso-affix': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix',
		'bso-alert': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert',
		'bso-button': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button',
		'bso-carousel': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel',
		'bso-collapse': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse',
		'bso-dropdown': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown',
		'bso-modal': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal',
		'bso-popover': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover',
		'bso-scrollspy': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy',
		'bso-tab': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab',
		'bso-tooltip': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip',
		'bso-transition': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition',
		'bootstrap-sass-official': '../lib/bootstrap-sass-official/vendor/assets/javascripts/bootstrap',
		'jquery-gsap': '../lib/gsap/src/uncompressed/jquery.gsap',
		'gsap-easepack': '../lib/gsap/src/uncompressed/easing/EasePack',
		gsap: '../lib/gsap/src/uncompressed/TweenMax',
		requirejs: '../lib/requirejs/require',
		modernizr: '../lib/modernizr/modernizr',
		jquery: '../lib/jquery/dist/jquery',
		almond: '../lib/almond/almond'
	}
});

require(['app']);