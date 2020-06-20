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
    <label>Amount Required from Savings Pool:</label><br>
    <label>$</label><input type="text" id = "savings" /> <br><br>
    <label>Reciprocity Points:</label><br>
    <label></label><input type="text" id = "points" /> <br><br>
    <label>Loan Duration:</label><br>
    <label></label><input type="text" id = "duration" /> <br><br>
    <label>Repayment Amount per Month:</label><br>
    <label>$</label><input type="text" id = "other" /> <br><br>
    <input type="button" value="Calculate" name="calculate" id = "calculate" /> <br><br>
    <label>Loan Repayment Breakdown:</label><br><br>
    <textarea name="text" rows="8" cols="50" wrap="soft" id="tax"></textarea>
</section>
<script src="script.js"></script>
</body>
</html>
