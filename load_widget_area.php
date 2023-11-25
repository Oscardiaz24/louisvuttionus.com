<?php
    session_start();
    require_once("database.php"); 
    $total_price=0;
    if(isset($_SESSION['shopping_cart'])){
        if(!empty($_SESSION['shopping_cart'])){
            foreach ($_SESSION["shopping_cart"] as $product){
                $total_price=$total_price+($product['price']*$product['quantity']);
                echo'<div class="row mt-5">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-4">
                        <img src="admin/uploads/'.$product['image'].'" class="w-100">
                      </div>
                      <div class="col-md-8">
                        <p class="detail_pargraph" style="font-size: 21px;"</p>
                        <p class="price">$'.$product['price'].'</p>
                        <input class="form mt-3" style="width: 50%;" type="number" min="0" value = "'.$product['quantity'].'" readonly>
                      </div>
                    </div>
                  </div>
                </div>';
            }
            echo'
                    <div class="row mt-5 pt-5">
                      <div class="col-md-12">
                        <a href="cart.php" class="btn btn-secondary">View Cart</a>
                      </div>
                    </div>
                    <div class="cart-footer mt-3">
                    <div class="shopping-cart-total"><strong>Subtotal :</strong> $'.$total_price.'</div>
                    <div class="shopping-cart-total"><strong>Delivery Charges : </strong> Free</div>
                     <div class="shopping-cart-total"><strong>Total Amount : </strong> $'.$total_price.'</div>
                 </div>';
            }else{
                echo'<div class="row">
                    <div class="col-md-12">
                        <h6 class="text-danger">Your Cart is Empty</h6>
                    </div>
                </div>';
            }
    }else if(!isset($_SESSION['shopping_cart'])){
          echo'<div class="row">
                <div class="col-md-12">
                    <h6 class="text-danger">Your Cart is Empty</h6>
                </div>
            </div>';
    }
?>


















