document.getElementById('convert-c-to-f').addEventListener('click', function() {
	var celsius = document.getElementById('celsius').value;
	var fahrenheit = (celsius * 9/5) + 32;
	document.getElementById('result').innerText = celsius + '°C is equal to ' + fahrenheit + '°F';
});

document.getElementById('convert-f-to-c').addEventListener('click', function() {
	var fahrenheit = document.getElementById('fahrenheit').value;
	var celsius = (fahrenheit - 32) * 5/9;
	document.getElementById('result').innerText = fahrenheit + '°F is equal to ' + celsius + '°C';
});
