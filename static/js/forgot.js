function res(){
    var _this = this;
    function Fetch(url,cb){
		$.ajax({
			url : BASE_URL + url,
			type : 'GET',
			processData : false,
			contentType:'application/json; charset=UTF-8',
			success : function(response){
				cb(response);
				alert('Visit your email')
				window.location.replace('login')
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
			}
		});
    }
    this.register = function(){
        $('#forgot_form').on('submit',function(e,url){
            e.preventDefault();
			username = $('#forgot_email').val()
			_this.tryRegister(username);
		});
    }
    this.tryRegister = function(username){
        Fetch('/auth/resetpassword/' + username,function(){
			console.log('/auth/resetpassword/' + username);
        });
	}
}
var Res = new res();
$(document).ready(function(){
	Res.register();
});