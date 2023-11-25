<?php

include('database.php');
include("header.php");
include("sidebar.php");
$id=$_GET['id'];
$query = "SELECT * FROM product WHERE id='$id'";
$rec = db::getRecord($query);


$query2 = "SELECT * FROM product_images WHERE product_id='$id'";
$images = db::getRecords($query2);
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
				<span class="breadcrumb-item active">Product's</span>
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

				<div class="card p-3">
					<div class="row">
						<div class="col-md-6">
							<h2>Product Detail</h2>
						</div>
					</div>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6 mx-auto">
                            <img src="uploads/<?php echo $rec['image']; ?>" class="img-fluid" style="height:400px">
                        </div>
                        <div class="col-md-3"></div>
                    </div>
					<div class="row mt-3">
					    <div class="col-md-6">
					        <h6><b>Product Name</b> : <?php echo $rec['heading']; ?></h6>

					    </div>
                        <div class="col-md-6">
                            <?php
								if($rec['discount']!= ""){
									$read = ($rec['price'] * $rec['discount'])/100;
									$price = $rec['price'] - $read;
								}else{
									$price = $rec['price'];
								}
							?>
                             <h6><b>Product Price</b> : $<?php echo $price; ?></h6>
                        </div>
					</div>
					<div class="row">
					    <div class="col-md-6">
					        <?php
					            if($rec['discount']!=""){
					                $discount=$rec['discount']."%";
					            }else{
					                $discount="0"."%";
					            }


					        ?>
					        <h6><b>Discount :</b> <?php echo $discount; ?></h6>
					    </div>
                        <div class="col-md-6">
                             <h6><b>Product Color :</b> <?php echo $rec['color']; ?></h6>
                        </div>
					</div>
					<div class="row">
					    <div class="col-md-12">
					        <h6><b>Description :</b> <?php echo $rec['description'];?></h6>
					    </div>
					</div>

					    <?php if($images){ ?>
					            	<div class="row">
                					    <div class="col-md-12 mt-4">
                					         <h3>Product Images</h3>
                					    </div>
                					</div>
                					<div class="row p-3 m-2">
					   <?php
					            foreach($images as $img){ ?>
					              <div class="col-md-4 mb-3">
					                  <img src="uploads/<?php echo $img['image']; ?>" width="100%" class="mb-3">
					                  <a href="action.php?del_product_image=<?php echo $img['id']; ?>" class="btn btn-primary">Delete</a>
					              </div>
					   <?php

					            } ?>
					            </div>
					   <?php     }
					    ?>

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