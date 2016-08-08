// JavaScript Document
$(document).ready(function() {
	$("#menu").height($(document).height());
});
$(document).ready(function() {
    setTimeout( function(){$('#menu').css('left','-130px');},10000); <!-- Change 'left' to 'right' for panel to appear to the right -->
});
$(document).ready(function(){

$(".divClass .deleteDiv").click(function(){
$(this).parents(".divClass").animate({ opacity: 'hide' }, "slow");
});

});