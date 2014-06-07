$(function() {
	$("#signup_btn").click(function(){
		if($("#password_input").val() === $("#password_input2").val()){
			var json_builder = {};
			json_builder.email = $("#email_input").val();
			json_builder.password = $("#password_input").val();
			$.getJSON("http://localhost:9393/new_user", json_builder, function(data){
				if(response[0] === "Email already registred"){
					alert(response);
				}else{
					window.location = "../lobby.html";
				}
			});
		}else{
			alert("passwords don't match");
		}
	});
});