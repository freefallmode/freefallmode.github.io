/*
    Savings Pool Loan Calculator
*/

var checkValues = function() {
	var savingsAmount = parseFloat(document.getElementById("savings-amount").value);
	var savingsPoints = parseInt(document.getElementById("savings-points").value);
	var loanAmount = parseFloat(document.getElementById("loan-amount").value);
	
	if (savingsAmount == '' | savingsAmount < 10) {
		savingsAmount = 10
		document.getElementById("savings-amount").value = savingsAmount;
	}
/* 	if (savingsPoints == '' | savingsPoints < 10) {
		savingsPoints = 10
		document.getElementById("savings-points").value = savingsPoints;
	} */
	if (loanAmount == '' | loanAmount < 10) {
		loanAmount = 10
		document.getElementById("loan-amount").value = loanAmount;
	}
}

var updateLoanAndPaybackDetails = function() {
	updateLoanDetails();
	updatePaybackTime();
}

var updateLoanDetails = function() {
	var savingsAmount = parseFloat(document.getElementById("savings-amount").value);
	var loanAmount = parseFloat(document.getElementById("loan-amount").value);
	var loanDifferenceAmount = loanAmount - savingsAmount;
	document.getElementById('loan-amount-details').innerHTML = '($' + savingsAmount.toLocaleString() + ' Savings  +  $' + loanDifferenceAmount.toLocaleString() + ' Loan)';
}

var updatePaybackTime = function() {
	var savingsAmount = parseFloat(document.getElementById("savings-amount").value);
	var savingsPoints = parseInt(document.getElementById("savings-points").value);
	var loanAmount = parseFloat(document.getElementById("loan-amount").value);
	var repaymentAmount = parseFloat(document.getElementById("repayment-amount").value);
	var loanBalance = savingsAmount - loanAmount;
	var pointsBalance = savingsPoints;
	if (repaymentAmount == '' | repaymentAmount < 1) {
		repaymentAmount = 10
		document.getElementById("repayment-amount").value = repaymentAmount;
	}
	var months =  0;
    while (loanBalance < 0) {
		loanBalance = loanBalance + repaymentAmount;
		pointsBalance = pointsBalance + loanBalance;
		months++;
    }
	
	updatePaybackSlider(months);
	document.getElementById('savings-amount-final').innerHTML = '$' + loanBalance.toFixed(2);
	document.getElementById('savings-points-final').innerHTML = pointsBalance.toFixed(0);
}

var updatePaybackAmount = function() {
	var savingsAmount = parseFloat(document.getElementById("savings-amount").value);
	var loanAmount = parseFloat(document.getElementById("loan-amount").value);
	var loanDifferenceAmount = loanAmount - savingsAmount;
	var slider = parseInt(document.getElementById("myRange").value);
	var repaymentAmount = loanDifferenceAmount / slider;
	document.getElementById("repayment-amount").value = repaymentAmount.toFixed(2);
	updatePaybackText();
	updatePaybackTime();
}

var updatePaybackSlider = function(months) {
	var slider = document.getElementById("myRange");
	slider.value = months;
	updatePaybackText();
}

// Update the current slider value (each time you drag the slider handle)
var updatePaybackText = function() {
	var slider = document.getElementById("myRange");
	var output = document.getElementById("payback-time");
	var months = slider.value;
	var years = 0;
	var monthText = '';
	var yearText = '';
	if (months > 12) {
		years = Math.floor(months / 12);
		months = months % 12;
		if (years == 1) {
			yearText = years + ' year';
		} else {	
			yearText = years + ' years';
		}
	}
	if (months == 0) {
		monthText = '';
	} else if (months == 1) {
		monthText = '1 month';
	} else {
		monthText = months + ' months';
	}
	if (yearText != '' & monthText != '') yearText += ', ';
	output.innerHTML = yearText + monthText;
}

window.onload = function () {
	document.getElementById("savings-amount").onchange = checkValues;
	document.getElementById("savings-points").onchange = checkValues;
	document.getElementById('loan-amount').onchange = checkValues;
	document.getElementById("repayment-amount").onchange = checkValues;
	
	document.getElementById("savings-amount").oninput = updateLoanAndPaybackDetails;
	document.getElementById("savings-points").oninput = updateLoanAndPaybackDetails;
	document.getElementById('loan-amount').oninput = updateLoanAndPaybackDetails;
	document.getElementById("repayment-amount").oninput = updatePaybackTime;
	document.getElementById("myRange").oninput = updatePaybackAmount;
		
	document.getElementById("savings-amount").value = 3191;
	document.getElementById("savings-points").value = 49546;
	document.getElementById("loan-amount").value = 5000;
	document.getElementById("repayment-amount").value = 100;

	document.getElementById("savings-points").setAttribute('step', parseFloat(document.getElementById("savings-amount").value));
	//document.getElementById("loan-amount").setAttribute('max', 10*parseFloat(document.getElementById("savings-amount").value));
	document.getElementById("repayment-amount").setAttribute('max', parseFloat(document.getElementById("loan-amount").value));
	
	updateLoanAndPaybackDetails();
}
