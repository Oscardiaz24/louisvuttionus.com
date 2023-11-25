<?php 
session_start();
require_once 'config.php';
require_once('database.php');


if(isset($_GET['code'])){
	$googleClient->authenticate($_GET['code']);
	$_SESSION['token'] = $googleClient->getAccessToken();
	header('Location: ' . filter_var($redirectURL, FILTER_SANITIZE_URL));
}
############ Set Google access token ############
if (isset($_SESSION['token'])) {
	$googleClient->setAccessToken($_SESSION['token']);
}


if ($googleClient->getAccessToken()) {
	############ Fetch data from graph api  ############
	try {
		$gpUserProfile = $google_oauthV2->userinfo->get();
	}
	catch (\Exception $e) {
		echo 'Graph returned an error: ' . $e->getMessage();
		session_destroy();
		header("Location: ./");
		exit;
	}
	############ Store data in database  ############
	$oauthpro = "google";
	$oauthid = $gpUserProfile['id'] ?? '';
	$f_name = $gpUserProfile['given_name'] ?? '';
	$l_name = $gpUserProfile['family_name'];
	$gender = $gpUserProfile['gender'] ??  '';
	$email_id = $gpUserProfile['email'] ?? '';
	$locale = $gpUserProfile['locale'] ?? '';
	$cover = '';
	$picture = $gpUserProfile['picture'] ?? '';
	$url = $gpUserProfile['link'] ?? '';
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
} else {
	header("location:index.php?status=6");
}
?>