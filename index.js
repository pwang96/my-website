var toggle = false;
var isOpen = false;

$(document).ready(function(){
	closeNav();
	$("#main").click(function() {
	closeNav();
	});
	bindNavItems();

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
	$("#home, #about, #projects, #resume, #contact").addClass("unselected");
	currId.removeClass("unselected");
	currId.addClass("selected");

	var currContainer = currId.text().toLowerCase();
	$(".container").addClass("hidden");
	$(".".concat(currContainer)).removeClass("hidden");
}

function bindNavItems(){
	$("#home, #about, #projects, #resume, #contact").click(function() {
		changePage($(this));
		closeNav();
	}
	)
}
