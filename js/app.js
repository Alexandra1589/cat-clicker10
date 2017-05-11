$(document).ready(function() {
var count = 0;

$('.tiger').click(function() {
	count ++;
	console.log(count);
	$(".count").empty('<p>'+count+'</p>');
	$(".count").append('<p>'+count+'</p>');
	});

var count1 = 0;

$('.tiger1').click(function() {
	count1 ++;
	console.log(count1);
	$(".count1").empty('<p>'+count1+'</p>');
	$(".count1").append('<p>'+count1+'</p>');
	});
});

