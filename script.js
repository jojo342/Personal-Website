$(document).ready(function () {
    //hides the text over the icons
    $(".text").hide();
    
    //when the cursor is over an icon, the text shows
    //r = row, c = column so r1c1 = row 1 column 1 etc...
    $(".r1c1").mouseenter(function () {
        $(".su").show();
    });
    $(".r1c1").mouseleave(function () {
        $(".su").hide();
    });
    
    
    $(".r1c2").mouseenter(function () {
        $(".snk").show();
    });
    $(".r1c2").mouseleave(function () {
        $(".snk").hide();
    });
    
    $(".r1c3").mouseenter(function () {
        $(".mk64").show();
    });
    $(".r1c3").mouseleave(function () {
        $(".mk64").hide();
    });
    
    $(".r1c4").mouseenter(function () {
        $(".ssb64").show();
    });
    $(".r1c4").mouseleave(function () {
        $(".ssb64").hide();
    });
    
    $(".r1c5").mouseenter(function () {
        $(".kimbra").show();
    });
    $(".r1c5").mouseleave(function () {
        $(".kimbra").hide();
    });
    
    $(".r1c6").mouseenter(function () {
        $(".jmonae").show();
    });
    $(".r1c6").mouseleave(function () {
        $(".jmonae").hide();
    });
    
});