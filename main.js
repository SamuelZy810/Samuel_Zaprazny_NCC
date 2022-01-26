let toggleAlert = false;
let getAlert = document.querySelector("#wrapper-alert");

let toggleAlertFunction = function() {

	if (toggleAlert === true) {
		getAlert.style.opacity = 0;
		getAlert.style.visibility = "hidden";
		toggleAlert = false;
	} else if (toggleAlert === false) {
		getAlert.style.visibility = "visible";
		getAlert.style.opacity = 1;
		toggleAlert = true;
	}

}

let toggleFirstDrop = false;
let getFirstDrop = document.querySelector("#dropdown-first");

let toggleFirstFunction = function() {

	if (toggleFirstDrop === true) {
		getFirstDrop.style.opacity = 0;
		getFirstDrop.style.visibility = "hidden";
		toggleFirstDrop = false;
	} else if (toggleFirstDrop === false) {
		getFirstDrop.style.visibility = "visible";
		getFirstDrop.style.opacity = 1;
		toggleFirstDrop = true;
	}

}

let toggleSecondDrop = false;
let getSecondDrop = document.querySelector("#dropdown-second");

let toggleSecondFunction = function() {

	if (toggleSecondDrop === true) {
		getSecondDrop.style.opacity = 0;
		getSecondDrop.style.visibility = "hidden";
		toggleSecondDrop = false;
	} else if (toggleSecondDrop === false) {
		getSecondDrop.style.visibility = "visible";
		getSecondDrop.style.opacity = 1;
		toggleSecondDrop = true;
	}

}

window.onclick = function(e) {

	let comp = event.srcElement.id;

	let string1 = "dropdown-first";
	let comp1 = comp.localeCompare(string1);

	let string2 = "nav-a";
	let comp2 = comp.localeCompare(string2);

	let string3 = "dropdown-content-first";
	let comp3 = comp.localeCompare(string3);

	if (comp1 != 0 && comp2 != 0 && comp3 != 0) {

		if (toggleFirstDrop === true) {

			getFirstDrop.style.opacity = 0;
			getFirstDrop.style.visibility = "hidden";
			toggleFirstDrop = false;

		}

	}

	let string4 = "dropdown-second";
	let comp4 = comp.localeCompare(string4);

	let string5 = "nav-b";
	let comp5 = comp.localeCompare(string5);

	let string6 = "dropdown-content-second";
	let comp6 = comp.localeCompare(string6);

	if (comp4 != 0 && comp5 != 0 && comp6 != 0) {

		if (toggleSecondDrop === true) {

			getSecondDrop.style.opacity = 0;
			getSecondDrop.style.visibility = "hidden";
			toggleSecondDrop = false;

		}

	}

}