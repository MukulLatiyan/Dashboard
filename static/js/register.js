function auth(){
    var _this = this;
    function Fetch(url,cb){
		$.ajax({
			url : BASE_URL + url,
			type : 'GET',
			success : function(response){
				cb(response);
			}
		});
	}
	function Post(url,data,cb){
		$.ajax({
			url : BASE_URL + url,
			type : 'POST',
			contentType:'application/json; charset=UTF-8',
			data : JSON.stringify(data),
			processData : false,
			success : function(response){
				cb(response);
				alert('You have been registered')
				window.location.replace('login')
			}
		});
    }
    this.register = function(){
        $('#register_form').on('submit',function(e){
            e.preventDefault();
             var now = new Date();
             var jsonDate = now.toJSON();
			var data = {
				username : $('#register_email').val(),
                password : $('#register_pass').val(),
                creationdate : String(jsonDate).substring(0,19)
            };
            console.log(JSON.stringify(data));
			_this.tryRegister(data);
		});
    }
    this.tryRegister = function(data){
        Post('/auth/register',data,function(res){
            console.log(res);
        });
	}
}
var Auth = new auth();
$(document).ready(function(){
	Auth.register();
});