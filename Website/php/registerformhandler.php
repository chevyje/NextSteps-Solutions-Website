<?php

//var_dump($_SERVER["REQUEST_METHOD"]);
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    include 'db_connection.php';
    $firstname = htmlspecialchars($_POST['voornaam']);
    $lastname = htmlspecialchars($_POST['achternaam']);
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);

    $conn = OpenCon();
    echo "Connected Successfully";
    echo "<br>";

    $sql = "INSERT INTO users (firstname, lastname, email, password)
            VALUES ('John', 'Doe', '$email', '')";

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
