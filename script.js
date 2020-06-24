/*
    Savings Pool Loan Calculator
*/

var repaymentAmountPerMonth;

var onchangeSavingsAmount = function() {
	var id = document.getElementById("savings-amount");
	var v = parseFloat(id.value);
	if (v == '' | v < 10) {
		v = 10
		id.value = v;
	}
}

var onchangeSavingsPoints = function() {
	/* 	var id = document.getElementById("savings-points");
		var v = parseInt(id.value);
		if (v == '' | v < 10) {
		v = 10
		id.value = v;
	} */
}

var onchangeLoanAmount = function() {
	var id = document.getElementById("loan-amount");
	var v = parseFloat(id.value);
	if (v == '' | v < 10) {
		v = 10
		id.value = v;
	}
}

var onchangeRepaymentAmount = function() {
	var id = document.getElementById("repayment-amount");
	var v = parseFloat(id.value);
	if (v == '' | v < 1) {
		v = 5;
		id.value = v;
	}
}

var onchangeRepaymentPeriod = function() {
	/* 	var amount = repaymentAmountPerMonth;
		var periodType = parseInt(document.getElementById("repayment-period").selectedIndex);
		switch (periodType) {
		case 0: amount=repaymentAmountPerMonth/4; break;
		case 1: amount=repaymentAmountPerMonth/2; break;
		case 2: amount=repaymentAmountPerMonth; break;
		case 3: amount=repaymentAmountPerMonth*12; break;
		}
	document.getElementById("repayment-amount").value = amount; */
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
	onchangeRepaymentAmount();
	var repaymentAmount = parseInt(document.getElementById("repayment-amount").value);
	var periodType = parseInt(document.getElementById("repayment-period").selectedIndex);
	switch (periodType) {
		case 0: repaymentAmount=repaymentAmount*4; break;
		case 1: repaymentAmount=repaymentAmount*2; break;
		case 2: repaymentAmount=repaymentAmount; break;
		case 3: repaymentAmount=repaymentAmount/12; break;
	}
	repaymentAmountPerMonth = repaymentAmount;
	
	var savingsAmount = parseFloat(document.getElementById("savings-amount").value);
	var savingsPoints = parseInt(document.getElementById("savings-points").value);
	var loanAmount = parseFloat(document.getElementById("loan-amount").value);
	var loanBalance = savingsAmount - loanAmount;
	var pointsBalance = savingsPoints;
	var months =  0;
    while (loanBalance < 0) {
		loanBalance = loanBalance + repaymentAmountPerMonth;
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
		} else if (years >= 10) {	
			yearText = '10+ years';
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
	document.getElementById("savings-amount").onchange = onchangeSavingsAmount;
	document.getElementById("savings-points").onchange = onchangeSavingsPoints;
	document.getElementById('loan-amount').onchange = onchangeLoanAmount;
	document.getElementById("repayment-amount").onchange = onchangeRepaymentAmount;
	document.getElementById("repayment-period").onchange = onchangeRepaymentPeriod;
	
	document.getElementById("savings-amount").oninput = updateLoanAndPaybackDetails;
	document.getElementById("savings-points").oninput = updateLoanAndPaybackDetails;
	document.getElementById('loan-amount').oninput = updateLoanAndPaybackDetails;
	document.getElementById("repayment-amount").oninput = updatePaybackTime;
	document.getElementById("repayment-period").oninput = updatePaybackTime;
	document.getElementById("myRange").oninput = updatePaybackAmount;
	
	document.getElementById("savings-amount").value = 3191;
	document.getElementById("savings-points").value = 49546;
	document.getElementById("loan-amount").value = 5000;
	document.getElementById("repayment-amount").value = 100;
	repaymentAmountPerMonth = 100;
	document.getElementById("repayment-period").selectedIndex = "2";
	periodType = '2'; previousPeriodType = '2';
	
	document.getElementById("savings-points").setAttribute('step', parseFloat(document.getElementById("savings-amount").value));
	//document.getElementById("loan-amount").setAttribute('max', 10*parseFloat(document.getElementById("savings-amount").value));
	document.getElementById("repayment-amount").setAttribute('max', parseFloat(document.getElementById("loan-amount").value));
	
	updateLoanAndPaybackDetails();
}
