
//query screen size
const screen = window.matchMedia( "(max-width: 425px)" );

//main panels
function openNav() {
	if (screen.matches) {
		document.getElementById("sidepanel").style.width = "20%";
		document.getElementById("right-panel").style.width = "80%";
	} else {
		document.getElementById("sidepanel").style.width = "40%";
		document.getElementById("right-panel").style.width = "60%";
	}
}

function closeNav() {
	document.getElementById("sidepanel").style.width = "0";
	document.getElementById("right-panel").style.width = "0";
}

//reserve form
function openReserve() {
	document.getElementById('reserve-form').style.display='block';
}

function closeReserve() {
	document.getElementById('reserve-form').style.display='none';
}

//product
function openProduct() {
	document.getElementById('product-modal').style.display='block';
}

function closeProduct() {
	document.getElementById('product-modal').style.display='none';
}

//date and time picker
$('.datepicker').pickadate()
$('.timepicker').pickatime({
	min: [9,0],
	max: [20,30]
})
