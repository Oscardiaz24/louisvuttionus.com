<?php
session_start();
require_once("database.php");

if(!isset($_SESSION['admin']))
{
	echo "<script>location='index.php'</script>";
}

?>

<?php

require_once("database.php");

?>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Louis Vuitton</title>
	<link rel="shortcut icon" type="image/x-icon" href="image/download5.jpg">

	<!-- Global stylesheets -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
	<link href="global_assets/css/icons/icomoon/styles.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/colors.min.css" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap" rel="stylesheet">

	<!-- /global stylesheets -->




	<!-- Core JS files -->
	<script src="global_assets/js/main/jquery.min.js"></script>
	<script src="global_assets/js/main/bootstrap.bundle.min.js"></script>
	<script src="global_assets/js/plugins/loaders/blockui.min.js"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="global_assets/js/plugins/visualization/d3/d3.min.js"></script>
	<script src="global_assets/js/plugins/visualization/d3/d3_tooltip.js"></script>
	<script src="global_assets/js/plugins/forms/styling/switchery.min.js"></script>
	<script src="global_assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
	<script src="global_assets/js/plugins/ui/moment/moment.min.js"></script>
	<script src="global_assets/js/plugins/pickers/daterangepicker.js"></script>

	<script src="assets/js/app.js"></script>
	<script src="global_assets/js/demo_pages/dashboard.js"></script>
	<!-- /theme JS files -->


	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


	<!-- Theme JS files -->
	<script src="global_assets/js/plugins/forms/styling/uniform.min.js"></script>

	<script src="global_assets/js/plugins/forms/inputs/touchspin.min.js"></script>

	<script src="global_assets/js/demo_pages/form_input_groups.js"></script>
	<!-- /theme JS files -->



	<!-- Theme JS files -->
	<script src="global_assets/js/plugins/tables/datatables/datatables.min.js"></script>
	<script src="global_assets/js/plugins/forms/selects/select2.min.js"></script>
	<script src="global_assets/js/demo_pages/datatables_basic.js"></script>

	<!-- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->
	<!-- <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">
	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
    <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
	<style>
		@font-face 
		{
			font-family: 'Poppins', sans-serif;
			src: url(assets/css/font2/trebuc.ttf);
		}
		body{
			font-family: 'Poppins', sans-serif;
		}
		.myinput
		{
			border-radius: 20px;

		}

		th{
			font-size: 15px;
			text-transform: capitalize;
		}

		td{
			font-size: 16px;
			text-transform: capitalize;    
		}

		.form-control
		{
			height: 50px !important;

		}

		.black{color: black;}

		.navbar-dark{
			background:#4d2b78 !important;
		}
		.sidebar-dark{
			background:#4d2b78 !important;
		}
		.navbar-light{
			background:#4d2b78 !important;
		}
		.btn-outline-success{
			color:#4d2b78 !important;
			background-color: transparent !important;
			background-image: none !important;
			border-color:#4d2b78 !important;
		}
		.btn-outline-primary {
			color:#4d2b78 !important;
			background-color: transparent !important;
			background-image: none !important;
			border-color: #4d2b78 !important;
		}
		.btn-success {
			color: #fff !important;
			background-color: #4d2b78 !important;
		}
		.sidebar-dark .nav-sidebar .nav-link{
			font-size: 17px !important;
		}
		.btn-outline-primary:hover{
			color: #fff !important;
			background-color: #4d2b78 !important;
			border-color: #4d2b78 !important;
		}
		.sidebar-dark .nav-sidebar .nav-link:not(.disabled):hover{
			color: #fff !important;
			background-color: rgb(63 63 63) !important;
		}
		.main_card{
			box-shadow: 0px 0px 20px 0px #4d2b78b0 !important;
			border-radius: 20px;

		}
		.header-elements-md-inline{
			box-shadow: 3px 9px 20px 10px #4d2b78 !important;
		}
		.sidebar-dark .sidebar-mobile-toggler:not([class*=bg-]) {
			background-color: #4d2b78 !important;
		}
		.navbar-light .navbar-toggler {
			color: white !important;
		}
		.btn-outline-success:hover{
			color: #fff !important;
			background-color: #4d2b78 !important;
			border-color: #4d2b78 !important;
		}
	</style>

	<script>




		$(document).ready(function() {
			var maxLength = 50;
			$('textarea').keyup(function() {
				var textlen = maxLength - $(this).val().length;
				$('#rchars').text(textlen);
			});

			$('#txtDate1').change(function() {  
				if($('#txtDate').val()!=""&&$('#txtDate1').val()!="")
				{
					if($('#txtDate').val()==$('#txtDate1').val())
					{
						alert("Dates can't be same");
					}
				}
			});

		});


	</script>


</head>

<body>

	<!-- Main navbar -->
	<div class="navbar navbar-expand-md navbar-dark">
		<div class="navbar-brand" style="padding:0px;">
			<a href="dashboard.php" class="d-inline-block">
				<!--<img src="image/download5.jpg" style="height: 90px;">-->
				<!-- <h3 style="color:white;margin-top:10px;">Parkos</h3> -->
			</a>
		</div>

		<div class="d-md-none">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
				<i class="icon-tree5"></i>
			</button>
			<button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
				<i class="icon-paragraph-justify3"></i>
			</button>
		</div>

		<div class="collapse navbar-collapse" id="navbar-mobile">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
						<i class="icon-paragraph-justify3"></i>
					</a>
				</li>

				
			</ul>

			<span class="badge bg-success ml-md-3 mr-md-auto" style="    background:#4d2b78 !important  ;color:#4d2b78 !important ;">Online</span>

			<ul class="navbar-nav">

				<li class="nav-item dropdown dropdown-user">
					<a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
						<span>Admin
						</span>
					</a>

					<div class="dropdown-menu dropdown-menu-right">
						<a href="action.php?adminlogout" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<!-- /main navbar -->

