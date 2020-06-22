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
    <label>Savings Balance (latest TASP monthly report page 8 & 9):</label><br>
    <label>$</label><input type="text" id = "savings-amount" /> <br><br>
    <label>Reciprocity Points Balance (latest TASP monthly report page 10):</label><br>
    <label></label><input type="text" id = "savings-points" /> <br><br>
    <label>How much do you need to borrow? (including your savings in the pool):</label><br>
    <label>$</label><input type="text" id = "loan-amount" /> <br><br>
    <label>How much can you pay back each month?:</label><br>
    <label>$</label><input type="text" id = "repayment-amount" /> <br><br>
    <input type="button" value="Calculate" name="calculate" id = "calculate" /> <br><br>
    <label>Time Taken to Repay Reciprocity Points:</label><br><br>
    <textarea name="text" rows="8" cols="50" wrap="soft" id="points-payback-time"></textarea>
</section>
<script src="script.js"></script>
</body>
</html>
