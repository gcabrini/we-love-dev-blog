(function() {

	var headerEl        = document.getElementById('header'),
		headerCtrl      = document.getElementById('header-toggle'),
		headerCloseCtrl = headerEl.querySelector('.close-button');

	function init() {
		menuToggle();
	}

	function menuToggle() {
		headerCtrl.addEventListener('click', function() {
			if (!headerEl.classList.contains('is-open'))
				headerEl.className = headerEl.className + ' is-open';
		});

		headerCloseCtrl.addEventListener('click', function() {
			if (headerEl.classList.contains('is-open'))
				headerEl.classList.remove('is-open');
		});
	}

	init();
})();
