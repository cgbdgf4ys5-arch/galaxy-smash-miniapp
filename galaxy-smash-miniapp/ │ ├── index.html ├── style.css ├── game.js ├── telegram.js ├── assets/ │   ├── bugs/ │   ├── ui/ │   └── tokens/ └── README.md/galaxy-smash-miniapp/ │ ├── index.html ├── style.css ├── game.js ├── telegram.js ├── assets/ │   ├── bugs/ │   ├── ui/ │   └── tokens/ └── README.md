<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Galaxy Smash</title>

  <!-- Telegram WebApp SDK -->
  <script src="https://telegram.org/js/telegram-web-app.js"></script>

  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div id="welcome">
    <h1>GALAXY SMASH</h1>
    <button id="startBtn">TAP TO SMASH</button>
  </div>

  <div id="game" hidden>
    <div id="topBar">
      <span id="tokens">🪙 0</span>
      <span id="wallet">💼</span>
    </div>

    <div id="playArea"></div>
  </div>

  <script src="telegram.js"></script>
  <script src="game.js"></script>
</body>
</html>