<?php
require_once('database.php');
$status=$_POST['status'];
$id=$_POST['id'];
$q1="UPDATE orders SET status='$status' WHERE id='$id'";
$update=db::query($q1);
echo $status;
?>