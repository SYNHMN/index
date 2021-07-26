// Theme switcher
let switcher = document.getElementById('switch_theme');

localStorage.getItem('theme') === 'dark' ? darkTheme() : lightTheme();

switcher.onclick = () => switcher.checked ? darkTheme() : lightTheme();

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('theme', 'dark');
	document.body.setAttribute('theme', 'dark');
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('theme', 'light');
	document.body.removeAttribute('theme');
}

/*
// Automatic theme change depending on the time of day
let hour = new Date().getHours();
hour >= 17 || hour < 6 ? darkTheme() : lightTheme();
*/