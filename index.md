<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Canterbury Savings Pool - Loan Calculator</title>

  <link rel="stylesheet" type="text/css" href="stylesheet.css" media="screen" />
</head>

<body>
  <header>Canterbury Savings Pool - Loan Calculator</header>
  <br>
  <br>
  <section>
<!--   <form>
<input type="range" name="foo" min="0" max="100">
<output for="foo" onforminput="value = foo.valueAsNumber;"></output>
	</form> -->
<!--   	<div class="slidecontainerdb">
		<input type="range" min="1" max="10000" value="1000" class="sliderdb" id="savings-amount-slider">
	</div> -->
	
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
    <label>Time Taken to Repay Loan:   </label><p id='payback-time'></p><br>
	<div class="slidecontainer">
		<input type="range" min="1" max="120" value="12" class="slider" id="myRange">
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
