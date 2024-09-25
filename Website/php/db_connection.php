<?php

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