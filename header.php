<?php 

error_reporting(0);

session_start();

    require_once("database.php");

    $qty=0;

?>

<!doctype html>

<html lang="en">

<head>

  <!-- Required meta tags -->

  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="stylesheet" type="text/css" href="assets/css/style.css">

    <title>HOME | Louis Vuitton</title>

  <!-- Bootstrap CSS -->

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@700&family=Caladea&family=Caveat:wght@700&family=Crimson+Text:ital,wght@1,600&family=Dancing+Script&family=EB+Garamond:wght@600;800&family=Jost:wght@600&family=Lato&family=Libre+Baskerville:wght@700&family=Lobster&family=Merriweather:ital,wght@0,300;0,700;1,400&family=Montserrat+Subrayada:wght@700&family=Montserrat:wght@400;600&family=Noto+Serif+Toto:wght@600&family=Pacifico&family=Playfair+Display+SC&family=Playfair+Display:wght@500&family=Poppins:ital,wght@0,400;0,500;0,600;0,800;1,400;1,500&family=Raleway:ital,wght@0,400;1,100;1,400&family=Roboto&family=Sacramento&family=Signika+Negative:wght@500&family=Teko:wght@400;500&family=Yanone+Kaffeesatz&display=swap" rel="stylesheet">



  <title>Hello, world!</title>

  <style>

    .cart-icon {

  position: relative;

  display: flex;

  align-items: center;

  cursor: pointer;

}



.cart-icon i {

  font-size: 24px;

  color: #333;

}



.cart-counter {

  position: absolute;

  top: -10px;

  left:20px;

  background-color: red;

  color: white;

  border-radius: 50%;

  padding: 3px 6px;

  font-size: 12px;

}

.dropbtn {

     font-family: 'Montserrat', sans-serif !important;

    font-size: 13px !Important;

}



.dropdown {

  position: relative;

  display: inline-block;

  width:100%;

}



.dropdown-content {

  display: none;

  position: absolute;

  background-color: #f1f1f1;

  min-width: 110px;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

  z-index: 1;

}



.dropdown-content a {

  color: black;

  padding: 12px 16px;

  text-decoration: none;

  display: block;

}
.tab_img{
  display: none;
}



.dropdown:hover .dropdown-content {display: block;}



/*.dropdown:hover .dropbtn {background-color: #3e8e41;}*/

@media (max-width: 992px){
  .banner_img{
    display: flex;
    align-items: center;
  }
  .tab_img{
      max-width: 30px;
      width: 220px;
      display: block;
    }
}

@media (max-width: 768px){
  .tab_img{
    display: none;
  }
}

  </style>

</head>



<body>



  <section class="header">

    <div class="container-fluid">

      <div class="row">

        <div class="col-md-3">

          <div class="row">

            <div class="col-md-4 col-4">

              <button class="btn-step1"><img src="assets/images/download.webp"></button>

            </div>

            <div class="col-md-8 col-8">

              <input style="border: none !important;" type="search" class="form-control" placeholder="Search">

            </div>

          </div>

        </div>



        <div class="col-md-6 text-center banner_img">

          <a href="index.php"><img class="img-fluid" src="assets/images/download1.webp"></a>
          <a href="index.php"><img  class="tab_img" src="assets/images/logo.jpg"></a>

        </div>



        <div class="col-md-3 banner_col">

          <div class="row main_row ">

            <div class="col-md-4 col-4 text-center">

              <a class="widget" href="wishlist.php">Wishlist</a>

            </div>

            <div class="col-md-2 col-4 text-center">

               <!--<div class="cart-icon btn-step3">

                    <div class="cart-icon-shape">

                      <div class="cart-handle"></div>

                     

                       <span class="cart-counter count"><?php echo $qty; ?></span>

                    </div>

                  </div>-->

                   <div class="cart-icon btn-step3">

                    <i class="fas fa-shopping-cart"></i>

                     <?php

                            if(!empty($_SESSION["shopping_cart"])) {

                                 foreach ($_SESSION['shopping_cart'] as $product) {

                                    $qty=$qty+$product['quantity'];

                                }

                            }

                            $total_price=0;

                        ?>

                    <span class="cart-counter count"><?php echo $qty; ?></span>

                  </div>

            </div>

            <div class="col-md-6 col-4 text-center">

                <?php

                    if(isset($_SESSION['id'])){

                        $sid=$_SESSION['id'];

                        $w="SELECT * FROM user WHERE id='$sid'";

                        $data=db::getRecord($w);

                        $name=$data['name'];

                    }else{

                        $name="<a href='members.php'>MyLiv</a>";

                    }

                ?>

              <?php if(isset($_SESSION['id'])){ ?>

                    <div class="dropdown">

                      <button class="dropbtn"><?php echo $name; ?></button>

                      <div class="dropdown-content">

                        <a href="wishlist.php">My Wishlist</a>

                        <a href="myorders.php">My Orders</a>

                        <a href="profile.php">Profile</a>

                        <a href="action.php?logout">Logout</a>

                      </div>

                    </div>

              <?php }else{ ?>

                    <i class="fas fa-user-circle fa-2x"></i><span style="margin-left: 5px;color: #3174e8;"><?php echo $name; ?></span>

              <?php } ?>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>





  <section class="mobile_header" >

    <div class="container-fluid">

      <div class="row">

        <div class="col-md-2 col-4">

          <input style="margin-top: 0px !important;" type="search" class="form-control" placeholder="Search">

        </div>

        <div class="col-md-6 col-4">

          <img style="margin-top: 15px;" src="assets/images/download1.webp" class="w-100">

        </div>

        <div class="col-md-4 col-4">

          <div class="row">

            <div class="col-md-4 col-5">

              <h1 style="font-size: 12px;font-family: montserrat,sans-serif;color: black;margin-top: 15px;">Wishlist</h1>

            </div>

            <div class="col-md-4 col-4">

              <svg style="background: white;width: 20px;    margin-top: -19px;" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 164.9 196.4" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-9"><text x="84" y="131" dy=".35em" text-anchor="middle" class="bGBBgJ jDuYHa" data-hook="items-count" style="color:green;font-size:90px;background-color:pink"></text><path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path><path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path></svg>

            </div>

            <div class="col-md-4 col-2">

              <svg style="background: white;width: 20px;    margin-top: 0px;" data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<script>

    $(document).ready(function(){

      // setInterval(function(){

      //     $.ajax({

      //       type:'GET',

      //       url:'update_cartvalue.php',

      //       success:function(data){

      //           console.log(data);

      //           $(".count").html(data);

      //       }

      //     });   

      //    },1000);

    });

</script>



 