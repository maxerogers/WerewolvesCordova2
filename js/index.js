$(function() {
    $("#signin_btn").click(function(){
        if($("#password_input").val() !== 0 && $("#email_input").val() !== 0){
            var json_builder = {};
            json_builder.email = $("#email_input").val();
            json_builder.password = $("#password_input").val();
            $.ajax({
                url: "http://localhost:9393/login_user",
                type: "GET",
                dataType: "jsonp",
                contentType: 'application/json',
                data: json_builder,
                accepts: "application/json",
                success: function(response){
                    alert(response);
                }
            });
        }else{
            alert("Please enter your email and password");
        }
    });
});