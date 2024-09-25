<?php

//var_dump($_SERVER["REQUEST_METHOD"]);
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $ingelogd = false;
    $account = false;
    include 'db_connection.php';
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);

    if(empty($email))
    {
        echo '<script src="../js/loginError.js"></script>';
        echo '<script> 
                localStorage.setItem("error", "email");
                window.location.href = "../login.html";
              </script>';
        exit();
    }

    if(empty($password))
    {
      // Geef error wachtwoord is niet ingevuld;
      echo '<script src="../js/loginError.js"></script>';
      echo '<script>
               localStorage.setItem("error", "password");
               window.location.href = "../login.html"; 
            </script>';
      exit();
    }

    $conn = OpenCon();
    echo "Connected Successfully";
    echo "<br>";
    $firstname;
    $lastname;

    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        if($row["email"] == $email && $row["password"] == $password) {
          $firstname = $row["firstname"];
          $lastname = $row["lastname"];
          $ingelogd = true;

          break;
        } elseif ($row["email"] == $email)
        {
          echo "Email is het zelfde";
          $account = true;
          break;
        }
      }
    } else {
      echo "0 results";
    }

    if($ingelogd) {
      echo '<script src="../js/login.js"></script>';
      echo '<script>
              localStorage.setItem("voornaam", "' . $firstname . '");
              localStorage.setItem("achternaam", "' . $lastname . '");
              window.location.href = "../profiel.html";
              login();         
            </script>';
    } elseif ($account) {
      echo '<script src="../js/loginError.js"></script>';
      echo '<script>
              localStorage.setItem("error", "onjuist");
              window.location.href = "../login.html"; 
            </script>';
    } else{
      echo '<script src="../js/loginError.js"></script>';
      echo '<script>
              localStorage.setItem("error", "account");
              window.location.href = "../login.html"; 
            </script>';
    }

    CloseCon($conn);
}
else
{
    Header("Location: ../home.html");
}
