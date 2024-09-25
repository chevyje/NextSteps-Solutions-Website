<?php

//var_dump($_SERVER["REQUEST_METHOD"]);
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    include 'db_connection.php';
    $firstname = htmlspecialchars($_POST['voornaam']);
    $lastname = htmlspecialchars($_POST['achternaam']);
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);
    $passwordconfirm = htmlspecialchars($_POST["password-confirm"]);

    if($password != $passwordconfirm)
    {
        Header("Location: ../registreer.html");
        exit();
    }

    if(empty($firstname) || empty($lastname) || empty($email) || empty($password) || empty($passwordconfirm))
    {
        Header("Location: ../registreer.html");
        exit();
    }
    
    $conn = OpenCon();
    echo "Connection succesfully";
    echo "<br>";

    $sql2 = "SELECT email FROM users";
    $result = $conn->query($sql2);

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        if($row["email"] == $email) {
          Header("Location: ../registreer.html");
          exit();
        }
      }
    } else {
      echo "0 results";
    }

    echo "Connected Successfully";
    echo "<br>";

    $sql = "INSERT INTO users (firstname, lastname, email, password)
            VALUES ('$firstname', '$lastname', '$email', '$password')";

    echo $sql;
    echo "<br>";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        Header("Location: ../login.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    CloseCon($conn);
}
else
{
    Header("Location: ../home.html");
}
