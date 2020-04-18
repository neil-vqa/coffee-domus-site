//main panels
function openNav() {
	document.getElementById("sidepanel").style.width = "40%";
	document.getElementById("right-panel").style.width = "60%";
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
