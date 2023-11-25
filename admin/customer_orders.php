<?php

include('database.php');
include("header.php");
include("sidebar.php");
$query="SELECT * FROM orders order by id DESC";
$orders=db::getRecords($query);

?>

<html>
<head>
	<style>
		.dtHorizontalExampleWrapper {
			overflow-x: auto;
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
			color: white;
		}
		.btn-success{
			background-color:#4caf50 !important;
		}
	</style>

	<!-- Include DataTables CSS -->
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">

</head>
</html>

<!-- Main content -->
<div class="content-wrapper">
	<!-- Page header -->
	<div class="page-header page-header-light">
		<div class="page-header-content header-elements-md-inline">
			<div class="page-title d-flex">
				<a href="index.php" class="breadcrumb-item"><i class="icon-home2 mr-2"></i>Admin Panel</a>
				<span class="breadcrumb-item active">Orders</span>
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
					<div class="card-body">
						<div class="row p-3">
							<div class="col-md-6">
								<h2>Orders</h2>
							</div>
						</div>
						<div class="row mt-2">
							<div class="col-md-12">
								<div class="dtHorizontalExampleWrapper">
									<table id="dtHorizontalExample" class="table table-bordered table-responsive-sm">
										<thead>
											<tr>
												<th>#</th>
												<th>Order Date</th>
												<th>Customer Name</th>
												<th>Total Amount</th>
												<th>Address</th>
												<th>House Number</th>
												<th>Status</th>
												<th>Details</th>
												<th>Note</th>
												<th>Payment Via</th>
											</tr>
										</thead>
										<tbody>
											<?php
											if ($orders) {
												foreach ($orders as $key => $order) {
												    $cus=$order['customer_id'];
												    $q="SELECT * FROM user WHERE id='$cus'";
												    $name=db::getRecord($q);
													$key = $key + 1;
													echo '<tr>';
													echo '<td>' . $key . '</td>';
													echo '<td>' . $order['order_date'] . '</td>';
													echo '<td>' . $name['name'] . '</td>';
													echo '<td> $' . $order['total_amount'] . ' </td>';
													echo '<td>' . $order['address'] . '</td>';
													echo '<td>' . $order['house_number'] . '</td>';
													echo '<td>
															<div class="checkbox">
																<input type="checkbox" name="status" id="status_' . $order['id'] . '"';
														
													if ($order['status'] == "0") {
														echo ' checked';
													}else{
													    echo ' disabled';
													}
													
													echo ' onchange="hello(' . $order['id'] . ')" class="common" />
																</div>
																<input type="hidden" name="hidden_status" class="hidden_status" value="Active" />
																<input type="hidden" name="seller_id" value="' . $order['id'] . '" id="seller_id">
															</td>';
													echo '<td><a href="order_details.php?id=' . $order['id'] . '" class="btn btn-primary btn-sm">Order Detail</a></td>';
													echo'<td>'.$order['order_note'].'</td>';
													echo'<td>'.$order['payment_method'].'</td>';
													echo '</tr>';
												}
											}
											?>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /support tickets -->
			</div>
		</div>
	</div>

<?php
include("footer.php");
?>
<!-- Include DataTables JS -->
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>

<script type="text/javascript">
	$('.common').bootstrapToggle({
		on: 'Active',
		off: 'Delivered',
		onstyle: 'primary',
		offstyle: 'success'
	});
	function hello(sid){
		$(document).ready(function(){
			if($("#status_"+sid).prop('checked'))
			{
				$(".hidden_status").val('0');
				var w=$(".hidden_status").val();
			}
			else
			{
				$('.hidden_status').val('1');
				var w=$(".hidden_status").val();
			}
			$.ajax({
				url:'order_status.php',
				type:'POST',
				data: {status:w,id:sid},
				success:function(status){
				    if(status=="1"){
				        $("#status_"+sid).attr("disabled",true);
				    }
				}
			});
		});
	}
</script>

<script>
	$(document).ready(function () {
		$('#dtHorizontalExample').DataTable({
			"scrollX": true
		});
	});
</script>
