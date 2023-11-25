<?php
session_start();
$con=mysqli_connect('localhost','ateckwgz_louis','atecco@123','ateckwgz_louis');
$name=mysqli_real_escape_string($con,$_POST['name']);
$id=mysqli_real_escape_string($con,$_POST['id']);
echo $name;
echo $id;
die;
$res=mysqli_query($con,"select * from user where id='$id'");
$_SESSION['FB_ID']=$id;
$_SESSION['FB_NAME']=$name;
if(mysqli_num_rows($res)>0){
	echo"Exist";
}else{
	mysqli_query($con,"insert into user(id,name) values('','$name')");
	echo"Not Exist";
}
?>