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
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer '+ localStorage.token);
			},
			data : JSON.stringify(data),
			processData : false,
			success : function(response){
				cb(response);
				window.location.replace('completedtasks')
			}
		});
    }
    this.addtask = function(){
		$('#button').on('click',function(){
			console.log('Inside')
			$.getScript('/static/js/showtask.js',function(){
				showTask();
		 });
		});
        $('#addtasksform').on('submit',function(e){
            e.preventDefault();
            //  var now = new Date();
			//  var jsonDate = now.toJSON();
			let time = 'T12:00:00'
			var data = {
				title : $('#task_title').val(),
                content : $('#task_content').val(),
                award : $('#number').val(),
                deadlinedate:$('#deadlineDate').val().substring(0,19)+time
                //creationdate : String(jsonDate).substring(0,19)
            };
            console.log(JSON.stringify(data));
			_this.tryRegister(data);
		});
    }
    this.tryRegister = function(data){
        Post('/task/new',data,function(res){
            console.log(res);
        });
	}
}
var Auth = new auth();
$(document).ready(function(){
	Auth.addtask();
});