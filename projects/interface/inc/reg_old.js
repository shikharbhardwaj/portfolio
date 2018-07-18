$(function() {
	$(".participants #hidden").css("display","none");
	$(".crea").click(function(){showCon("creative","cn")});
	$(".tech").click(function(){showCon("technoholic","tn")});
	$(".game").click(function(){showCon("gaming","g")});
	$(".robo").click(function(){showCon("roborash","rb")});
	$(".prog").click(function(){showCon("programming","pg")});
});
var curr=1;
$(document).ready(function(){
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
	$("[type=text]").on("focus",function() {
		$(this).css("color","#fff");
	});
	$("[type=email]").on("focus",function() {
		$(this).css("color","#fff");
	});
	$("textarea").on("focus",function() {
		$(this).css("color","#fff");
	});
	$("[type=submit]").on("click",function (e){
		e.preventDefault();
		if(curr==1) {
			goForw();	
		} 
		else {
			if($(".p1").val() ==''){
				$(".p1").val() =='';
			}		 	
			if($(".p2").val() ==''){
				$(".p2").val() =='';
			}		 	
			if($(".p3").val() ==''){
				$(".p3").val() =='';
			}		 	
			if($(".p4").val() ==''){
				$(".p4").val() =='';
			}		 	
			if($(".p5").val() ==''){
				$(".p5").val() =='';
			}		 	
			if($(".p6").val() ==''){
				$(".p6").val() =='';
			}		 	
			if($(".p7").val() ==''){
				$(".p7").val() =='';
			}		 	
			if($(".p8").val() ==''){
				$(".p8").val() =='';
			}		 	
			if($(".p9").val() ==''){
				$(".p9").val() =='';
			}		 	
			$("form").trigger("submit");
		}
	});
});
function goForw(){	
	if($(".base1").val() =='' || $(".base2").val() =='' || $(".base3").val() =='' || $(".base4").val() =='')
		$(".errors").html("<label>Please fill out all the fields.</label>");
	else{
		$(".cir2").attr("fill","rgb(240, 240, 170)");
		$(".cir1").removeAttr("fill");
		$(".contact").slideUp(700);
		$(".participants").css("display","block");
		$(".participants").animate({"top":"0px"},900);
		$(".errors").html("");
		curr=2;
	}
}
function goBack(){
	$(".cir1").attr("fill","rgb(240, 240, 170)");
	$(".cir2").removeAttr("fill");
	$(".contact").slideDown(700);
	$(".participants").animate({"top":"700px"},900);
	$(".participants").css("display","none");
	$(".errors").html("");
	curr=1;
}
function showCon(){
	$(".participants #hidden").slideUp();
	if($("."+arguments[0]).is(":hidden")) {
		$("."+arguments[0]).slideDown();
	}else {
		$("."+arguments[0]).slideUp();
	}
}