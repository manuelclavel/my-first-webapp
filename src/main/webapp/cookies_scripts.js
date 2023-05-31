/**
 * 
 */
$(document).ready(function() {
	


	$("#go_cookies_for_ever").click(function() {
		var timestamp = Date.now()
		$.ajax({
			type: 'GET',
			url: "rest/cookiesforever/" + timestamp + "?time=" + timestamp,
			success: function() {

			}
		});

	})
	
	

	$("#go_servlet1").click(function() {
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://www.tanbinhtech.com/mycookies/servlet1', true);
		xhr.withCredentials = true;
		xhr.send(null);
		})
		
	$("#go_servlet1b").click(function() {
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://www.tanbinhtech.com/mycookies/servlet1b', true);
		xhr.withCredentials = true;
		xhr.send(null);
		})
		
	$("#go_servlet2").click(function() {
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://www.tanbinhtech.com/mycookies/servlet2', true);
		xhr.withCredentials = true;
		xhr.send(null);
		})
		
	$("#go_servlet3").click(function() {
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://www.tanbinhtech.com/mycookies/servlet3', true);
		xhr.withCredentials = true;
		xhr.send(null);
		})
})


		//var timestamp = Date.now()
		//$.ajax({
		//	type: 'GET',
		//	url: "https://www.tanbinhtech.com/mycookies/servlet1",
			
		//	success: function(data,status,xhr) {
		//		console.log(xhr.getAllResponseHeaders());
		//		var cookie = Cookies.get("badcookies")
		//		if (cookie) {
		//			alert("COOKIE RECIEVED")
		//		} else {
		//			alert("NO COOKIE")
		//		}
		//	}
		//})})
		
		//} 
		//) 