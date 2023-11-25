<?php
session_start();
if(!isset($_SESSION['id'])){
    echo"<script>location='members.php'</script>";
}
require_once("header.php");
require_once("database.php");
$id=$_GET['id'];
$uid=$_SESSION['id'];
if(isset($_GET['id'])){
    
    $read="SELECT * FROM wishlist WHERE user_id='$uid' AND product_id='$id'";
    $counter=db::query($read)->num_rows;
    if($counter<1){
        $ins="INSERT INTO wishlist VALUES('','$uid','$id')";
        $query=db::query($ins);
        if($query){
            echo"<script>alert('Product Added To Wishlist')</script>";
            echo"<script>location='wishlist.php'</script>";
        }
    }else{
        echo"<script>alert('This Product is Already Added To Wishlist')</script>";
        echo"<script>location='wishlist.php'</script>";
    }
}
$q2="SELECT * FROM wishlist WHERE user_id='$uid'";
$recs=db::getRecords($q2);

?>
<style>
    .quantity-input {
            display: flex;
            /align-items: center;
            /justify-content:center;
        
            background-color: #fff;
            border-radius: 4px;
      
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .quantity-input button {
            width: 200px;
            padding:5px 10px 10px 10px;
            height: 40px;
            background-color: #f5f5f5;
            border: none;
            cursor: pointer;
            font-size: 20px;
            transition: background-color 0.3s ease;
        }

        .quantity-input button:hover {
            background-color: #e0e0e0;
        }

        .quantity-input input {
            width: 70px;
            height: 40px;
            text-align: center;
            border: none;
            font-size: 18px;
        }
</style>


<section style="padding-top: 100px;padding-bottom: 100px;">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h4 class="cart_section">My Wishlist</h4>
				<?php if($recs){ 
				    foreach($recs as $rec){
				        $ids=$rec['product_id'];
				        $y="SELECT * FROM product WHERE id='$ids'";
				        $product=db::getRecord($y);
				?>
				<div class="row border_card">
					<div class="col-md-2">
						<img class="w-100" src="admin/uploads/<?php echo $product['image']; ?>">
					</div>
					<div class="col-md-4 mt-3">
						<p class="detail_pargraph"><?php echo $product['heading']; ?></p>
						<p class="price">$<?php echo $product['price']; ?></p>
						<span class="detail_pargraph">Color: <?php echo $product['color']; ?></span>
						<form method='post' action='action.php'>
						      <input type='hidden' name='id' value="<?php echo $rec['product_id']; ?>" />
		                  <?php
                            if (isset($_SESSION['shopping_cart']) && $_SESSION['shopping_cart']!="") {
                                $displayButton = true;
                                foreach ($_SESSION['shopping_cart'] as $pro) {
                                    if ($pro['code'] == $rec['product_id']) {
                                        $displayButton = false;
                                        break;
                                    }
                                }
                            if ($displayButton) {
                                ?>
                                <button name="add_to_cart" type="submit" class="re btn btn-secondary btn-sm" style="width:50%;padding: 15px;border-radius: 100px;background: #990000;border: none;" >Add To Cart</button>
                                <?php
                            }
                        }
                        ?>
                         </form>
					</div>
					<div class="col-md-1 text-right mt-3">
						<a href="action.php?wid=<?php echo $rec['id']; ?>"><i style="color:black" class="fas fa-times close_tag1"></i></a>
					</div>
				</div>
				<?php }
				}?>
			</div>
		</div>
	</div>
</section>


<?php
require_once("footer.php")
?>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <h1 class="modal_heading">We can't accept online orders right now</h1>
        <p class="modal_paragraph">Please contact us to complete your purchase.</p>
        <div class="row">
        	<div class="col-md-3 mx-auto">
        		<a href="checkout.php" class="btn btn-secondary">Got It</a>
        	</div>
        </div>
      </div>
    </div>
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
