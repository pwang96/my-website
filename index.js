var toggle = false;
var isOpen = false;
var projects = ["measure", "newday", "deloitte", "clearcell"];
var projOpen = "";
var slideIndex = 1;


$(document).ready(function(){

	bindNavItems();
	bindHoverThumbs();
	showDivs(slideIndex);
});


function changePage(currId) {
	$("#about, #projects, #resume, #contact").removeClass("selected");
	currId.addClass("selected");

	var currContainer = currId.text().toLowerCase();
	$(".container").addClass("hidden");
	$(".".concat(currContainer)).removeClass("hidden");
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
		$(currentOverlay.concat(" .thumb-overlay hidden")).removeClass("hidden");
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
	$(".page-overlay").fadeTo(300, 0);
	$(".page-overlay").addClass("hidden");
	$("#details-".concat(projOpen)).fadeTo(300, 0);
	$("#details-".concat(projOpen)).addClass("hidden");
	console.log(projOpen);
}

function bindCloseBtn() {
	$("#closeBtn").click(closeBtnClicked());
}

function plusDivs(n) {
	showDivs(slideIndex+=n);
}

function showDivs(n) {
	var x = document.getElementsByClassName("measure-pics");
	if (n > x.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = x.length;
	}
	for (var i=0; i<x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "block";
}



