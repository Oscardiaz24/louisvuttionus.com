<?php

include('database.php');
include("header.php");
include("sidebar.php");


$query="SELECT * from delivery_charges";
$rec=db::getRecord($query);
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
				<span class="breadcrumb-item active">Delivery Charges</span>
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
							<h2>Delivery Charges</h2>
						</div>
					</div>
					<form action="action.php" method="POST">
    					<div class="row m-2">
    					    <div class="col-md-12">
    					        <label>Charges (%)</label>
    					        <input type="number" name="charges" value="<?php echo $rec['amount']; ?>" class="form-control" min="1" max="99" required>
    					    </div>
    					</div>
    					<div class="row p-3">
    					    <div class="col-md-3">
    					        <button type="submit" name="update_charge" class="btn btn-primary">Update</button>
    					    </div>
    					</div>
						</form>
				</div>
				<!-- /support tickets -->
			</div>
		</div>
	</div>

	<script>
		function deleteit(){
			return(confirm("The record will be deleted permanently. Do you really want to continue?"));
		}
		function editit(){
			return(confirm("Do you want to edit?"));
		}
	</script>
	<script src="//cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
	<?php

	include("footer.php");            

	?>
	<script>
		CKEDITOR.replace( 'dcp' );
	</script>