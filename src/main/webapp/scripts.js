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
	
	xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
    	if (xhr.status == 200){
    		window.location = 'http://localhost:8080/my-first-webapp/'
    	} else {
    		alert(xhr.responseText);
    	}
    }
  }
	
	
	xhr.open("POST", "http://" + window.location.host + "/my-first-webapp/test");
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	const body = JSON.stringify({
		"login": document.getElementById("login_input").value
	});
	
	xhr.onload = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
		
		} else {
			console.log(`Error: ${xhr.status}`);
		}
	};
	
	
	xhr.send(body);
	}
)
