// display courses

function displayCourses() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status == 302) {
				window.location = 'http://' + window.location.host + '/my-first-webapp/login.html'
			} else {
				alert(xhr.responseText);
				var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
				// Insert a row at the end of the header
				var newHeaderRow = theaderRef.insertRow();
				// Insert a cell at the end of the new  row
				//var newHeaderCell = newHeaderRow.insertCell();
				// Append a text node to the new cell
				//var newHeaderText = document.createTextNode('Courses');
				//newHeaderCell.appendChild(newHeaderText);
				var newHeaderCell = document.createElement("TH");
				newHeaderCell.innerHTML = "Courses";
				newHeaderRow.appendChild(newHeaderCell);

				var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
				// Insert a row at the end of table
				var newBodyRow = tbodyRef.insertRow();
				// Insert a cell at the end of the row
				var newBodyCell = newBodyRow.insertCell();
				// Append a text node to the cell
				var newBodyText = document.createTextNode('Cloud Computing');
				newBodyCell.appendChild(newBodyText);
			}
		}
	}

	xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp/cookie', true);
	xhr.send(null);
}


// login

const enterButton = document.getElementById("enter_button");

enterButton.addEventListener("click", function() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status == 200) {
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
