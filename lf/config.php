<?php

session_start();
##### DB Configuration #####
$servername = "localhost";
$username = "root";
$password = "";
$db = "louis";

##### Google App Configuration #####
$googleappid = "693454825685-r222fa6vpfa3ui4ev2befaha9bn7nhcu.apps.googleusercontent.com"; 
$googleappsecret = "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"; 
// $redirectURL = "http://localhost:81/LoginwithGoogle/authenticate.php"; 
$redirectURL = "http://localhost/lf/authenticate.php"; 

##### Create connection #####
$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
##### Required Library #####
include_once 'src/Google/Google_Client.php';
include_once 'src/Google/contrib/Google_Oauth2Service.php';

$googleClient = new Google_Client();
$googleClient->setApplicationName('Login to CodeCastra.com');
$googleClient->setClientId($googleappid);
$googleClient->setClientSecret($googleappsecret);
$googleClient->setRedirectUri($redirectURL);

$google_oauthV2 = new Google_Oauth2Service($googleClient);

?>