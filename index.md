<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Canterbury Savings Pool - Loan Calculator</title>

  <link rel="stylesheet" type="text/css" href="stylesheet.css" media="screen" />
  <link href="https://fonts.googleapis.com/css?family=David+Libre" rel="stylesheet">
</head>

<body>

  <header>Canterbury Savings Pool - Loan Calculator</header>
  <br>
  <br>
  <section>
    <label>Input Savings Investedy:</label><br>
    <label>£</label><input type="text" id = "savings" /> <br><br>
    <label>Input Reciprocity Points:</label><br>
    <label>£</label><input type="text" id = "points" /> <br><br>
    <label>Input Duration:</label><br>
    <label>£</label><input type="text" id = "duration" /> <br><br
    <label>Input Other:</label><br>
    <label>£</label><input type="text" id = "other" /> <br><br
    <input type="button" value="Calculate" name="calculate" id = "calculate" />
    <br><br>
  <label>Repayment Breakdown:</label>
    <br><br>
  <textarea name="text" rows="8" cols="50" wrap="soft" id="tax"></textarea>
</section>

  <script src="script.js"></script>
</body>
</html>
