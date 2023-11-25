<?php
session_start();

require_once("database.php");

$db = db::open();
if (isset($_POST['login'])) {

	$email = $_POST['email'];

	$password = $_POST['password'];

	$query = "SELECT * FROM user WHERE password='$password' AND email='$email'";
    echo $query;
    exit;
	$rec = db::getRecord($query);

	if (!empty($rec)) {

		if($rec['status']=="1"){

			if($rec['verification_status']=="1"){

				$_SESSION['id'] = $rec['id'];

				if(isset($_SESSION["shopping_cart"]) && !empty($_SESSION["shopping_cart"])){

				    echo "<script>location='checkout.php'</script>";

				}

			}

		}

	}

}