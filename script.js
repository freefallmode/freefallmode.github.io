/*
    Tax Owed Calculator
    - £0 to £10k is taxed at 0%
    - £10,001 to £35k is taxed at 20%
    - £35,001 to £100,000 is taxed at 40%
    - £100k plus is taxed at 50%
*/

var calculateTax = function() {
  var income = parseFloat(document.getElementById("income").value);
  document.getElementById("tax").value = calcTaxes(income);
  console.log(tax);
  function calcTaxes(amount){
  var calculate = 0;
  if(amount > 100000){
      tax = ((amount - 100000)*.50 + (100000-35001)*.40 + (35000-10001)*.20).toFixed(2);
      taxPrint = 'Tax Payable: £' + tax;
      salaryaftertax = (income - tax).toFixed(2);
      salaryaftertaxPrint = ' Salary After Tax: £' + salaryaftertax;
      percentagebracket1 = ((10000/amount)*100).toFixed(1);
      percentagebracket2 = ((24999/amount)*100).toFixed(1);
      percentagebracket3 = ((64999/amount)*100).toFixed(1);
      percentagebracket4 = (((amount-100000)/amount)*100).toFixed(1);
      percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between £0 to £10k, ' + percentagebracket2 + '% between £10,001 to £35k, ' + percentagebracket3 + '% between £35,001 to £100k and ' + percentagebracket4 + '% across the £100k+ bracket';
      taxband1 = 0;
      taxband2 = ((35000-10001)*.20).toFixed(2);
      taxband3 = ((100000-35001)*.40).toFixed(2);
      taxband4 = ((amount - 100000)*.50).toFixed(2);
      taxbandPrint = ' and, here is your breakdown of tax paid at each band: £' + taxband1 + ' at 0%, £' + taxband2 + ' at 20%, £' + taxband3 + ' at 40% and £' + taxband4 + ' at 50%.';
  }
  else if( amount > 35001){
      tax = ((amount - 35001)*.40 + (35000-10001)*.20).toFixed(2);
      taxPrint = 'Tax Payable: £' + tax;
      salaryaftertax = (income - tax).toFixed(2);
      salaryaftertaxPrint = ' Salary After Tax: £' + salaryaftertax;
      percentagebracket1 = ((10000/amount)*100).toFixed(1);
      percentagebracket2 = ((24999/amount)*100).toFixed(1);
      percentagebracket3 = (((amount-35001)/amount)*100).toFixed(1);
      percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between £0 to £10k, ' + percentagebracket2 + '% between £10,001 to £35k and ' + percentagebracket3 + '% between £35,001 to £100k';
      taxband1 = 0;
      taxband2 = ((35000-10001)*.20).toFixed(2);
      taxband3 = ((amount-35001)*.40).toFixed(2);
      taxbandPrint = ' and, here is your breakdown of tax paid at each band: £' + taxband1 + ' at 0%, £' + taxband2 + ' at 20% and £' + taxband3 + ' at 40%.';
  }
  else if(amount > 10001){
      tax = ((amount - 10001)*.20).toFixed(2);
      taxPrint = 'Tax Payable: £' + tax;
      salaryaftertax = (income - tax).toFixed(2);
      salaryaftertaxPrint = ' Salary After Tax: £' + salaryaftertax;
      percentagebracket1 = ((10000/amount)*100).toFixed(1);
      percentagebracket2 = (((amount-10001)/amount)*100).toFixed(1);
      percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between £0 to £10k and ' + percentagebracket2 + '% between £10,001 to £35k';
      taxband1 = 0;
      taxband2 = ((amount-10001)*.20).toFixed(2);
      taxbandPrint = ' and, here is your breakdown of tax paid at each band: £' + taxband1 + ' at 0% and £' + taxband2 + ' at 20%.';
  }
  else if(amount > 0){
       tax = amount*0;
       taxPrint = 'Tax Payable: £' + tax;
       salaryaftertax = (income - tax).toFixed(2);
       salaryaftertaxPrint = ' Salary After Tax: £' + salaryaftertax;
       percentagebracket1 = 100;
       percentagebracketPrint = ' See your percentage breakdown of salary by tax band: ' + percentagebracket1 + '% between £0 to £10k';
       taxband1 = 0;
       taxbandPrint = ' and, here is your breakdown of tax paid at each band: £' + taxband1 + ' at 0%.';
  }
  else {
    taxPrint = 'n/a';
    salaryaftertaxPrint = ' n/a';
    percentagebracketPrint = ' n/a';
    taxbandPrint = ' n/a'
  }
  return [taxPrint, salaryaftertaxPrint, percentagebracketPrint, taxbandPrint];
}}

window.onload = function () {
  document.getElementById("calculate").onclick = calculateTax;
}
