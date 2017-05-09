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

if (catArray.cats.lenght > 0) {
	catArray.cats.forEach(funtion(cat) {
		$(.main).append("<div> + cats.name + </div>");
		$(.main).append("<div> + cats.img + </div>");
		$(.main).append("<div> + cats.count + </div>");

	});
}