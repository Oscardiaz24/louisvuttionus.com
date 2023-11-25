<?php
   session_start();
   
   require_once("header.php");
   
   if(isset($_SESSION['shopping_cart']) && empty($_SESSION['shopping_cart'])){
   
       echo "<script>location='index.php'</script>";
   
   }else if(!isset($_SESSION['shopping_cart'])){
   
          echo "<script>location='index.php'</script>";
   
   }
   
   require_once("database.php");
   
    $sub_total=0;
   
       $qty=0;
   
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
   .detail_pargraph img {
   margin-top: -15%;
   }
   .paypal-button.paypal-button-number-1.paypal-button-layout-vertical.paypal-button-shape-rect.paypal-button-number-multiple.paypal-button-env-sandbox.paypal-button-color-gold.paypal-button-text-color-black.paypal-logo-color-blue {
   display: none !important;
   }
</style>
<section style="padding-top: 100px;padding-bottom: 100px;">
   <div class="container">
      <div class="row">
         <div class="col-md-8">
            <h4 class="cart_section">My cart</h4>
            <?php if(isset($_SESSION['shopping_cart'])){
               foreach($_SESSION['shopping_cart'] as $product){
               
               ?>
            <div class="row border_card">
               <div class="col-md-2">
                  <img class="w-100" src="admin/uploads/<?php echo $product['image']; ?>">
               </div>
               <div class="col-md-4 mt-3">
                  <p class="detail_pargraph"><?php echo $product['productName']; ?></p>
                  <p class="price">$<?php echo $product['price']; ?></p>
                  <span class="detail_pargraph">color:	<?php echo $product['variantName']; ?></span>
               </div>
               <div class="col-md-2 mt-3">
                  <div class="quantity-input mt-1" style="display:flex;justify-content:center;align-items:center;">
                     <button class="decrement dec_<?php echo $product['code']; ?>" onclick="minus(<?php echo $product['code']; ?>,event,<?php echo $product['price']; ?>)">-</button>
                     <input type="text"  class="quantity qty_<?php echo $product['code'];?>" value="<?php echo $product['quantity'];?>">
                     <button class="increment dec_<?php echo $product['code']; ?>" onclick="plus(<?php echo $product['code']; ?>,event,<?php echo $product['price']; ?>)">+</button>
                  </div>
               </div>
               <div class="col-md-3 text-center pt-4">
                  <p class="detail_pargraph" id="tp_<?php echo $product['code']; ?>">$<?php echo $product['price']*$product['quantity']; ?></p>
               </div>
               <div class="col-md-1 text-right mt-3">
                  <!-- <a href="action.php?action=remove&code=<?php echo $product['code']; ?>&selected=1"><i style="color:black" class="fas fa-times close_tag1"></i></a> -->
                  <a href="action.php?action=remove&code=<?php echo $product['code']; ?>"><i style="color:black" class="fas fa-times close_tag1"></i></a>

                </div>
            </div>
            <?php
               $sub_total=$sub_total+($product['price']*$product['quantity']);
               
                          }
               
                      }  
               
               ?>
         </div>
         <div class="col-md-4">
            <h4 class="cart_section">Order summary</h4>
            <div class="row mt-5">
               <div class="col-md-6">
                  <p class="detail_pargraph">Subtotal</p>
               </div>
               <div class="col-md-6 text-right">
                  <p class="detail_pargraph subtotal">$<?php echo $sub_total; ?></p>
               </div>
            </div>
            <div class="row mt-2">
               <div class="col-md-6">
                  <p class="detail_pargraph">Delivery </p>
               </div>
               <div class="col-md-6 text-right">
                  <p class="detail_pargraph">FREE</p>
               </div>
            </div>
            <div class="row mt-2 border_card">
               <div class="col-md-12">
                  <p class="detail_pargraph">Punjab, Pakistan </p>
               </div>
            </div>
            <div class="row mt-3">
               <div class="col-md-6">
                  <p class="detail_total">Total </p>
               </div>
               <div class="col-md-6 text-right">
                  <p class="detail_total subtotal">$<?php echo $sub_total; ?></p>
               </div>
            </div>
            <div class="row mt-2">
               <div class="col-md-12 text-center">
                  <div id="paypal-button-container" style="margin-top:50px;"></div>
                  <!-- <form action="checkout.php" method="POST">
                     <button type="submit" class="btn btn-secondary">Checkout</button>
                     
                     </form> -->
                  <!-- <a href="checkout.php" class="ancher">Secure Checkout</a> -->
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://www.paypal.com/sdk/js?client-id=AXj9n9A9Ss4T4u0xF9p_sEBqJZw3zpr_lAmkSLJU72c9i5fcfxTGxH58EREn61BB2AMrZziKhrAqAlLL&currency=USD"></script>
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
                           ],
                           "application_context": {
                       "user_action": "commit",
                       "landing_page": "billing"
                   }
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
<script>
   $(document).ready(function () {
      // Delay the execution by 10 seconds
      setTimeout(function () {
          // Replace the text within the second occurrence of the class "paypal-button-number-2" with "Guest Checkout"
          $('.paypal-button-number-2 .paypal-button-text span').text('Guest Checkout');
      }, 10000); // 10000 milliseconds = 10 seconds
   });
</script>
<?php
   require_once("footer.php")
   
   ?>
<!-- Modal -->
<!--<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
   
   </div>-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script>
   function minus(id,event,price){
   
       event.preventDefault();
   
       var t=$(".qty_"+id).val();
   
       if(t>1){
   
           t=t-1;
   
           $(".qty_"+id).val(t);
   
           $.ajax({
   
               url:'update_cart.php',
   
               method:'POST',
   
               data:{id:id,qty:t},
   
               success:function(updatedQuantity){
   
                   console.log("The updated quantity is"+updatedQuantity);
   
                   // Convert the received quantity (string) to a number
   
                     var newQuantity = parseInt(updatedQuantity);
   
                     // Update the quantity input value with the new value from the server
   
                     $("#quan_" + id).val(newQuantity);
   
                     // Calculate the new total
   
                     var total = newQuantity * price;
   
                     // Update the total price display
   
                     $("#tp_" + id).html("$" + total);
   
               }
   
           });
   
       }
   
   }
   
   function plus(id,event,price){
   
        event.preventDefault();
   
        var t=$(".qty_"+id).val();
   
        t++;
   
        if(t>=1){
   
           $(".qty_"+id).val(t);
   
            $.ajax({
   
               url:'update_cart.php',
   
               method:'POST',
   
               data:{id:id,qty:t},
   
               success:function(updatedQuantity){
   
                   // Convert the received quantity (string) to a number
   
                     var newQuantity = parseInt(updatedQuantity);
   
                     // Update the quantity input value with the new value from the server
   
                     $("#quan_" + id).val(newQuantity);
   
                     // Calculate the new total
   
                     var total = newQuantity * price;
   
                     // Update the total price display
   
                     $("#tp_" + id).html("$" + total);
   
               }
   
           });
   
       }
   
   }
   
</script>
<script type="text/javascript">
   // $(document).ready(function(){
   
   //     setInterval(function(){
   
   //       $.ajax({
   
   //         type:'GET',
   
   //         url:'fetchvalue.php',
   
   //         success:function(data){
   
   //             $(".subtotal").html(data);
   
   //             $(".subtotal").html("$"+data);
   
   //         }
   
   //       });   
   
   //      },100);
   
   // }); 
   
</script>
