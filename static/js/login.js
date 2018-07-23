
function auth(){
	var _this = this;
	
	/**
	 * set afterRequest interceptor
	 * check response body - if token validation error
	 * 	- clear local storage
	 *  - got to login page
	 */
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
			success : function(response,res){
				cb(response);
			},
			error: function(xhr, textStatus, error){
				alert(xhr.responseJSON.message);
			}
		});
    }
    this.login = function(){
        $('#login_form').on('submit',function(e){
            e.preventDefault();
			var data = {
				username : $('#login_email').val(),
				password : $('#login_pass').val(),
			};
			_this.tryLogin(data);
		});
    }
    this.tryLogin = function(data){
        Post('/auth/login',data,function(res){
			var status = res.status;
			if (status == 200) {
				var token = res.data.access_token;
				 localStorage.setItem("token",token);
				 alert("Yo!")
				 window.location.replace('ambassador')
			}else{
				  alert(res.message);
			  }
        });
	}
}
var Auth = new auth();
$(document).ready(function(){
	Auth.login();
});