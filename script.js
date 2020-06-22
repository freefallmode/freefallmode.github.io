/*
    Savings Pool Loan Calculator
*/

var calculatePaybackTime = function() {
  var savingsAmount = parseFloat(document.getElementById("savings-amount").value);
  var savingsPoints = document.getElementById("savings-points").value;
  var loanAmount = parseFloat(document.getElementById("loan-amount").value);
  var repaymentAmount = parseFloat(document.getElementById("repayment-amount").value);
  var loanBalance = savingsAmount - loanAmount;
  var pointsBalance = savingsPoints;
    if (repaymentAmount == 0) repaymentAmount = 100;
  console.log(repaymentAmount);
   var months =  0;
    while (loanBalance < 0) {
      loanBalance = loanBalance + repaymentAmount;
      pointsBalance = pointsBalance - loanBalance;
      months++;
    }
 document.getElementById('points-payback-time').innerHTML = months;
}

window.onload = function () {
  document.getElementById("calculate").onclick = calculatePaybackTime;
}
