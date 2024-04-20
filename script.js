//your JS code here. If required.
// let squares= document.querySelectorAll(".square");

// squares.forEach(function(square) {
// 	square.addEventListener('mouseover', function(){
// 		square.style.backgroundColor= "#6F4E37";
// 	});
// 	square.addEventListener('mouseout', function() {
// 		square.style.backgroundColor= "#E6E6FA";
// 	});
// });

let squares = document.querySelectorAll(".square");

squares.forEach(function(square) {
    square.addEventListener('mouseover', function(){
        let otherSquares = document.querySelectorAll(`.square:not(#${square.id})`);
        otherSquares.forEach(function(otherSquare) {
            otherSquare.style.backgroundColor = "#6F4E37"; // Coffee color
        });
    });
    square.addEventListener('mouseout', function() {
        let allSquares = document.querySelectorAll(".square");
        allSquares.forEach(function(allSquare) {
            allSquare.style.backgroundColor = "#E6E6FA"; // Lavender color
        });
    });
});