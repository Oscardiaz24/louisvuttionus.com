<html lang="en">



<head>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Login/Register</title>



	<!-- Global stylesheets -->

	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">

	<link href="global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">

	<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">

	<link href="assets/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">

	<link href="assets/css/layout.min.css" rel="stylesheet" type="text/css">

	<link href="assets/css/components.min.css" rel="stylesheet" type="text/css">

	<link href="assets/css/colors.min.css" rel="stylesheet" type="text/css">

	<!-- /global stylesheets -->



	<!-- Core JS files -->

	<script src="global_assets/js/main/jquery.min.js"></script>

	<script src="global_assets/js/main/bootstrap.bundle.min.js"></script>

	<script src="global_assets/js/plugins/loaders/blockui.min.js"></script>

	<!-- /core JS files -->



	<!-- Theme JS files -->

	<script src="global_assets/js/plugins/forms/styling/uniform.min.js"></script>



	<script src="assets/js/app.js"></script>

	<script src="global_assets/js/demo_pages/login.js"></script>

	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet">

	<!-- /theme JS files -->



</head>

<style>

	body{

		font-family: 'Poppins', sans-serif;

		background: linear-gradient(-102deg, #d1b48c 0%, #3f3f3f 100%) !important;

	}

	.form-control{

		height: 50px !important;

	}

	.btn-outline-primary {

		color: #d1b48c !important;

		background-color: transparent !important;

		background-image: none !important;

		border-color: #d1b48c !important;

		padding: 15px !important;

	}

	.btn-outline-primary:hover{

		color: #fff !important;

		background-color: #d1b48c !important;

		border-color: #d1b48c !important;

	}

</style>

<body  style="background-image: url(image/back.png); background-position: center;

background-repeat: no-repeat;

background-size: cover;" >



<!-- Page content -->

<div class="page-content login-cover">



	<!-- Main content -->

	<div class="content-wrapper">



		<!-- Content area -->

		<div class="content d-flex justify-content-center align-items-center">



			<!-- Login form -->

			<div class="login-form wmin-sm-400" >

				<div class="card mb-0" style="border-radius: 20px;">

					<div class="tab-content card-body">

						<div class="tab-pane fade show active" id="login-tab1">

							<div class="text-center mb-3">



								<h3>Admin panel</h3>

							</div>







							<form action="admin_login.php" method="post">

								<div class="form-group form-group-feedback form-group-feedback-left">

									<input type="text" name="email" class="form-control" placeholder="Username">

								</div>



								<div class="form-group form-group-feedback form-group-feedback-left">

									<input type="password" name="password" class="form-control" placeholder="Password">

								</div>



								<div class="form-group">

									<button type="submit" name="login" class="btn btn-outline-primary btn-block">Sign in</button> 

								</div>





							</form>

						</div>





					</div>

				</div>

			</div>

			<!-- /login form -->



		</div>

		<!-- /content area -->



	</div>

	<!-- /main content -->



</div>

<!-- /page content -->



</body>



</html>

