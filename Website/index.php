<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Next Step Solutions</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/top-button.css">
    <link rel="stylesheet" href="css/navbar.css">
</head>
<body>
    <div class="wrapper">
        <h1>Home Pagina</h1>
    </div>
    
    <!-- navigatie bar -->
    <nav>
        <!-- Site logo -->
        <label class="logo">Nextstep Solutions</label>
        <!-- Navigation links -->
        <ul>
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="werken.html">Werken bij ons</a></li>
            <li><a href="solliciteer.html">Solliciteren</a></li>
            <li><a id="logout-button" onclick="logout()">Log uit</a></li>
            <li><a id="login-button" href="login.html">Log in</a></li>
            <li><a id="profiel-button" href="profiel.html">Profiel</a></li>
        </ul>
    </nav>

    <!-- top button -->
    <div id="top-button">
        <a href="#top">
            <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F316">
                <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
            </svg>
        </a>
    </div>

    <!-- top button script -->
    <script src="/js/top-button.js"></script>
    <script src="/js/login.js"></script>
</body>
</html>