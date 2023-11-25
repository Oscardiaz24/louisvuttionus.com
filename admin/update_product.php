<?php

include('database.php');

include("header.php");

include("sidebar.php");

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    // Fetch product details
    $query_product = "SELECT * FROM product WHERE id='$id'";
    $product = db::getRecord($query_product);

    // Fetch existing variants
    $query_variants = "SELECT * FROM product_variants WHERE product_id='$id'";
    $variants = db::getRecords($query_variants);
	// print_r($variants);
	// exit;
}
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

				<span class="breadcrumb-item active">Update Product's</span>

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

							<h2 class="p-3">Update Product's</h2>

						</div>

					</div>



					<div class="row m-2">

						<div class="col-md-12">
						<form method="POST" action="action.php" enctype="multipart/form-data">
    <!-- Existing product details -->
    <label>Heading</label>
    <input type="text" class="form-control" placeholder="Enter Your Heading" name="heading" value="<?php echo $product['heading']; ?>" required>

    <label>Description</label>
    <textarea class="form-control" name="dcp" required><?php echo $product['description']; ?></textarea>

    <label>Price $</label>
    <input type="number" class="form-control" placeholder="Enter Your Price" name="price" value="<?php echo $product['price']; ?>" required>

			<label>Image</label>
			<input type="file" class="form-control" name="image">

    <label>Discount (%)</label>
    <input type="number" class="form-control" placeholder="Enter Discount" name="discount" value="<?php echo $product['discount']; ?>" min="1">

    <label>Choose Color</label>
    <select class="form-control" name="color">
        <option value="Beige" <?php echo ($product['color'] == 'Beige') ? 'selected' : ''; ?>>Beige</option>
        <option value="Black" <?php echo ($product['color'] == 'Black') ? 'selected' : ''; ?>>Black</option>
        <option value="Blue" <?php echo ($product['color'] == 'Blue') ? 'selected' : ''; ?>>Blue</option>
        <option value="Brown" <?php echo ($product['color'] == 'Brown') ? 'selected' : ''; ?>>Brown</option>
        <option value="Cream" <?php echo ($product['color'] == 'Cream') ? 'selected' : ''; ?>>Cream</option>
        <option value="Grey" <?php echo ($product['color'] == 'Grey') ? 'selected' : ''; ?>>Grey</option>
        <option value="Khaki" <?php echo ($product['color'] == 'Khaki') ? 'selected' : ''; ?>>Khaki</option>
        <option value="Navy" <?php echo ($product['color'] == 'Navy') ? 'selected' : ''; ?>>Navy</option>
        <option value="Red" <?php echo ($product['color'] == 'Red') ? 'selected' : ''; ?>>Red</option>
        <option value="Silver" <?php echo ($product['color'] == 'Silver') ? 'selected' : ''; ?>>Silver</option>
        <option value="White" <?php echo ($product['color'] == 'White') ? 'selected' : ''; ?>>White</option>
    </select>
	<div class="mt-3 variant-container">
    <!-- Display existing variants -->
	
    <?php if (isset($variants) && !empty($variants)) { ?>
        <h3>Existing Variants</h3>
        <?php foreach ($variants as $variant) { ?>
			<div class="variant-item">
            <label>Variant Name</label>
            <input type="text" class="form-control" name="variant_names[]" value="<?php echo $variant['variant_name']; ?>" required>
			<input type="hidden" name="variant_ids[]" value="<?php echo $variant['variant_id']; ?>">

            <label>Variant Price $</label>
            <input type="number" class="form-control" name="variant_prices[]" value="<?php echo $variant['variant_price']; ?>" required>
			<?php if (isset($variant['variant_image'])): ?>
				<label>Variant Image</label></br>
                <img src="uploads/<?php echo $variant['variant_image']; ?>" class="variant-image-preview" name="variant_images[]" width="100" height="100" alt="Variant Image"></br></br>
            <?php endif; ?>
			<!-- Button to dynamically remove this variant -->
			
			 <!-- <button type="button" class="btn btn-outline-danger remove-variant" data-index="<?php echo $index; ?>">Remove Variant</button> -->
			 </div>
			<?php } ?>
    <?php } ?>
		</div> 
		
 

    <!-- Button to dynamically add more variant fields -->
	<!-- <button type="button" class="btn btn-outline-primary mt-2" id="addVariant">Add Another Variant</button> -->

   

    <div class="row mt-3">
        <div class="col-md-3 mx-auto">
            <input type="hidden" name="id" value="<?php echo $id; ?>">
            <button type="submit" name="update_product" class="btn btn-outline-success w-100">Update</button>
        </div>
    </div>
</form>

							<!-- <form method="POST" action="action.php" enctype="multipart/form-data">

								<label>Heading</label>

								<input type="text" class="form-control" placeholder="Enter Your Heading" name="heading" value="<?php  echo $product['heading']; ?>" required>

								<label class="mt-3">Description</label>

								<textarea class="form-control" name="dcp" required><?php  echo $product['description']; ?></textarea>

								<label class="mt-3">Price $</label>

								<input type="number" class="form-control" placeholder="Enter Your Price" name="price" value="<?php  echo $product['price']; ?>" required>

								<label class="mt-3">Image</label>

								<input type="file" class="form-control" name="image">

								<label class="mt-3">Discount (%)</label>

								<input type="number" class="form-control" placeholder="Enter Discount" name="discount" value="<?php echo $product['discount']; ?>" min="1">

								<label class="mt-3">Choose Color</label>

								<select class="form-control" name="color">

								    <option value="Beige" <?php if($product['color']=='Beige') {echo"selected";} ?> >Beige</option>

								    <option value="Black" <?php if($product['color']=='Black') {echo"selected";} ?>>Black</option>

								    <option value="Blue" <?php if($product['color']=='Blue') {echo"selected";} ?>>Blue</option>

								    <option value="Brown" <?php if($product['color']=='Brown') {echo"selected";} ?>>Brown</option>

								    <option value="Cream" <?php if($product['color']=='Cream') {echo"selected";} ?>>Cream</option>

								    <option value="Grey" <?php if($product['color']=='Grey') {echo"selected";} ?>>Grey</option>

								    <option value="Khaki" <?php if($product['color']=='Khaki') {echo"selected";} ?>>Khaki</option>

								    <option value="Navy" <?php if($product['color']=='Navy') {echo"selected";} ?>>Navy</option>

								    <option value="Red" <?php if($product['color']=='Red') {echo"selected";} ?>>Red</option>

								    <option value="Silver" <?php if($product['color']=='Silver') {echo"selected";} ?>>Silver</option>

								    <option value="White" <?php if($product['color']=='White') {echo"selected";} ?>>White</option>

								</select>

								<input type="hidden" name="id" value="<?php  echo $id; ?>">

								<div class="row mt-3">

									<div class="col-md-3 mx-auto">

										<button type="submit" name="update_product" class="btn btn-outline-success w-100" >Update</button>

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
    document.getElementById('addVariant').addEventListener('click', function () {
        var variantContainer = document.querySelector('.variant-container');
        
        // Create new variant item
        var newVariantItem = document.createElement('div');
        newVariantItem.className = 'variant-item';

        // Add variant inputs
        newVariantItem.innerHTML = ` <label>Variant Name</label>
            <input type="text" class="form-control" placeholder="Enter Variant Name" name="new_variant_names[]" required>
			<label>Variant Price $</label>
            <input type="number" class="form-control" placeholder="Enter Variant Price" name="new_variant_prices[]" required>
			<label>Variant Image</label>
            <input type="file" class="form-control" name="new_variant_images[]" required>
			<button type="button" class="btn btn-outline-danger remove-variant" data-index="new">Remove Variant</button>

        `;

        // Append new variant item to the container
        variantContainer.appendChild(newVariantItem);
    });

	document.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-variant')) {
            var variantItem = e.target.closest('.variant-item');
            variantItem.remove();
        }
    });
</script>

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