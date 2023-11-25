<?php

include('database.php');
include("header.php");
include("sidebar.php");
$id=$_GET['id'];
$q="SELECT * FROM order_items WHERE order_id='$id'";
$recs=db::getRecords($q);
$total_price=0;
$query="SELECT * FROM orders WHERE id='$id'";
$amount=db::getRecord($query);
?>

<html>
<head>
	<style>
		.dtHorizontalExampleWrapper {
			max-width: 600px;
			margin: 0 auto;
		}
		#dtHorizontalExample th, td {
			white-space: nowrap;
		}

		table.dataTable thead .sorting:after,
		table.dataTable thead .sorting:before,
		table.dataTable thead .sorting_asc:after,
		table.dataTable thead .sorting_asc:before,
		table.dataTable thead .sorting_asc_disabled:after,
		table.dataTable thead .sorting_asc_disabled:before,
		table.dataTable thead .sorting_desc:after,
		table.dataTable thead .sorting_desc:before,
		table.dataTable thead .sorting_desc_disabled:after,
		table.dataTable thead .sorting_desc_disabled:before {
			bottom: .5em;
		}
		.text{
			color: white
		}
	</style>

	<script>
		$(document).ready(function () {
			$('#dtHorizontalExample').DataTable({
				"scrollX": true
			});
			$('.dataTables_length').addClass('bs-select');
		});
	</script>

</head>
</html>
<!-- Main content -->
<div class="content-wrapper">

	<!-- Page header -->
	<div class="page-header page-header-light">
		<div class="page-header-content header-elements-md-inline">
			<div class="page-title d-flex">
				<a href="index.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i>Admin Panel</a>
				<span class="breadcrumb-item active">Order Detail</span>
			</div>

			<div class="header-elements d-none">

			</div>
		</div>


	</div>
	<!-- /page header -->

	<!-- Content area -->
	<div class="content">

		<div class="row">
			<div class="col-xl-12">

				<div class="card">
					<div class="row p-3">
						<div class="col-md-6">
							<h2 class="p-3">Order Detail</h2>
						</div>
					</div>
					<div class="row m-2">
						<div class="col-md-12">
							<table class="table table-bordered table-responsive-sm">
								<tr>
									<th>#</th>
									<th>Product Name</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Total Price</th>
								</tr>
								<?php
								if($recs){
									foreach ($recs as $key => $rec) {
										$tp=$rec['quantity']*$rec['price'];
										$key=$key+1;
										$total_price=$total_price+$tp;
										echo'<tr>';
										echo'<td>'.$key.'</td>';
										$pid=$rec['product_id'];
										$get="SELECT * FROM product WHERE id='$pid'";
										$name=db::getRecord($get);
										echo'<td>'.$name['heading'].'</td>';
										echo'<td>'.$rec['quantity'].'</td>';
										echo'<td> $'.$rec['price'].'  </td>';
										echo'<td> $'.$tp.'  </td>';
										echo'</tr>';
									}
									$total=$total_price;
									echo'<tr align="center">';
									echo'<td colspan="14">Total : '.$total.' $</td>';
									echo'</tr>';


								}
								?>
							</table>
						</div>
						
					</div>
				</div>
				<!-- /support tickets -->
			</div>
		</div>
	</div>
	<script src="//cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
	<?php
		include("footer.php");            
	?>
	