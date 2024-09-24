<?php

//var_dump($_SERVER["REQUEST_METHOD"]);
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);

    echo $email;
    echo "<br>";
    echo $password;
    echo "<br>";

    $conn = OpenCon();
    echo "Connected Successfully";
    echo "<br>";

    // Insert data (do NOT insert ID, let MySQL auto-increment it)
    $sql = "INSERT INTO users (firstname, lastname, email)
            VALUES ('John', 'Doe', '$email')";

    // Debug: echo the SQL query to ensure it looks correct
    echo $sql;
    echo "<br>";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    CloseCon($conn);
}
else
{
    Header("Location: ../home.html");
}

function OpenCon()
{
$dbhost = "localhost";
$dbuser = "next";
$dbpass = "Rll9U8ufjS88Juuk";
$dbname = "nextstepsolutions";
$conn = new mysqli($dbhost, $dbuser, $dbpass,$dbname) or die("Connect failed: %s\n". $conn -> error);
return $conn;
}

function CloseCon($conn)
{
    $conn -> close();
}