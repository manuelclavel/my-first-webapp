/**
 * 
 */
// show menu
function showMenu() {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status == 302) {
				alert(xhr.responseText);
				window.location = 'http://' + window.location.host + '/my-first-webapp-1.0-SNAPSHOT/login.html'
				
			} else if (xhr.status = 200){
				//alert(xhr.responseText);
				let cookie = getCookie("login");
				let login = parseJwt(cookie).login;
				var role = parseJwt(cookie).role;
				let greetingLabel = document.getElementById("greeting_label");
				greetingLabel.innerHTML = "<b> Welcome back " + login + "!" + "</b>";
				let menuList = document.getElementById("menu_list");
				if (role == "teacher"){
					let menuItem = document.createElement("li");
					let menuItemLink = document.createElement("a");
					menuItemLink.setAttribute("href", "courses_teacher.html");
					menuItemLink.innerHTML = "Courses";
					menuItem.appendChild(menuItemLink);
					menuList.append(menuItem);
				} else if (role == "student"){
					let menuItem = document.createElement("li");
					let menuItemLink = document.createElement("a");
					menuItemLink.setAttribute("href", "courses_student.html");
					menuItemLink.innerHTML = "Courses";
					menuItem.appendChild(menuItemLink);
					menuList.append(menuItem);
				}
				//var mainDiv = document.getElementById("mainDiv");
				//mainDiv.style.display = "block";
			} else {
				alert("Error: unexpected state")
			}
		}
	}
	xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp-1.0-SNAPSHOT/cookie', true);
	xhr.send(null);
}
