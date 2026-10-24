(function () {
	'use strict';

	// Reveal content once scripts have run (CSS hides nothing critical
	// without this, but the theme's spinner/fade-in keyframes are keyed
	// off the is-preload class being removed).
	window.addEventListener('load', function () {
		document.body.classList.remove('is-preload');
	});

	if ('ontouchstart' in window) {
		document.body.classList.add('is-touch');
	}

	var toggle = document.getElementById('nav-toggle');
	var header = document.getElementById('header');
	var nav = document.getElementById('nav');

	if (!toggle || !header || !nav) return;

	function closeNav() {
		header.classList.remove('nav-open');
		toggle.setAttribute('aria-expanded', 'false');
	}

	function openNav() {
		header.classList.add('nav-open');
		toggle.setAttribute('aria-expanded', 'true');
	}

	toggle.addEventListener('click', function () {
		if (header.classList.contains('nav-open')) {
			closeNav();
		} else {
			openNav();
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && header.classList.contains('nav-open')) {
			closeNav();
			toggle.focus();
		}
	});

	document.addEventListener('click', function (e) {
		if (!header.classList.contains('nav-open')) return;
		if (header.contains(e.target)) return;
		closeNav();
	});

	nav.addEventListener('click', function (e) {
		if (e.target.tagName === 'A') closeNav();
	});
})();
