<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Canterbury Savings Pool - Loan Calculator</title>

  <link rel="stylesheet" type="text/css" href="stylesheet.css" media="screen" />
</head>

<body>
<header><h1>Canterbury Savings Pool - Loan Calculator</h1></header>
  <br>
  <br>
  <section>
    <label>Savings Balance (latest TASP monthly report page 8 & 9):</label><br>
    <label>$</label><input type="number" step='20' min='0' id = "savings-amount" required/> <br><br>
    <label>Reciprocity Points Balance (latest TASP monthly report page 10):</label><br>
    <label></label><input type="number" step='100' min='0' id = "savings-points" required/> <br><br>
    <label>How much do you need to borrow? (including your savings in the pool):</label><br>
    <label>$</label><input type="number" step='20' min='0' id = "loan-amount" required/>
	<label id='loan-amount-details'>(Savings + Loan amount)</label><br><br>
    <label>How much to pay back each month?:</label><br>
    <label>$</label><input type="number" step='20' min='0' id = "repayment-amount" required/> <br><br>
    <!--<input type="button" value="Calculate" name="calculate" id = "calculate"/> <br><br>-->
    <label>Time Taken to Repay Loan:   </label><h3 id='payback-time'></h3>
	<div class="slidecontainer">
		<input type="range" min="0" max="120" step='1' value="12" class="slider" id="myRange">
	</div>
	<br><br>
	<label>Final Savings Balance:</label>
	<label id='savings-amount-final'></label><br><br>
	<label>Final Points Balance:</label>
	<label id='savings-points-final'></label><br><br>
  </section>
  <script src="script.js"></script>
</body>
</html>
