<?php

session_start();

##### DB Configuration #####

// $servername = "localhost";

// $username = "ateckwgz_louis";

// $password = "atecco@123";

// $db = "ateckwgz_louis";

$servername = "localhost";

$username = "kooldev2luis";

$password = "Ewi6M{A[R)iR";

$db = "kooldesi_luisupdated";


$token="";

##### FB App Configuration #####

$fbappid = "275274178790741"; 

$fbappsecret = "0abe911c4fc5b3744d79cd9b47c40475"; 

$redirectURL = "http://localhost/louis_new2/authenticate2.php"; 

$fbPermissions = ['email']; 



##### Create connection #####

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

}

##### Required Library #####

require_once 'src2/Facebook/autoload.php';

use Facebook\Facebook;

use Facebook\Exceptions\FacebookResponseException;

use Facebook\Exceptions\FacebookSDKException;



$facebook = new Facebook(array('app_id' => $fbappid, 'app_secret' => $fbappsecret, 'default_graph_version' => 'v2.10', ));

$helper = $facebook->getRedirectLoginHelper();

##### Check facebook token stored or get new access token #####

try {

	if(isset($_SESSION['fb_token'])){

		$accessToken = $_SESSION['fb_token'];

	}else{

  		$accessToken = $helper->getAccessToken();

	}

} catch(FacebookResponseException $e) {

 	echo 'Facebook Responser error: ' . $e->getMessage();

  	exit;

} catch(FacebookSDKException $e) {

	echo 'Facebook SDK error: ' . $e->getMessage();

  	exit;

}

?>