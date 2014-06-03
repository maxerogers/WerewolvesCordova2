$(function() {
	$("#signup_btn").click(function(){
		if($("#password_input").val() === $("#password_input2").val()){
			var json_builder = {};
			json_builder.email = $("#email_input").val();
			json_builder.password = $("#password_input").val();
			$.ajax({
				url: "http://localhost:9393/new_user",
				type: "GET",
				dataType: "jsonp",
				contentType: 'application/json',
				data: json_builder,
				accepts: "application/json",
				success: function(response){ 
					if(response[0] === "Email already registred"){
						alert(response);
					}else{
						window.location = "../lobby.html";
					}
				}
			});
		}else{
			alert("passwords don't match");
		}
	});
});