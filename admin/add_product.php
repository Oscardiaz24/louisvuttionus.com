<?php



include('database.php');

include("header.php");

include("sidebar.php");

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

				<span class="breadcrumb-item active">Add Product's</span>

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

							<h2 class="p-3">Add Product's</h2>

						</div>

					</div>



					<div class="row m-2">

						<div class="col-md-12">

						<form method="POST" action="action.php" enctype="multipart/form-data">

								<label>Heading</label>
								<input type="text" class="form-control" placeholder="Enter Product Heading" name="heading" required>

								<label class="mt-3">Description</label>
								<textarea class="form-control" name="dcp" required></textarea>

								<label class="mt-3">Price $</label>
								<input type="number" class="form-control" placeholder="Enter Product Price" name="price" required>

								<label class="mt-3">Cover Image</label>
								<input type="file" class="form-control" name="image" required>

								<label class="mt-3">Discount (%)</label>
								<input type="number" class="form-control" placeholder="Enter Discount" name="discount" min="1" required>

								<label class="mt-3">Choose Color</label>
								<select class="form-control" name="color">
									<option value="Beige">Beige</option>
									<!-- Add more color options as needed -->
								</select>

								<!-- Fields for Variants -->
								<div class="mt-3 variant-container">
									<label>Variant Details</label>
									<div class="variant-item">
										<input type="text" class="form-control" placeholder="Enter Variant Name" name="variant_names[]" required>
										<input type="number" class="form-control" placeholder="Enter Variant Price" name="variant_prices[]" required>
										<input type="file" class="form-control" name="variant_images[]" required>
									</div>
								</div>

								<!-- Button to dynamically add more variant fields -->
								<button type="button" class="btn btn-outline-primary mt-2" id="addVariant">Add Another Variant</button>

								<div class="row mt-3">
									<div class="col-md-3 mx-auto">
										<button type="submit" class="btn btn-outline-success w-100" name="add_products">Submit</button>
									</div>
								</div>
							</form>

							<!-- JavaScript to dynamically add more variant fields -->
							<script>
								document.getElementById('addVariant').addEventListener('click', function () {
									var variantContainer = document.querySelector('.variant-container');
									var newVariantItem = document.querySelector('.variant-item').cloneNode(true);
									variantContainer.appendChild(newVariantItem);
								});
							</script>


							<!-- <form method="POST" action="action.php" enctype="multipart/form-data">

								<label>Heading</label>

								<input type="text" class="form-control" placeholder="Enter Product Heading" name="heading" required>

								<label class="mt-3">Description</label>

								<textarea class="form-control" name="dcp" required></textarea>

								<label class="mt-3">Price $</label>

								<input type="number" class="form-control" placeholder="Enter Product" name="price" required>

								<label class="mt-3">Cover Image</label>

								<input type="file" class="form-control"  name="image" required>

								<label class="mt-3">Discount (%)</label>

								<input type="number" class="form-control" placeholder="Enter Price" name="discount" min="1" required>

								<label class="mt-3">Choose Color</label>

								<select class="form-control" name="color">

								    <option value="Beige">Beige</option>

								    <option value="Black">Black</option>

								    <option value="Blue">Blue</option>

								    <option value="Brown">Brown</option>

								    <option value="Cream">Cream</option>

								    <option value="Grey">Grey</option>

								    <option value="Khaki">Khaki</option>

								    <option value="Navy">Navy</option>

								    <option value="Red">Red</option>

								    <option value="Silver">Silver</option>

								    <option value="White">White</option>

								</select>

								<label class="mt-3">Add Images</label>

								<input type="file" class="form-control"  name="images[]" multiple>

								<div class="row mt-3">

									<div class="col-md-3 mx-auto">

										<button type="submit" class="btn btn-outline-success w-100" name="add_products">Submit</button>

									</div>

								</div>

							</form> -->

						</div>

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