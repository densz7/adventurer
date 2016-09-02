var headerButton = document.querySelector('.header__button'),
	headerShow = document.querySelector('.header__show'),
	headerClose = document.querySelector('.header__close'),
	search = document.querySelector('.search'),
	searchInput = document.querySelector('.search__input'),
	menu = document.getElementById('menu');
	check = true;

headerButton.onclick = function() {
	if (check) {
		headerShow.style.opacity = '0';
		headerClose.style.opacity = '1';
		search.style.opacity = '1';
		search.style.visibility = 'visible';
		search.style.transform = 'translateY(0)';
		menu.style.visibility = 'hidden';
		menu.style.opacity = '0';
	}
	else {
		headerShow.style.opacity = '1';
		headerClose.style.opacity = '0';
		search.style.opacity = '0';
		search.style.visibility = 'hidden';
		search.style.transform = 'translateY(-450px)';
		searchInput.value = '';
		menu.style.visibility = 'visible';
		menu.style.opacity = '1';
	}

	check = !check;
};