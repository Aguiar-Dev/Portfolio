$("#data_btn").click(function(){
	var public_key = 'DJM2pXGgR4F0qalaG7Zm';
	$.ajax({
	   url: 'http://data.sparkfun.com/output/' + public_key + '.json',
	   dataType: 'jsonp',
	   data: {
	     page: 1
	   },
	   success: function(response) {
	     console.log(response);
	     $("#data_holder").children().remove();
	     response.sort(function(a, b){
	     	return b.score - a.score;
	     });
	     for (var i = 0; i < 20; i++) {
	     	if(! response[i]) break;
	     	$("#data_holder")
	     		.append("<div class='data_box'><p>"+ (i + 1) +". "+ response[i].initials +" - "+ response[i].score +"pts.</p></div>");
	     };
	   }
	});
})