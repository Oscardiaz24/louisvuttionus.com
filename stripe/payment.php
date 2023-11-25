<?php
session_start();
require_once('../database.php');


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

if(isset($_SESSION['Checkout'])){
    $price = $_SESSION['Checkout']['price'];
    $email = $_SESSION['Checkout']['email'];
    $f_name = $_SESSION['Checkout']['fname'];
    $l_name = $_SESSION['Checkout']['lname'];
    if(isset($_SESSION['Checkout']['customer_id']) && $_SESSION['customer_id']!=""){
        $customer_id = $_SESSION['Checkout']['customer_id'];
    }else{
        $query_check_email = "SELECT COUNT(*) as counter FROM user WHERE email='$email'";
        $counter = db::query($query_check_email)->fetch_assoc()['counter'];
        $rec=db::getRecord($query_check_email);
        $qu = "SELECT * FROM user WHERE email='$email'";
        $re=db::getRecord($qu);
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
            $status=1;
            function generateRandomPassword($length = 12) {
                $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                $password = '';
                $character_count = strlen($characters) - 1;

                for ($i = 0; $i < $length; $i++) {
                    $password .= $characters[mt_rand(0, $character_count)];
                }

                return $password;
            }
            $randomPassword = generateRandomPassword();
            $uname=$f_name." ".$l_name;
            $query_insert = "INSERT INTO `user` (`id`,`name`,`email`,`password`,`status`,`verification_code`,`verification_status`) VALUES ('','$uname','$email','$randomPassword','$status','$verification_code','1')";
            $register=db::query($query_insert);
             $read="SELECT * FROM user ORDER BY ID DESC LIMIT 1";
             $user=db::getRecord($read);
             $customer_id=$user['id'];
             $cust_password=$user['password'];
             $cust_email=$user['email'];
             if($register){
                   echo "<script>alert('Your Account Created !')</script>";
            } 
    }else{
        $email=$re['email'];
        $customer_id=$re['id'];
    } 
}
    $order_date = date("Y-m-d");
    $address = $_SESSION['Checkout']['address'];
    $house_number = $_SESSION['Checkout']['house_number'];
    $post_code = $_SESSION['Checkout']['post_code'];
    $order_note = $_SESSION['Checkout']['order_note'];
    $ins="INSERT INTO `orders`(`id`, `customer_id`, `total_amount`, `order_date`,`address`,`house_number`,`postal_code`,`order_note`,`payment_method`) VALUES ('','$customer_id','$price','$order_date','$address','$house_number','$post_code','$order_note','stripe')";
    $placed=db::query($ins);
    if($placed){
        $last_order="SELECT * FROM orders ORDER BY id DESC limit 1";
        $data=db::getRecord($last_order);
        $order_id=$data['id'];//Get Last Order ID
        if(isset($_SESSION['shopping_cart'])){  
            foreach ($_SESSION["shopping_cart"] as $product){
                $qty=$product['quantity'];
                $price=$product['price'];
                $pid=$product['code'];
                $data_insert="INSERT INTO `order_items`(`id`, `order_id`, `product_id`, `quantity`, `price`) VALUES ('','$order_id','$pid','$qty','$price')";
                $saved=db::query($data_insert);
                if($saved){
                    unset($_SESSION['Checkout']);
                    unset($_SESSION['shopping_cart']);
                    if(isset($_SESSION['id'])){
                        echo"<script>alert('Your Order has been successfully placed')</script>";
                        echo"<script>location='../myorders.php'</script>";
                    }else{
                        $_SESSION['id']=$customer_id;
                        echo"<script>location='../index.php?status=6'</script>";
                    }
                }
            }
        }
    }
}
?>