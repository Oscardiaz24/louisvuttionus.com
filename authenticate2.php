<?php 
require_once 'config2.php';
require_once('database.php');
if(isset($_REQUEST['code'])){
	header('Location: authenticate2.php');
}
############ Set Fb access token ############
if(isset($_SESSION['fb_token'])){
		$facebook->setDefaultAccessToken($_SESSION['fb_token']);
}
else{
	$_SESSION['fb_token'] = (string) $accessToken;
	$oAuth2Client = $facebook->getOAuth2Client();
	$longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($_SESSION['fb_token']);
	$_SESSION['fb_token'] = (string) $longLivedAccessToken;
	$facebook->setDefaultAccessToken($_SESSION['fb_token']);
}
############ Fetch data from graph api  ############
try {
	$profileRequest = $facebook->get('/me?fields=name,first_name,last_name,email,link,gender,locale,birthday,cover,picture.type(large)');
	$fbuserData = $profileRequest->getGraphNode()->asArray();
} catch(FacebookResponseException $e) {
	echo 'Graph returned an error: ' . $e->getMessage();
	session_destroy();
	header("Location: ./");
	exit;
} catch(FacebookSDKException $e) {
	echo 'Facebook SDK returned an error: ' . $e->getMessage();
	session_destroy();
	header("Location: ./");
	exit;
}
############ Store data in database  ############
$oauthpro = "facebook";
$oauthid = $fbuserData['id'] ?? '';
$f_name = $fbuserData['first_name'] ?? '';
$l_name = $fbuserData['last_name'] ?? '';
$gender = $fbuserData['gender'] ?? '';
$email_id = $fbuserData['email'] ?? '';
$locale = $fbuserData['locale'] ?? '';
$cover = $fbuserData['cover']['source'] ?? '';
$picture = $fbuserData['picture']['url'] ?? '';
$url = $fbuserData['link'] ?? '';
$sql = "SELECT * FROM user WHERE email='$email_id'";
$counter=db::query($sql)->num_rows;
if($counter<1){
		$name=$f_name." ".$l_name;
		$email=$email_id;
		$query="INSERT INTO user (id,name,email,password,status,verification_code,verification_status,image,address,phone) VALUES ('','$name','$email','','1','','','','','')";
		$res = db::query($query);
		if($res){
			$w="SELECT * FROM user WHERE email='$email'";
			$data=db::getRecord($w);
			$did=$data['id'];
			$_SESSION['id'] = $did;
			header("Location:index.php?status=6");
		}
}else{
	$email=$email_id;
	$w="SELECT * FROM user WHERE email='$email'";
	$data=db::getRecord($w);
	$did=$data['id'];
	$_SESSION['id'] = $did;
	header("Location:index.php?status=6");
}
?>