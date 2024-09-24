<?php

//var_dump($_SERVER["REQUEST_METHOD"]);
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $ingelogd = false;
    include 'db_connection.php';
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);

    $conn = OpenCon();
    echo "Connected Successfully";
    echo "<br>";

    $sql = "SELECT email, password FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        if($row["email"] == $email && $row["password"] == $password) {
          $ingelogd = true;
          break;
        }
      }
    } else {
      echo "0 results";
    }

    if($ingelogd) {
      echo "Je bent nu ingelogd";
    } else {
      echo "Geen account gevonden";
    }

    CloseCon($conn);
}
else
{
    Header("Location: ../home.html");
}
