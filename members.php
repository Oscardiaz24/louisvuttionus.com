<?php

require_once("header.php");

require_once("database.php");
// require_once("config.php");

// require_once("config2.php");

// $loginURL="";

// $authUrl = $googleClient->createAuthUrl();

// $loginURL = filter_var($authUrl, FILTER_SANITIZE_URL);



// $loginURL2 = $helper->getLoginUrl($redirectURL, $fbPermissions);

?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<section style="padding: 100px;">

  <div class="container">

    <div class="row">

      <div class="col-md-5 mx-auto">

        <h1 class="email_heading text-center">Log In to Connect With Members</h1>

        <p class="email_paragraph mt-5 text-center">View and follow other members, leave comments & more.</p>



        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">Log In

        </button>

      </div>

    </div>

  </div>

</section>

<!-- Modal -->

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">

      <div class="modal-header">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">

          <span aria-hidden="true">&times;</span>

        </button>

      </div>

      <div class="modal-body">

        <div class="row" style="padding-bottom: 50px;">

          <div class="col-md-10 mx-auto">

            <p class="member_modal login">Already a member?<a><span class="member_modal_span">Log In</span></a></p>

            <a href="#" class="btn btn-success main_success btn signup" style="font-size:16px">Sign up with Email</a>

            <div class="row">

                <!--<div class="col-md-6">

                    <a href="<?= htmlspecialchars( $loginURL2 ); ?>" class="btn btn-success main_success btn mt-3 t1"><i class="fa fa-facebook" style="font-size:18px"> Sign up with Facebook</i></a>

                </div>-->

                <div class="col-md-12">

                     <a href="<?= htmlspecialchars( $loginURL ); ?>" class="btn btn-success main_success btn mt-3 t2"><i class="fa fa-google" style="font-size:18px"> Sign up with Google</i></a>

                </div>

            </div>

          </div>

        </div>

        <div class="row s1" style="display:none">

            <div class="col-md-12 mx-auto">

                <h1 class="modal_heading text-center">Sign Up</h1>

                <form action="action.php" method="POST">

                    <label>Name:</label>

                    <input type="text" name="name" placeholder="Enter Your Name" class="form-control" required>

                    <label class="mt-3">Email:</label>

                    <input type="email" name="email" placeholder="Enter Your Email" class="form-control" required>

                    <label class="mt-3">Password:</label>

                    <input type="password" name="password" placeholder="Enter Your Password" class="form-control" required><br>

                    <input type="submit" name="add_register" value="Sign Up" class="btn btn-success btn-sm">

                    <a href="#" class="login2 btn btn-secondary">Already Registered Login</a>

                </form>

            </div>

        </div>

        <div class="row s2" style="display:none">

            <div class="col-md-12 mx-auto">

                <form action="action.php" method="POST">

                    <h1 class="modal_heading text-center">Login</h1>

                    <label>Email:</label>

                    <input type="email" name="email" placeholder="Enter Your Email" class="form-control" required>

                    <label>Password:</label>

                    <input type="password" name="password" placeholder="Enter Your Password" class="form-control" required><br>

                    <input type="submit" name="login" value="Login" class="btn btn-success btn-sm">

                    <div class="row">

                         <!--<div class="col-md-6">

                            <a href="<?= htmlspecialchars( $loginURL2 ); ?>" class="btn btn-success main_success btn mt-3"><i class="fa fa-facebook" style="font-size:20px"></i> Sign in with Facebook</a>

                        </div>-->

                        <div class="col-md-12">

                            <a href="<?= htmlspecialchars( $loginURL ); ?>" class="btn btn-success main_success btn mt-3"><i class="fa fa-google"></i>  Sign in with Google</a>

                        </div>

                    </div>

                    <a href="#" class="login btn btn-secondary signup2">Yet Have Not Account ?</a>

                </form>

            </div>

        </div>

      </div>

    </div>

  </div>

</div>



<script>

    $(document).ready(function(){

        $.noConflict();

      $(".signup").on("click",function(){

          $(".login,.signup,.s2").hide();

          $(".s1").show();

      });

      $(".login").on("click",function(){

         $(".s1,.login,.signup,.t1,.t2").hide();

         $(".s2").show();

      });

      $(".login2").on("click",function(){

         $(".s2").show();

         $(".s1").hide();

      });

      $(".signup2").on("click",function(){

         $(".s1").show();

         $(".s2").hide();

      });

    });

</script>

<?php

    require_once("footer.php")

?>