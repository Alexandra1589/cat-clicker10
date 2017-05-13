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

var count2 = 0;
 
$('.tiger2').click(function() {
	count1 ++;
	console.log(count1);
	$(".count2").empty('<p>'+count2+'</p>');
	$(".count2").append('<p>'+count2+'</p>');
	});

var count3 = 0;
 
$('.tiger3').click(function() {
	count1 ++;
	console.log(count1);
	$(".count3").empty('<p>'+count3+'</p>');
	$(".count3").append('<p>'+count3+'</p>');
	});

var count4 = 0;
 
$('.tiger4').click(function() {
	count1 ++;
	console.log(count1);
	$(".count4").empty('<p>'+count4+'</p>');
	$(".count4").append('<p>'+count4+'</p>');
	});
});

var catArray = {
	cat: [
	{
		name: "Eric",
		img: "img/tiger.jpg",
		count: 0,
	},
	{
		name: "Christy",
		img: "img/tiger1.jpg",
		count: 0,
	},
	{
		name: "Kayla",
		img: "img/tiger2.jpg",
		count: 0,
	},
	{
		name: "Nate",
		img: "img/tiger3.jpg",
		count: 0,
	},
	{
		name: "Raylyn",
		img: "img/tiger4.jpg",
		count: 0,
	}
	]

};





catArray.cat.forEach(function(cat){
	$('#main').append('<div id="'+cat.name+'">'+cat.name+'</div><img id="photo'+cat.name+'"src="'+cat.img+'"><p id="count'+cat.name+'">'+ cat.count + '</p>');
	$('#photo'+cat.name).click(function(){
		cat.count ++;
		console.log(cat.count);
		$('#count'+cat.name).empty('<p>'+cat.count+'</p>');
		$('#count'+cat.name).append('<p>'+cat.count+'</p>');
	})
});
