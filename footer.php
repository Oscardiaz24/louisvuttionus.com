<?php 

  session_start();

  require_once('database.php');

?>
<style>
  i.fab{
    color:black;
  }
</style>
<section class="footer">

  <div class="container-fluid">

    <div class="row">

      <div class="col-md-3">

        <h3 class="footer_heading ">HELP</h3>
        
        <p class="footer_paragraph mt-5">Our Client Advisors are available to assist you by email at <a href="mailto:LouisVuittonCustomerServices@outlook.com">LouisVuittonCustomerServices@o<br>utlook.com</a></p>



        <ul class="ul_list">

          <li>FAQs</li>

          <li>Product Care</li>

          <li>Stores</li>

        </ul>

      </div>



      <div class="col-md-3">

        <h3 class="footer_heading">SERVICES</h3>



        <ul class="ul_list mt-5">

          <li>Repairs</li>

          <li>Personalization</li>

          <li>Art of Gifting</li>

          <li>Download our Apps</li>

        </ul>

      </div>



      <div class="col-md-3">

        <h3 class="footer_heading">ABOUT LOUIS VUITTON</h3>



        <ul class="ul_list mt-5">

          <li>Fashion Shows</li>

          <li>Arts & Culture</li>

          <li>La Maison</li>

          <li>Sustainability</li>

          <li>Latest News</li>

          <li>Careers</li>

          <li>Foundation Louis Vuitton</li>

        </ul>

      </div>



      <div class="col-md-3">

        <h3 class="footer_heading ">CONNECT</h3>

        <p class="footer_paragraph mt-5">Sign up for the latest news from the Maison, including exclusive online pre-launches for new collections.</p>



        <h3 class="footer_heading mt-5">Follow Us</h3>

        <ul class="ul_list_main">

          <li><a href="https://www.instagram.com/louisvuitton/"><i class="fab fa-instagram fa-2x"></a></i></li>

          <li><a href="https://www.facebook.com/LouisVuitton/"><i class="fab fa-facebook-f fa-2x"></a></i></li>

          <li><a href="https://twitter.com/LouisVuitton?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter fa-2x"></a></i></li>

          <li><a href="https://www.linkedin.com/company/louis-vuitton/"><i class="fab fa-linkedin-in fa-2x"></a></i></li>

        </ul>

      </div>

    </div>

  </div>

</section>

<section class="mini_footer">

  <div class="container">

    <div class="row ">

      <div class="col-md-11 mx-auto">

        <ul class="ul_list_main footer_row" style="justify-content: center;">

          <li>Sitemap</li>

          <li>Legal Notices</li>

          <li> Privacy Policy</li>

          <li>California Supply Chains Act</li>

          <li>Do Not Sell or Share My Personal Information</li>

        </ul>

      </div>

    </div>



    <div class="row">

      <div class="col-md-4 mx-auto">

        <img class="img-fluid" src="assets/images/download1.webp">

      </div>

    </div>

  </div>

</section>



<section class="navbar_section home_section">

  <div class="container-fluid">

    <div class="row">

      <div class="col-md-4 text-right main_col">

        <button class="btn-step2"><i class="fas fa-times fa-3x close_tag"></i></button>



        <div class="row mt-5">

          <div class="col-md-10">

            <ul class="ul_list">

              <li><a href="index.php" class="navbar_a">HOME</a></li>

              <li><a href="email.php" class="navbar_a">Email Us</a></li>

              <?php if(!isset($_SESSION['id'])){ ?>

                <li><a href="members.php" class="navbar_a">Members</a></li>

              <?php }?>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>



<section class="navbar_section_main ">

  <div class="container-fluid">

    <div class="row">

      <div class="col-md-9"></div>

      <div class="col-md-3 main_col">

        <div class="row navbar_row">

          <div class="col-md-2">

            <button class="btn-step4"><i class="fas fa-times fa-3x close_tag1"></i></button>

          </div>

          <div class="col-md-10 cart_heading">

            <h3>Cart</h3>

          </div>

        </div>

        <div class="load">

            

        </div>

        <!--<div class="row mt-5">

          <div class="col-md-12">

            <div class="row">

              <div class="col-md-4">

                <img src="assets/images/download16.webp" class="w-100">

              </div>

              <div class="col-md-8">

                <p class="detail_pargraph" style="font-size: 21px;">Pochette Accessoires</p>

                <p class="price">$900.00</p>

                <input class="form" style="width: 50%;" type = "number" min = "0" value = "1">

              </div>

            </div>



            <div class="row mt-5 pt-5">

              <div class="col-md-12">

                <a href="cart.php" class="btn btn-secondary">View Cart</a>

              </div>

            </div>

          </div>

        </div>-->

      </div>

    </div>

  </div>

</section>











<!-- Optional JavaScript -->

<!-- jQuery first, then Popper.js, then Bootstrap JS -->

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



<script>

  $(document).ready(function(){

  // jquery code here



  });

  $(".btn-step1").click(function() {

    $(".navbar_section").show();

  });

  $(".btn-step2").click(function() {

    $(".navbar_section").hide();

  });

  $(".btn-step3").click(function() {

    $(".navbar_section_main").show();

  });

  $(".btn-step4").click(function() {

    $(".navbar_section_main").hide();

  });

</script>

 <script type="text/javascript">

    // $(document).ready(function(){

    //      setInterval(function(){

    //       $.ajax({

    //         type:'GET',

    //         url:'load_widget_area.php',

    //         success:function(data2){

    //             $(".load").html(data2);

    //         }

    //       });   

    //      },1000);

    // }); 

</script>



</body>

</html>