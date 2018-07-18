	$(document).ready(function() {
		TweenLite.to($('#hexagon'),3,{rotation:30+"deg",ease:Power4.easeOut});
		$("#viewport").css("display","none");
		$('#viewport').fadeIn();
	if($('#viewport').width()>1200){
		$(document).click(function(e) {
			var i = e.target.id;
			if(i=="br"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#ins").css("background","#a38f84");
				gets(0);
			}
			else if(i=="gr"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#crs").css("background","#23bb8a");
				gets(1);
			}
			else if(i=="bl"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#tes").css("background","#1f98c7");
				gets(2);
			}
			else if(i=="rd"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#gas").css("background","#cd5f52");
				gets(3);
			}
			else if(i=="pp"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#ros").css("background","#475577");
				gets(4);
			}
			else if(i=="yl"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#mis").css("background","#e1b919");
				gets(5);
			}
			else if(i=="ins"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#ins").css("background","#a38f84");
				gets(0);
			}
			else if(i=="crs"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#crs").css("background","#23bb8a");
				gets(1);
			}
			else if(i=="tes"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#tes").css("background","#1f98c7");
				gets(2);
			}
			else if(i=="gas"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#gas").css("background","#cd5f52");
				gets(3);
			}
			else if(i=="ros"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#ros").css("background","#475577");
				gets(4);
			}
			else if(i=="mis"){
				$('#indic span').css("background","rgba(0,0,0,0.5)");
				$("#mis").css("background","#e1b919");
				gets(5);
			}
		});
	function gets(i) {
		var off = -1 * (i * $('#carousel img').width());
		var oft = -1 * (i * ($('#wrapper span').width()));
		TweenLite.to($('#carousel img'), 0.7 ,{left:off+"px",ease:Power2.easeOut});
		TweenLite.to($('#hexagon'), 0.7,{rotation:-1*60*i+30+"deg",ease:Power2.easeOut});
		TweenLite.to($('#wrapper'),0.7,{left:oft+"px",ease:Power4.easeOut});
	}
}
if($('#viewport').width()<=1000){
	$("#in").html("<h3>Interface</h3>The interschool face-off hosted by St. Xavier's, Delhi");
	}
	var ind = 0;
	$(document).click(function(e) {
		var i = e.target.id;
		if(i=="to"){
			if( $('#switch').attr("state")==0){
				$('#switch').attr("state","1");
				$('#overlay').fadeIn();
				$('#container').css("position","fixed");
				TweenLite.to($('.links'),0.7,{left:"0px",ease:Power4.easeOut});
			}
			else{
				$('#switch').attr("state","0");
				$('#container').css("position","relative");
				$('#overlay').fadeOut();
				TweenLite.to($('.links'),0.7,{left:"-49px",ease:Power4.easeOut});	 
			}
		}
		else if($('#switch').attr("state")==1){
			$('#switch').attr("state","0");
			$('#container').css("position","relative");
			$('#overlay').fadeOut();
			TweenLite.to($('.links'),0.7,{left:"-49px",ease:Power4.easeOut});	 
		}
		if(i=="l"){
			if(ind<=4){
				ind++;
				chl(ind);
			}
		}
		if(i=="r"){
			if(ind>0){
				ind--;
				chr(ind);
			}
		}
	});
});
function chl(ind) {
	var off = $('#carousel img').width();
	var offt = $('#wrapper span').width();
	off = -1*off*ind;
	offt = -1*offt*ind;
	if(ind>=6){
		ind = 6;
		return;
	}
	else{
		TweenLite.to($('#carousel'),0.7,{left:off+"px",ease:Power2.easeOut});
		TweenLite.to($('#wrapper span'),0.7,{left:offt+"px",ease:Power4.easeOut});
	}
}
function chr(ind) {
	var off = $('#carousel img').width();
	var offt = $('#wrapper span').width();
	off = -1*off*ind;
	offt = -1*offt*ind;
	if(ind<0){
		ind = 0;
		return;
	}
	else{
		TweenLite.to($('#carousel'),0.7,{left:off+"px",ease:Power2.easeOut});
		TweenLite.to($('#wrapper span'),0.7,{left:offt+"px",ease:Power4.easeOut});
	}
}