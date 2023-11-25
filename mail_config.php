<?php
// Include PHPMailer library
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

function send_mail($email, $subject, $body){
    // Create a new PHPMailer instance
    $mail = new PHPMailer();

    // Set SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.googlemail.com';  // Change this to your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'support@mixalovertech.com';  // Replace with your email address
    $mail->Password = 'pbzpsmdanwspkaur';  // Replace with your email password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;  // You may need to change the port number if your SMTP server uses a different port
    $mail->setFrom('support@mixalovertech.com', 'Mixalovertech');
    $mail->addAddress($email);
    $mail->Subject = $subject;
    $mail->isHTML(true); 
    $mail->Body = $body;

    return $mail->send();

}


?>