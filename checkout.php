<?php

session_start();

require_once("header.php");

require_once("database.php");

if(isset($_SESSION['shopping_cart'])){

            if(empty($_SESSION['shopping_cart'])){

                echo "<script>location='index.php'</script>";

            }

        }else{

            echo "<script>location='index.php'</script>"; 

        }

$sub_total=0;

?>

<section style="padding-top: 150px;background: #f6f5f3;padding-bottom: 150px">

	<div class="container" bis_skin_checked="1">

		<form method="POST" action="action.php">

			<div class="row" bis_skin_checked="1">

				<div class="col-md-8" bis_skin_checked="1">

					<div class="card" style="border: none;border-radius: 0px;" bis_skin_checked="1">

						<div class="card-body" bis_skin_checked="1">

							<h3 class="checkout_heading">1-Identification</h3>

							<div class="section" bis_skin_checked="1">

								<span class="checkout_span">In order to better assist you, please enter your email address</span>

								<br>

								<label class="mt-4">Email*</label>

								<?php 

								    if(isset($_SESSION['id'])){ 

								        $id=$_SESSION['id'];

								        $user="SELECT * FROM user WHERE id='$id'";

								        $rec=db::getRecord($user);

								    ?>

								        <input type="text" name="email" class="form-control" style="height: 50px;" value="<?php echo $rec['email']; ?>" required="" readonly>

								<?php    

								        

								    }else{ ?>

								         <input type="text" name="email" class="form-control" style="height: 50px;" required="">

								<?php }?>

								

							</div>

						</div>

					</div>



					<div class="card mt-5" style="border: none;border-radius: 0px;" bis_skin_checked="1">

						<div class="card-body" bis_skin_checked="1">

							<h3 class="checkout_heading">2-Delivery</h3>

							<div class="section1" bis_skin_checked="1">

								<br>

								<label class="mt-4">First Name*</label>

								<input type="text" name="fname" class="form-control" style="height: 50px;" required="">

								<label class="mt-4">Last Name*</label>

								<input type="text" name="lname" class="form-control" style="height: 50px;" required="">

								<label class="mt-4">Phone Number*</label>

								<input type="text" name="phone_number" class="form-control" style="height: 50px;" required="">

								<label class="mt-4">Enter Address</label>

								<input type="text" name="address" class="form-control pac-target-input" style="height: 50px;" id="address-input" required="" placeholder="Enter a location" autocomplete="off">

								<label class="mt-4">House Number*</label>

								<input type="text" name="house_number" class="form-control" style="height: 50px;" required="">

								<label class="mt-4">Post Code *</label>

								<input type="text" name="post_code" class="form-control" style="height: 50px;">

								<label class="mt-4">Order Note *</label>

								<textarea class="form-control" name="order_note" rows="10" cols="10"></textarea>

								

								

								<!--<div class="row">

								    <div class="col-md-8"></div>

								    <div class="col-md-4">

								        <a class="btn btn-secondary btn-step7" href="#checkout">Continue</a>

								    </div>

								</div>-->
								
							</div>
							<div id="paypal-button-container" style="margin-top:50px;"></div>
						</div>

					</div>

					<div class="card mt-5" style="border: none;border-radius: 0px;">

						<div class="card-body">

							<h3 class="checkout_heading">3-Place Order</h3>

								<div class="row mt-3" >

								    <div class="col-md-3">

								        <button type="submit" name="paynoww" class="btn btn-secondary">Submit</button>

								    </div>

									<div class="col-md-9">

										

									</div>

								</div>

							

						</div>

					</div>

				</div>

				<div class="col-md-4" bis_skin_checked="1">

					<div class="row" bis_skin_checked="1">

						<div class="col-md-12" bis_skin_checked="1">

							<div class="card" style="border: none;border-radius: 0px;" bis_skin_checked="1">

								<div class="card-body" bis_skin_checked="1">

									<h4 class="checkout_heading">My Shopping Cart <span></span></h4>

									<?php if(isset($_SESSION['shopping_cart'])){

                                        foreach($_SESSION['shopping_cart'] as $product){ ?>

									<div class="row" bis_skin_checked="1">

										<div class="col-md-4" bis_skin_checked="1">

											<img src="admin/uploads/<?php echo $product['image']; ?>" style="width: 100%;">

										</div>

										<div class="col-md-8" style="margin-top: 40px;" bis_skin_checked="1">

											<span class="checkout_span"><?php echo $product['name']; ?></span><br>

											<span class="checkout_span">(<?php echo $product['quantity']; ?> qty x $<?php echo $product['price']; ?>) = 

											$<?php echo $product['quantity']*$product['price']; ?></span>

										</div>

									</div>

									<?php 

                                        $sub_total=$sub_total+($product['price']*$product['quantity']);

                                        }

                                    }?>

									<div class="row" style="padding: 10px;" bis_skin_checked="1">

										<div class="col-md-6" style="font-size: 20px;" bis_skin_checked="1">

											<span class="checkout_span">Subtotal</span>

										</div>

										<div class="col-md-6" style="text-align: end;font-size: 20px;" bis_skin_checked="1">

											<span class="checkout_span">$<?php echo $sub_total; ?></span>

										</div>

									</div>

									<input type="hidden" name="price" value="<?php echo $sub_total; ?>">

									<div class="row" style="padding: 10px;" bis_skin_checked="1">

										<div class="col-md-6" style="font-size: 20px;" bis_skin_checked="1">

											<span class="checkout_span">Shipping</span>

											

										</div>

										<div class="col-md-6" style="font-size: 20px;" bis_skin_checked="1">

										    	<span class="checkout_span" style="float:right">Free</span>

										</div>

									</div>

									<div class="row" style="padding: 10px;" bis_skin_checked="1">

										<div class="col-md-6" style="font-size: 20px;" bis_skin_checked="1">

											<span class="checkout_span">Total</span>

										</div>

										<div class="col-md-6" style="text-align: end;font-size: 20px;" bis_skin_checked="1">

											<span class="checkout_span">$<?php echo $sub_total; ?></span>

										</div>

									</div>

								</div>

							</div>

							<div class="row mt-4" bis_skin_checked="1">

								<div class="col-md-12" bis_skin_checked="1">

									<div class="card" style="border: none;border-radius: 0px;" bis_skin_checked="1">

										<div class="card-body" bis_skin_checked="1">

											<div class="row" style="padding: 20px;border-bottom: 1px solid lightgray;" bis_skin_checked="1">

												<div class="col-md-2 mt-3" bis_skin_checked="1">

													<i class="fas fa-credit-card fa-2x"></i>

												</div>

												<div class="col-md-10" style="font-size: 20px;" bis_skin_checked="1">

													<span class="checkout_span">Payment</span>

													<p class="checkout_span">Credit card, debit card or PayPal</p>

												</div>

											

											</div>

											<div class="row" style="padding: 20px;border-bottom: 1px solid lightgray;" bis_skin_checked="1">

												<div class="col-md-2 mt-3" bis_skin_checked="1">

													<i class="fas fa-truck fa-2x"></i>

												</div>

												<div class="col-md-10" style="font-size: 20px;" bis_skin_checked="1">

													<span class="checkout_span">Shipping &amp; Delivery</span>

													<p class="checkout_span">Complimentary Green Delivery</p>

												</div>

											</div>



											<div class="row" style="padding: 20px;border-bottom: 1px solid lightgray;" bis_skin_checked="1">

												<div class="col-md-2 mt-3" bis_skin_checked="1">

													<i class="fas fa-undo fa-2x"></i>

												</div>

												<div class="col-md-10" style="font-size: 20px;" bis_skin_checked="1">

													<span class="checkout_span">Shipping &amp; Delivery</span>

													<p class="checkout_span">Complimentary</p>

												</div>

											</div>



											<div class="row" style="padding: 20px;" bis_skin_checked="1">

												<div class="col-md-2 mt-2" bis_skin_checked="1">

													<i class="fas fa-hands-helping fa-2x"></i>

												</div>

												<div class="col-md-10" style="font-size: 20px;" bis_skin_checked="1">

													<span class="checkout_span">Next Day Collect-In-Store </span>

												</div>
												
											</div>

										</div>

									</div>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>



		</form>

	</div>

</section>



<section class="checkout_section" style="display:none">

    <div class="container-fluid">

        <div class="row">

            <div class="col-md-6"></div>

            <div class="col-md-6" id="checkout" style="background: white;z-index: 1;padding:30px;">

                <div class="row">

                    <div class="col-md-8">

                        <h1>Delivery Options</h1>

                    </div>

                    <div class="col-md-4 text-right">

                        <i class="fas fa-times fa-3x close_tag btn-step8"></i>

                    </div>

                </div>

                

                <div class="row mt-5">

                    <div class="col-md-12">

                        <h4>Deliver To An Address </h4>

                        

                        <form>

                            <label>Title*</label>

                            <select class="form-control">

                                <option>Mr</option>

                            </select>

                            

                            <label class="mt-3">First Name</label>

                            <input type="text" class="form-control">

                            

                            <label class="mt-3">Last Name</label>

                            <input type="text" class="form-control">

                            

                            <label class="mt-3">Company Name</label>

                            <input type="text" class="form-control">

                            

                            <label class="mt-3">Address 1*</label>

                            <input type="text" class="form-control" placeholder="Street Address">

                            

                            <label class="mt-3">Address 2</label>

                            <input type="text" class="form-control" placeholder="Apt, Suite, Building, Floor (Optional)">

                            

                            <label class="mt-3">City</label>

                            <select class="form-control">

                                <option>Lahore</option>

                            </select>

                            

                            <label class="mt-3">Postal Code*</label>

                            <input type="text" class="form-control">

                            

                            <label class="mt-3">State</label>

                            <select class="form-control">

                                <option>Arizona</option>

                            </select>

                            

                            <label class="mt-3">Country / Region*</label>

                            <input type="text" class="form-control">

                            

                            <label class="mt-3">Phone Number*</label>

                            <input type="text" class="form-control">

                            

                            <!--<div class="row">

								    <div class="col-md-12">

								        <a class="btn btn-secondary">Continue</a>

								    </div>

								</div>-->

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://www.paypal.com/sdk/js?client-id=ARpwn_WrDUK6pQpvzQIMLpCaj85fktud-DT7foGFjoZ-p0iX0SL-RaBqT8eLib8B_wVNQKoRPG5RMLtT&currency=USD"></script>
        <script>
        $(document).ready(function(){
            paypal.Buttons({
                createOrder: function(data, actions) {
                    return actions.order.create({
                        "purchase_units": [{
                            "amount": {
                                "value": '<?php echo $sub_total; ?>',
                                "currency_code": 'USD',
                                "breakdown": {
                                    "item_total": {
                                        "currency_code": "USD",
                                        "value": '<?php echo $sub_total; ?>'
                                    }
                                }
                            },
                            "items": [
                                {

                                  "name": "First Product Name", /* Shows within upper-right dropdown during payment approval */

                                  "description": "Optional descriptive text..", /* Item details will also be in the completed paypal.com transaction view */

                                  "unit_amount": {

                                    "currency_code": "USD",

                                    "value": '<?php echo $product['price']; ?>'

                                  },

                                  "quantity": '<?php echo $product['quantity']; ?>'

                                },

                                ]
                        }]
                    });
                },
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(details) {
                      // console.log("order completed successfully");
                        saveResponse(details);
                    });
                }
            }).render('#paypal-button-container'); // Display payment options on your web page
    
           
            // var aff_id = getCookie('aff_id');

            function saveResponse(response) {
				 
                // $.LoadingOverlay("show");
                $.ajax({
                    type: "POST",
                    url: "https://kooldesignprojects.com/kooldev2luis/save_order.php",
                    dataType: 'JSON',
                    data: {'paypalResponse':response},
                    cache: false,
                    success: function(data) { 
                        if(data.response == true){
                           alert(data.message);
                        }
                    },
                    // complete: function () {
                    // $.LoadingOverlay("hide");
                    // }
                });
            }

        });
</script>
<?php

require_once("footer.php")

?>



<script>

	$(document).ready(function(){

		$.noConflict();

	});

    /*$(".btn-step7").click(function() {

    $(".checkout_section").show();

  });

   $(".btn-step8").click(function() {

    $(".checkout_section").hide();

  });*/

  

</script>



