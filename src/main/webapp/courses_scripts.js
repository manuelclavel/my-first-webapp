// display courses
function displayCourses() {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status == 302) {
				window.location = 'http://' + window.location.host + '/my-first-webapp-1.0-SNAPSHOT/login.html'
			} else if (xhr.status == 200) {
				var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
				// Insert a row at the end of the header
				var newHeaderRow = theaderRef.insertRow();
				var newHeaderCell = document.createElement("TH");
				newHeaderCell.innerHTML = "Courses";
				newHeaderRow.appendChild(newHeaderCell);

				var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
				var coursesArray = JSON.parse(xhr.responseText);

				for (let i = 0; i < coursesArray.length; i++) {
					// Insert a row at the end of table
					var newCourseRow = tbodyRef.insertRow();
					// Insert a cell at the end of the row
					var newCourseCodeCell = newCourseRow.insertCell();
					// Append a text node to the cell
					var newCourseCode = document.createTextNode(coursesArray[i].code);
					newCourseCodeCell.appendChild(newCourseCode);
					// Insert a cell at the end of the row
					var newCourseNameCell = newCourseRow.insertCell();
					// Append a text node to the cell
					var newCourseName = document.createTextNode(coursesArray[i].name);
					newCourseNameCell.appendChild(newCourseName);
				}

			} else {
				alert(xhr.status + " : " + xhr.responseText);

			}
		}
	}

	xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp-1.0-SNAPSHOT/courses', true);
	xhr.send(null);
}


