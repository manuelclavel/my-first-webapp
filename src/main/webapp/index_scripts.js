/**
 * 
 */
// check cookie
function checkCookie() {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status == 302) {
				window.location = 'http://' + window.location.host + '/my-first-webapp/login.html'
				//alert(xhr.responseText);
			} else {
				alert(xhr.responseText);
				var mainDiv = document.getElementById("mainDiv");
				mainDiv.style.display = "block";

			}
		}
	}
	xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp/cookie', true);
	xhr.send(null);
}