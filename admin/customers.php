<?php

include('database.php');
include("header.php");
include("sidebar.php");
$query="SELECT * FROM user";
$users=db::getRecords($query);
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
				<span class="breadcrumb-item active">Customers</span>
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
							<h2 class="p-3">Customers</h2>
						</div>
					</div>
					<div class="row m-2">
						<div class="col-md-12">
							<table class="table table-bordered table-responsive-sm">
								<tr>
									<th>#</th>
									<th>Image</th>
									<th>Name</th>
									<th>Password</th>
									<th>Email</th>
									<th>Number of Orders</th>
								</tr>
								<?php
								if ($users) {
									foreach ($users as $key => $user) {
									    $ids=$user['id'];
									    $read="SELECT * FROM orders WHERE customer_id='$ids'";
									    $counter=db::query($read)->num_rows;
										$key = $key + 1;
										echo '<tr>';
										if($user['image']!=""){
											$img=$user['image'];
										}else{
											$img="dummy.webp";
										}
										echo '<td>' . $key . '</td>';
										echo '<td><img src="../images/'.$img.'" style="width:80%;height:80px;border-radius:80px"></td>';
										echo '<td>' . $user['name'].'</td>';
										echo '<td>' . $user['password'].'</td>';
										echo '<td style="text-transform:capitalize!important"><span style="text-transform:capitalize!important">' . $user['email'].'</span></td>';
										echo '<td>' . $counter.'</td>';
										echo '</tr>';
									}
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