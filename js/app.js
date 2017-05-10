$(document).ready(function() {
var count = 0;

$('.tiger').click(function() {
	count ++;
	console.log(count);
	$('.counterBox').html(count);
	});
});

var catArray = {
	cats: [
			{  
				name: "Sarah",
				img: "img/tiger",
				count: "0",
			},
			{
				name: "Karol",
				img: "img/tiger1",
				count: "0",
			},
		]
};

if (catArray.cats.length > 0) {
	catArray.cats.forEach(function(cat) {
		$(".main").append('<ul>' + cat.name + '</ul>');
		$(".main").append('<ul>' + cat.img + '</ul>');
		$(".main").append('<li>' + cat.count + '</li');

	});
}