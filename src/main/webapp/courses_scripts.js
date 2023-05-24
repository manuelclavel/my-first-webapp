// display courses
function displayCourses2(){
	var cookie = getCookie("login");
	alert(parseJwt(cookie));
	
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function parseJwt (token) {
	alert(token);
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
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


