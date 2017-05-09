$(document).ready(function() {
var count = 0

$('.tiger').click(function() {
	count ++;
	console.log(count);
	$('.counterBox').html(count);
	})
});

var catArray = {
	cats: [
			{
				name: "Sarah",
				img: "tiger",
				count: "0",
			},
			{
				name: "Karol",
				img: "tiger1",
				count: "0",
			},
		]
};

if (catArray.cats.lenght > 0) {
	catArray.cats.forEach(function(cat) {

	};
}