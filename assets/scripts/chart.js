function transition(name) {
	if (name === "top") {
		$("#initial-content").fadeIn(250);
		$("#value-scale").fadeIn(1000);
		$("#view-donor-type").fadeOut(250);
		$("#view-source-type").fadeOut(250);
		$("#view-party-type").fadeOut(250);
		return total();
		//location.reload();
	}
	if (name === "national") {
		$("#initial-content").fadeOut(250);
		$("#value-scale").fadeOut(250);
		$("#view-donor-type").fadeOut(250);
		$("#view-source-type").fadeOut(250);
		$("#view-party-type").fadeIn(1000);
		return partyGroup();
	}
	if (name === "regional") {
		$("#initial-content").fadeOut(250);
		$("#value-scale").fadeOut(250);
		$("#view-party-type").fadeOut(250);
		$("#view-source-type").fadeOut(250);
		$("#view-donor-type").fadeIn(1000);
		return donorType();
	}
	if (name === "stateLevel")
		$("#initial-content").fadeOut(250);
		$("#value-scale").fadeOut(250);
		$("#view-donor-type").fadeOut(250);
		$("#view-party-type").fadeOut(250);
		$("#view-source-type").fadeIn(1000);
		return fundsType();
	}
