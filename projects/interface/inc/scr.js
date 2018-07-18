function out(i, s) {
    if (i == 1) {
        $('.' + s).html(i + ' <span>' + s + '</span>');
    } else {
        $('.' + s).html(i + ' <span>' + s + 's</span>');
    }
}
$(document)
    .click(function(e) {
        var i = e.target.id;
        if (i == "to") {
            if ($('#switch').attr("state") == 0) {
                $('#switch').attr("state", "1");
                $('#overlay').fadeIn();
                $('#container').css("position", "fixed");
                TweenLite.to($('.links'), 0.7,
                             {left : "0px", ease : Power4.easeOut});
            } else {
                $('#switch').attr("state", "0");
                $('#container').css("position", "relative");
                $('#overlay').fadeOut();
                TweenLite.to($('.links'), 0.7,
                             {left : "-49px", ease : Power4.easeOut});
            }
        } else if ($('#switch').attr("state") == 1) {
            $('#switch').attr("state", "0");
            $('#container').css("position", "relative");
            $('#overlay').fadeOut();
            TweenLite.to($('.links'), 0.7,
                         {left : "-49px", ease : Power4.easeOut});
        }
        if (i == "l") {
            if (ind <= 4) {
                ind++;
                chl(ind);
            }
        }
        if (i == "r") {
            if (ind > 0) {
                ind--;
                chr(ind);
            }
        }
    });
function chl(ind) {
    var off = $('#carousel img').width();
    var offt = $('#wrapper span').width();
    off = -1 * off * ind;
    offt = -1 * offt * ind;
    if (ind >= 6) {
        ind = 6;
        return;
    } else {
        TweenLite.to($('#carousel'), 0.7,
                     {left : off + "px", ease : Power2.easeOut});
        TweenLite.to($('#wrapper span'), 0.7,
                     {left : offt + "px", ease : Power4.easeOut});
    }
}
function chr(ind) {
    var off = $('#carousel img').width();
    var offt = $('#wrapper span').width();
    off = -1 * off * ind;
    offt = -1 * offt * ind;
    if (ind < 0) {
        ind = 0;
        return;
    } else {
        TweenLite.to($('#carousel'), 0.7,
                     {left : off + "px", ease : Power2.easeOut});
        TweenLite.to($('#wrapper span'), 0.7,
                     {left : offt + "px", ease : Power4.easeOut});
    }
}
