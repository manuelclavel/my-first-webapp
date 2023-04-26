const enterButton = document.getElementById("enter_button");

/*
enterButton.addEventListener("click", function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8080/my-first-webapp/test', true);
	xhr.send(null);
})
*/


enterButton.addEventListener("click", function() {

	const xhr = new XMLHttpRequest();
	xhr.open("POST", "http://" + window.location.host + "/my-first-webapp-1.0-SNAPSHOT/test");
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	const body = JSON.stringify({
		"login": document.getElementById("login_input").value
	});
	/*
	xhr.onload = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(JSON.parse(xhr.responseText));
		} else {
			console.log(`Error: ${xhr.status}`);
		}
	};
	*/
	xhr.send(body);
	}
)
