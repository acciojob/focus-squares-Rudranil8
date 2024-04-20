//your JS code here. If required.
let squares= document.querySelectorAll(".square");

squares.forEach(function(square) {
	square.addEventListener('mouseover', function(){
		square.style.backgroundColor= "#6F4E37";
	});
	square.addEventListener('mouseout', function() {
		square.style.backgroundColor= "#E6E6FA";
	});
}); 