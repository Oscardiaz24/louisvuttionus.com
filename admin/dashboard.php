<?php
include("header.php");
include("sidebar.php");
require_once("database.php");


$query="SELECT * FROM product";
$counter=db::query($query)->num_rows;

$query3="SELECT * FROM orders";
$counter3=db::query($query3)->num_rows;

?>

<!-- Main content -->
<div class="content-wrapper">

	<!-- Page header -->
	<div class="page-header page-header-light">
		<div class="page-header-content header-elements-md-inline">
			<div class="page-title d-flex">
				<a href="dashboard.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
				<span class="breadcrumb-item active">Dashboard</span>
			</div>

			<div class="header-elements d-none">
				<div class="d-flex justify-content-center">
					
				</div>
			</div>
		</div>
	</div>
	<!-- /page header -->


	<!-- Content area -->
	<div class="content">
		<div class="row">
			<div class="col-md-6">
				<div class="card main_card" style="background:white;padding: 20px;">
					<div class="card-body text-center">
						<a href="product.php" style="color:black">
						<i class="fa fa-product-hunt fa-2x" style="font-size:36px;"></i>
							<h1 style="margin-top: 12px;">Products</h1>
							<h3 style="margin-top: 12px;"><?php echo $counter; ?></h3>
						</a>
					</div>
				</div>
			</div>
		
			<div class="col-md-6">
				<div class="card main_card" style="background:white;padding: 20px;">
					<div class="card-body text-center">
						<a href="customer_orders.php" style="color:black">
						<i class="fa fa-shopping-cart fa-2x" style="font-size:36px;"></i>
							<h1 style="margin-top: 12px;">Orders</h1>
							<h3 style="margin-top: 12px;"><?php echo $counter3; ?></h3>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /content area -->

	<?php
	require_once("footer.php");

?>