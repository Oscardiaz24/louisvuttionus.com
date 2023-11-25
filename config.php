<?php





##### DB Configuration #####

$servername = "localhost";

$username = "kooldev2luis";

$password = "Ewi6M{A[R)iR";

$db = "kooldesi_luisupdated";



##### Google App Configuration #####

$googleappid = "976230310952-bnedq33etes8v9s9i1v0n6k8lp6f7h35.apps.googleusercontent.com"; 

$googleappsecret = "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"; 

$redirectURL = "https://louisvuttioncaus.com/authenticate.php"; 



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