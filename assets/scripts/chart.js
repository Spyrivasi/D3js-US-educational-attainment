function transition(name) {
	if (name === "top") {
		$("#pie-chart").fadeIn(1000);
		//$("#value-scale").fadeIn(1000);
		$("#tree-form").fadeOut(250);
		$("#stack-form").fadeOut(250);
		//$("#view-party-type").fadeOut(250);
		return total();
		//location.reload();
	}
	if (name === "national") {
		$("#pie-chart").fadeIn(1000);
		//$("#value-scale").fadeOut(250);
		$("#tree-form").fadeOut(250);
		$("#stack-form").fadeOut(250);
		//$("#view-party-type").fadeIn(1000);
		return partyGroup();
	}
	if (name === "regional") {
		$("#pie-chart").fadeOut(250);
		//$("#value-scale").fadeOut(250);
		$("#tree-form").fadeOut(250);
		$("#stack-form").fadeIn(1000);
		//$("#view-donor-type").fadeIn(1000);
		return donorType();
	}
	if (name === "stateLevel")
		$("#pie-chart").fadeOut(250);
		//$("#value-scale").fadeOut(250);
		$("#tree-form").fadeOut(250);
		$("#stack-form").fadeIn(1000);
		//$("#view-source-type").fadeIn(1000);
		return fundsType();
	}
