function auth(){
    var _this = this;
    function Fetch(url,cb){
		$.ajax({
			url : BASE_URL + url,
			type : 'GET',
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer '+ localStorage.token);
			},
			success : function(response){
				cb(response);
			},
			error: function(res){
				cb(res.responseJSON)
				console.log('Unable to logout')
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
    this.logout = function(){
        $('#logout_button').on('click',function(res){
			res.preventDefault();
            // var token = res.data.access_token;
            localStorage.clear();
			_this.tryRegister();
		});
    }
    this.tryRegister = function(){
        Fetch('/auth/logout',function(){
            window.location.replace('login');
        });
	}
}
var Auth = new auth();
$(document).ready(function(){
	Auth.logout();
});