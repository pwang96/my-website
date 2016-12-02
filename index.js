var toggle = false;
var isOpen = false;
var projects = ["visualizer", "leaguerec", "measure", "newday", "deloitte", "clearcell", "linkedlist"];
var projOpen = "";
var backgrounds = {"about":"url(pics/umd2.jpg)",
				   "projects":"url(pics/weather.png)",
				   "resume":"url(pics/umd2.jpg)",
				   "contact":"url(pics/umd2.jpg)"}
var slideIndex = 1;


$(function(){

	bindNavItems();
	bindHoverThumbs();
	showSlides(0);

});


function changePage(currId) {
	$("#about, #projects, #resume, #contact").removeClass("selected");
	currId.addClass("selected");

	var currContainer = currId.text().toLowerCase();
	$(".container").addClass("hidden");
	$(".".concat(currContainer)).removeClass("hidden");
	if (currContainer == "projects") {
		$(document.body).css('background-image', backgrounds[currContainer]);
		$(document.body).css('background-repeat', "repeat");
		$(document.body).css('background-size', "auto auto");

	} else {
		$(document.body).css('background-image', backgrounds[currContainer]);
		$(document.body).css('background-repeat', "no-repeat");
		$(document.body).css('background-size', "cover");
	}
}

function bindNavItems() {
	$("[role='navbutton']").click(function() {
		console.log($(this));
		$("[role='navbutton']").removeClass("active");
		$(this).addClass("active");
		changePage($(this));
	}
	)
}

function hoverIn(i) {
	return function() {
		var currentOverlay = "#thumb-".concat(projects[i]);
		$(currentOverlay.concat(" .thumb-overlay.hidden")).removeClass("hidden");
		$(currentOverlay.concat(" .thumb-overlay")).fadeTo(300, 0.75);
	}
}

function hoverOut(i) {
	return function() {
		var currentOverlay = "#thumb-".concat(projects[i]);
		$(currentOverlay.concat(" .thumb-overlay")).fadeTo(300, 0);
		$(currentOverlay.concat(" .thumb-overlay")).addClass("hidden");
	}
}

function thumbClicked(i) {
	return function() {
		projOpen = projects[i];
		var currentProj = "#details-".concat(projOpen);
		$(currentProj).removeClass("hidden");
		$(currentProj).fadeTo(300, 1);
		$(".page-overlay").removeClass("hidden");
		$(".page-overlay").fadeTo(300, 0.8);
	}
}

function bindHoverThumbs() {
	for (var i=0; i<projects.length; i++) {
		var currProj = "#thumb-".concat(projects[i]);
		$(currProj).hover(hoverIn(i), hoverOut(i));
		$(currProj).click(thumbClicked(i));
	}
}

function closeBtnClicked() {
	$(".page-overlay").fadeTo(500, 0);
	$(".page-overlay").addClass("hidden");
	$("#details-".concat(projOpen)).fadeOut(300);
	$("#details-".concat(projOpen)).addClass("hidden");
	console.log(projOpen);
}

function bindCloseBtn() {
	$("#closeBtn").click(closeBtnClicked());
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("measure-pic");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block"
;}