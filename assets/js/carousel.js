(function () {
	'use strict';

	var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function setUpCarousel(el) {
		var images;
		try {
			images = JSON.parse(el.getAttribute('data-images'));
		} catch (e) {
			return;
		}
		if (!images || !images.length) return;

		var img = el.querySelector('.photo-carousel__image');
		var prev = el.querySelector('.photo-carousel__prev');
		var next = el.querySelector('.photo-carousel__next');
		var interval = parseInt(el.getAttribute('data-interval'), 10) || 6000;
		var index = 0;
		var timer = null;

		function show(i) {
			index = (i + images.length) % images.length;
			img.src = images[index];
		}

		function start() {
			if (reduceMotion || images.length < 2) return;
			stop();
			timer = setInterval(function () { show(index + 1); }, interval);
		}

		function stop() {
			if (timer) {
				clearInterval(timer);
				timer = null;
			}
		}

		if (prev) prev.addEventListener('click', function () { show(index - 1); start(); });
		if (next) next.addEventListener('click', function () { show(index + 1); start(); });

		el.addEventListener('mouseenter', stop);
		el.addEventListener('mouseleave', start);
		el.addEventListener('focusin', stop);
		el.addEventListener('focusout', start);

		start();
	}

	document.querySelectorAll('.photo-carousel').forEach(setUpCarousel);
})();
