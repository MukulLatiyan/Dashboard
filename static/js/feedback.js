function feed(){
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
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer '+ localStorage.token);
			},
			data : JSON.stringify(data),
			processData : false,
			success : function(response){
				cb(response);
			}
		});
    }
    this.feedback = function(){
        $('#feedback_form').on('submit',function(e){
			e.preventDefault();
			var now = new Date();
            var jsonDate = now.toJSON();
			var data = {
                title : $('#feedback_title').val(),
				content : $('#feedback_content').val(),
				userid : localStorage.userid,
				creationdate : String(jsonDate).substring(0,19)
			 };
			_this.tryFeedback(data);
		});
    }
    this.tryFeedback = function(data){
        Post('/feedback/add',data,function(res){
            console.log(res);
        });
	}
}
var Feed = new feed();
$(document).ready(function(){
	Feed.feedback();
});