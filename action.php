<?php

session_start();

require_once("database.php");



// Clear Cart Item One By One 

$db = db::open();

// Import PHPMailer classes into the global namespace 

use PHPMailer\PHPMailer\PHPMailer; 

use PHPMailer\PHPMailer\SMTP; 

use PHPMailer\PHPMailer\Exception; 



// Include library files 

require 'PHPMailer/src/Exception.php'; 

require 'PHPMailer/src/PHPMailer.php'; 

require 'PHPMailer/src/SMTP.php';  

// Create a new PHPMailer object

$mail = new PHPMailer(true); // Enable exceptions

$mail->SMTPOptions = array(

	'ssl' => array(

		'verify_peer' => false,

		'verify_peer_name' => false,

		'allow_self_signed' => true

	)

);

// Set the SMTP server configuration

$mail->isSMTP(); // Set mailer to use SMTP

$mail->Host = 'smtp.gmail.com'; // Specify the SMTP server

$mail->Port = 465; // Specify the SMTP port (usually 587 for TLS)

$mail->SMTPSecure = 'ssl'; // Enable TLS encryption

$mail->SMTPAuth = true; // Enable SMTP authentication

$mail->Username = 'fahadmanzoor680@gmail.com'; // SMTP username

$mail->Password = 'abipjpbybhhovwnr'; // SMTP password



if (isset($_GET['action']) && $_GET['action'] == 'remove') {
    $code = $_GET['code'];
    unset($_SESSION['shopping_cart'][$code]);
    header('Location: cart.php');
}

if (isset($_SESSION['shopping_cart'])) {
    foreach ($_SESSION['shopping_cart'] as $key => $product) {
        if ($product['code'] == $code) {
            unset($_SESSION['shopping_cart'][$key]);
            header('Location: cart.php');
        }
    }
}




if(isset($_POST['add_to_cart'])){

	if (isset($_POST['id']) && $_POST['id'] != "") {

	    $code = $_POST['id'];

	    $result = "SELECT * FROM `product` WHERE `id`='$code'";

	    $row = db::getRecord($result);

	    $name = $row['heading'];

	    $price = $row['discount'] != "" ? ($row['price'] - ($row['price'] * $row['discount']) / 100) : $row['price'];

	    $image = $row['image'];

	    $quantity=1;

	    $cartArray = array(

	        'name' => $name,

	        'price' => $price,

	        'quantity' => 1,

	        'code' => $_POST['id'],

	        'image' => $image

	    );

	    if (empty($_SESSION["shopping_cart"])) {

	        $_SESSION["shopping_cart"] = array($cartArray);

	    } else {

	        foreach ($_SESSION['shopping_cart'] as &$product) {

	            if ($product['code'] == $code) {

	                $product['quantity'] = $product['quantity']+$quantity;

	                $found = true;

	                break;

	            }

	        }

	        if (!$found) {

	            $_SESSION["shopping_cart"][] = $cartArray;

	        }

	    }

	}

	echo "<script>location='cart.php'</script>";

}

if (isset($_POST['add_register'])) {

	$name = $db->real_escape_string($_POST['name']);

	$email = $db->real_escape_string($_POST['email']);

	$password = $db->real_escape_string($_POST['password']);

	$query_check_email = "SELECT COUNT(*) as counter FROM user WHERE email='$email'";

	$counter = db::query($query_check_email)->fetch_assoc()['counter'];

	$status=1;

	if($counter<1){

		function generateVerificationCode($length = 6) {

			$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

			$code = '';



			for ($i = 0; $i < $length; $i++) {

				$randomIndex = rand(0, strlen($characters) - 1);

				$code .= $characters[$randomIndex];

			}



			return $code;

		}

		$verification_code=generateVerificationCode();

		$query_insert = "INSERT INTO `user` (`id`,`name`,`email`,`password`,`status`,`verification_code`,`verification_status`) VALUES ('','$name','$email','$password','$status','$verification_code','1')";

		$register=db::query($query_insert);

		if($register){

			echo "<script>alert('Registered ! Now you can login with your account')</script>";

			echo "<script>location='index.php'</script>";

		}

	}else{

		echo "<script>alert('Email Already Exist')</script>";

		echo "<script>location='index.php'</script>";

	}

}

if (isset($_POST['login'])) { 

	$email = $_POST['email'];

	$password = $_POST['password'];

    $query = "SELECT * FROM user WHERE password='$password' AND email='$email'";



	$rec = db::getRecord($query);

	if (!empty($rec)) {

		if($rec['status']=="1"){

			if($rec['verification_status']=="1"){

				$_SESSION['id'] = $rec['id'];

				if(isset($_SESSION["shopping_cart"]) && !empty($_SESSION["shopping_cart"])){

				    echo "<script>location='checkout.php'</script>";

				}else{

				    echo "<script>location='index.php?status=6'</script>";

				}

			}else{

				echo "<script>alert('Your Email is not verified')</script>";

				echo "<script>location='index.php'</script>";   

			}

		}else{

			echo "<script>alert('You are Blocked')</script>";

			echo "<script>location='index.php'</script>";

		}

	} else {

		echo "<script>alert('Wrong Credentials !')</script>";

		echo "<script>location='index.php'</script>";

	}

}

if(isset($_GET['wid'])){

    $id=$_GET['wid'];

    $del="DELETE FROM wishlist WHERE id='$id'";

    $ins=db::query($del);

    if($ins){

        echo "<script>alert('Product is removed from your wishlist !')</script>";

		echo "<script>location='wishlist.php'</script>";

    }

}

if(isset($_GET['logout'])){

    unset($_SESSION['id']);

    unset($_SESSION['name']);

    echo"<script>location='index.php'</script>";

}

if(isset($_POST['paynoww'])){

	$_SESSION['Checkout']=$_POST;

	header('location:stripe/payment.php');

}

if(isset($_POST['update_profile'])){

    $name=$_POST['name'];

    $email=$_POST['email'];

    $password=$_POST['password'];

    $id=$_POST['id'];

    $query="UPDATE user SET name='$name',password='$password',email='$email' WHERE id='$id'";

    $sql=db::query($query);

    if($sql){

        echo"<script>alert('Profile Updated')</script>";

        echo"<script>location='profile.php'</script>";

    }

}

