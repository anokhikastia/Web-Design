/*
	Fill in the below functions so that they execute correctly. 
	You may NOT modify the function headers. 

	Again you are not required to use jQuery, but it's set up for you
	if you want to use it. 

	HINT: you will need to use window.getComputedStyle(div, null).getPropertyValue("height")
	depending on how you implement the functions. This just allows you to get the 
	height/width values from non-jQuery object elements.
*/


$(document).ready(function() {

	/* You may not modify the below 6 event handlers 
	or the code inside of them */
	$("#width_height_mix").click(function() { 
		add_div_width_height($("#q2-output"), ...Array.from($(".q2-ingredient")));
	})
	$("#color_mix").click(function() {
		add_div_colors($("#q2-output"), ...Array.from($(".q2-ingredient")))
	})
	$("#width_height_reset").click(function() { 
		$("#q2-output").css("height", "120px");
		$("#q2-output").css("width", "120px");
	})
	$("#color_reset").click(function() {
		$("#q2-output").css("background", "rgb(0, 0, 0)");
	})

	
})

// Call this on all height or width values 
// from a div to turn them into a number.
function fix_height_width(number) {
	return parseInt(number.slice(0, number.length - 2));
}

/* When called, should add all the height and 
   width values to its first arguments height 
   and width value, then divide by 5. */
function add_div_width_height(heightWidth, hwArray) {
	// YOUR CODE HERE
	var output = document.querySelector('#q2-output');
	var height = window.getComputedStyle(output, null).getPropertyValue("height");
	var width = window.getComputedStyle(output, null).getPropertyValue("width");
	var array = Array.from($(".q2-ingredient"));

	var heightInt = fix_height_width(height);
	var widthInt = fix_height_width(width);
	var i; 
	var totalWidth = widthInt; var totalHeight = heightInt; 
	for (i = 0; i < array.length; i++) { 
		var h = window.getComputedStyle(array[i], null).getPropertyValue("height");
		var w = window.getComputedStyle(array[i], null).getPropertyValue("width");
		var hInt = fix_height_width(h);
		var wInt = fix_height_width(w);
		totalHeight += hInt; 
		totalWidth += wInt; 
	}
	var ansWidth = totalWidth/5;
	var ansHeight = totalHeight/5;
	document.querySelector('#q2-output').style.width = String(ansWidth);
	document.querySelector('#q2-output').style.height = String(ansHeight);
}

// Use this to add rgb values together
function add_rgb(rgb1, rgb2) {
	let rgb1_fixed = rgb1.split(",");
	rgb1_fixed[0] = rgb1_fixed[0].slice(4);
	rgb1_fixed[2] = rgb1_fixed[2].slice(0, rgb1_fixed[2].length-1);
	rgb1_fixed = rgb1_fixed.map((x)=>(parseInt(x)));

	let rgb2_fixed = rgb2.split(",");
	rgb2_fixed[0] = rgb2_fixed[0].slice(4);
	rgb2_fixed[2] = rgb2_fixed[2].slice(0, rgb2_fixed[2].length-1);
	rgb2_fixed = rgb2_fixed.map((x)=>(parseInt(x)));

	let red = (rgb1_fixed[0] + rgb2_fixed[0]);
	let green = (rgb1_fixed[1] + rgb2_fixed[1]);
	let blue = (rgb1_fixed[2] + rgb2_fixed[2]);
	return "rgb("+red+","+green+","+blue+")";
}

/* When called, should add all of the rgb background 
   values to the its first arguments rgb background value */
function add_div_colors(rgb, rgbArray) {
	// YOUR CODE HERE
	var output = document.querySelector('#q2-output');
	var color = window.getComputedStyle(output, null).getPropertyValue("background-color");
	var array = Array.from($(".q2-ingredient"));
	var ans = color; 

	for (i = 0; i < array.length; i++) { 
		var c = window.getComputedStyle(array[i], null).getPropertyValue("background-color");
		ans = add_rgb(ans, c);
	}
	document.querySelector('#q2-output').style.backgroundColor = String(ans);
}










