var toggle = false;
$('#showcase').click(function(){
    if(toggle == false){
        $('#fixed-float').hide();
        $('#showcase').css({"position":"fixed"});
        $('#showcase').css({"top":"0"});
        $('#showcase').css({"left":"0"});
        window.location.hash = "#vim";
        toggle = true;
    }
    else{
        $('#fixed-float').show();
        $('#showcase').css({"position":"relative"});
        $('#showcase').css({"top":"none"});
        $('#showcase').css({"left":"none"});
        window.location.hash = "#showcase";
        toggle = false;
    }
});
