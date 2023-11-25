<?php

include('database.php');
include("header.php");
include("sidebar.php");


$query="SELECT * from testimonial";
$recs=db::getRecords($query);
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
				<span class="breadcrumb-item active">Testimonial</span>
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
							<h2 class="p-3">Testimonial</h2>
						</div>
						<div class="col-md-6 text-right">
							<a href="add_testimonial.php" class="btn btn-outline-success">Add Testimonial</a>
						</div>
					</div>

					<div class="row m-2">

						<?php
						if($recs)
						{
							foreach($recs as $rec)
							{
								?>
								<div class="col-md-4">
									<div class="card main_card">
										<div class="card-body">
											<img src="uploads/<?php  echo $rec['image'] ?>" style="width:100%">
											<h1 class="mt-3"><?php  echo $rec['name'] ?></h1>
											<p class="mt-3"><?php  echo $rec['dcp'] ?></p>

											<div class="row">
												<div class="col-md-6 col-6">
													<a href="update_testimonial.php?id=<?php  echo $rec['id']; ?>" class="btn btn-outline-primary w-100">Edit</a>
												</div>
												<div class="col-md-6 col-6">
													<a href="action.php?del_testimonial=<?php  echo $rec['id']; ?>" class="btn btn-outline-danger w-100">Trash</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<?php
							}
						}
						?>
					</div>
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