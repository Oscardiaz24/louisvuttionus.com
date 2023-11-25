<?php

session_start();



//require_once("database.php");

//

//$db = db::open();



$conn = new mysqli('localhost', 'kooldesi_luis', 'Ewi6M{A[R)iR', 'kooldesi_luisupdated');

if($conn->connect_error){

    die("Connection failed: ". $conn->connect_error);

}





    $email = $_POST['email'];

    $password = $_POST['password'];




    $query = "SELECT * FROM user WHERE password='$password' AND email='$email'";
  
    $result = $conn->query($query);
    
    if($result->num_rows > 0){
            
        $rec = $result->fetch_assoc();
       
    }else{

        $rec = false;

    }



    if (!empty($rec)) {

        if($rec['status'] == 1){



            $_SESSION['admin'] = 'admin';

            $url = "dashboard.php";

            header('Location:'. $url);



        }

    }





$conn->close();

