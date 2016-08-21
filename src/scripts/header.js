var searchButton = document.getElementById('search__button'),
	searchInput = document.getElementById('search__input'),
	menu = document.getElementById('menu');
	check = true;

searchButton.onclick = function() {
	if (check) {
		menu.style.opacity = '0';
		menu.style.visibility = 'hidden';
		menu.style.zIndex = '0';
		searchInput.style.visibility = 'visible';
		searchInput.style.width = '360px';
		searchInput.value = '';
		check = false;
	}
	else {
		searchInput.style.visibility = 'hidden';
		menu.style.opacity = '1';
		menu.style.visibility = 'visible';
		searchInput.style.width = '0';
		check = true;
	}
};