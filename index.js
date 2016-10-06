var toggle = false;
var isOpen = false;
var projects = ["measure", "newday", "deloitte", "clearcell"]
var projOpen = ""

$(document).ready(function(){
	closeNav();
	$("#main").click(function() {
	closeNav();
	});
	bindNavItems();
	bindHoverThumbs();
	/*bindCloseBtn();*/
});


function toggleNav() {
	if(toggle == false && isOpen==false){openNav();}
  	else {if(toggle == true && isOpen==true){closeNav();}
  	}	
}

function openNav() {
	document.getElementById("mysidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	toggle = true;
	isOpen = true;
}

function closeNav() {
	document.getElementById("mysidenav").style.width = "50px";
	document.getElementById("main").style.marginLeft = "50px";
	toggle = false;
	isOpen = false;
}

function changePage(currId) {
	$("#about, #projects, #resume, #contact").removeClass("selected");
	currId.addClass("selected");

	var currContainer = currId.text().toLowerCase();
	$(".container").addClass("hidden");
	$(".".concat(currContainer)).removeClass("hidden");
}

function bindNavItems() {
	$("#about, #projects, #resume, #contact").click(function() {
		changePage($(this));
		closeNav();
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