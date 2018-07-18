var curr=1;
$(document).ready(function(){
	$("#i").on("keydown",function (e){
		if(e.keyCode==9) {
			e.preventDefault();
			goForw();
		}
		if(e.keyCode==13){
			if(curr==1){
				e.preventDefault();
				goForw();
			}
		}
	});
	$(".cir1").on("click",function(){
		if(curr!=1){
				goBack();
		}
	});
	$(".cir2").on("click",function(){
		if(curr==1){
				goForw();
		}
	});
	$("[type=submit]").on("click",function (e){
		e.preventDefault();
		if(curr==1) {
					goForw();
			
		} else {
			if ($(".con1").val()!='' && $(".con2").val()!='') {
				$(".form1").trigger("submit");
			}else $(".errors").html("<label>Please fill out all the fields</label>");
		}
	});
});
function goForw(){
	if($(".con1").val()!=''){
		$(".cir2").attr("fill","rgb(240, 240, 170)");
		$(".cir1").removeAttr("fill");
		$(".s_code").animate({"top":"-200px"},700);
		$(".pass").animate({"top":"-200px"},700);
		$(".errors").html("");
		curr=2;
	} else $(".errors").html("<label>Please fill out this field</label>");
}
function goBack(){
	$(".cir1").attr("fill","rgb(240, 240, 170)");
	$(".cir2").removeAttr("fill");
	$(".s_code").animate({"top":"0px"},700);
	$(".pass").animate({"top":"200px"},700);
	$(".errors").html("");
	curr=1;
}