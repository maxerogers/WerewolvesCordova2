$(function() {	
	$("#new_game_btn").click(function(){
		$("#new_game_form").show();
		$("#new_game_btn").hide();
		$("#new_game_btn2").click(function(){
			$("#new_game_btn").show();
			$("#new_game_form").html("");
			alert($("#struff").val());
			//I had to do a lot of things for this to work
			//Turns out JSONP always uses a GET so can't use POST or DELETE or etc...
			//To get around this I had to drop JSONP and use just JSON and add 
			//======================
			//before do 
			//	response.headers["Access-Control-Allow-Origin"] = "*"
			//	response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
			//end
			//=====================
			// Into my app.rb sinatra server. This is not secure and will need to figure out away to fix this in the future
			$.post("http://localhost:9393/game",{name: $("#game_name").serialize()});
		});

	$("#sign_out_btn").click(function(){
		$.ajax({
			url: "http://localhost:9393/sign_out",
			type: "POST",
			contentType: "application/json"
		});
	});	

	$.ajax({
		url: "http://localhost:9393/online_users",
		type: "POST",
		dataType: "jsonp",
		contentType: 'application/json',
		accepts: "application/json",
		success: function(response){ 
			var users = jQuery.parseJSON(response);
			users.forEach(function(user){
				$("#players").append("<p>"+user.username+"</p>");
			});
		}
	});
});