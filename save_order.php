<?php
session_start();

require_once('mail_config.php');

$conn = new mysqli('localhost', 'kooldesi_luis', 'Ewi6M{A[R)iR', 'kooldesi_luisupdated');

  if(isset($_SESSION['shopping_cart'])){
        foreach($_SESSION['shopping_cart'] as $product){
          
            
            ?>
                
            <img class="w-100" src="admin/uploads/<?php echo $product['image']; ?>">

            <p class="detail_pargraph"><?php echo $product['productName']; ?></p>
            <span class="detail_pargraph">color:	<?php echo $product['variantName']; ?></span>
            <?php

     }
               
                      }  
                      exit;
          $data = [];
          $data['response'] = false;
          $paypal = $_POST['paypalResponse'];
          $status = $paypal['status'];
          $email = $paypal['payer']['email_address'];
          $name = $paypal['payer']['name']['given_name'].' '.$paypal['payer']['name']['surname'];
          $transaction_id = $paypal['id'];
          $payer_id = $paypal['payer']['payer_id'];
          $paid_amount = $paypal['purchase_units'][0]['amount']['value'];
          $shipping_address_1 = $paypal['purchase_units'][0]['shipping']['address']['address_line_1'];
          $shipping_address_2 = isset($paypal['purchase_units'][0]['shipping']['address']['address_line_2'])?$paypal['purchase_units'][0]['shipping']['address']['address_line_2']:"";
          $country_code = $paypal['purchase_units'][0]['shipping']['address']['country_code'];
          $state = $paypal['purchase_units'][0]['shipping']['address']['admin_area_1'];
          $postal_code = $paypal['purchase_units'][0]['shipping']['address']['postal_code'];
          $payment_id = $paypal['purchase_units'][0]['payments']['captures'][0]['id'];
          $payment_status = $paypal['purchase_units'][0]['payments']['captures'][0]['status'];
          $product_name = $paypal['purchase_units'][0]['items'][0]['name'];
          $product_price = $paypal['purchase_units'][0]['items'][0]['unit_amount']['value'];
          $quantity = $paypal['purchase_units'][0]['items'][0]['quantity'];
       
        // Simulated PayPal response (dummy data)
        // $status = "paid123";
        //   $email ="test@gmail.com";
        //   $name = "testname";
        //   $paid_amount = "10";
        //   $shipping_address_1 ="address1";
        //   $shipping_address_2 = "address2";



     
       
           
        // Insert data into the "order" table
        $sqlOrder = "INSERT INTO orders (customer_name, total_amount, address, house_number,  status)
        VALUES ('$name', '$paid_amount', '$shipping_address_1', '$shipping_address_2', '$status')";

        // Execute the query
        if ($conn->query($sqlOrder) === TRUE) {
        // Get the last inserted order ID
        $order_id = $conn->insert_id;





            // Assuming you have the necessary data like $name, $email, $product_name, $product_price, $payment_id

            // Your HTML template
            $htmlTemplate = '<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <!-- <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lato:ital,wght@0,300;0,900;1,700&display=swap" rel="stylesheet"> -->
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css">
                <title>Template 2</title>
                <style>
                    * {
                        padding: 0;
                        margin: 0;
                        font-family: \'Roboto\', sans-serif;
                    }
                ul,.row{
                    justify-content: space-between !important;
                }
                </style>
            </head>


            <body style="overflow-x: hidden; position: relative; color: #313232;">
                <div style="max-width: 500px; width: 100%;margin: 10px auto;padding: 20px;">
                    <table style="width: 100%;">
                        <thead>
                            <tr>
                                <th colspan="2" style="text-align: center; background-color: #fff; padding: 25px 0; border-bottom: 15px solid #f1f3f4; border-top: 15px solid #f1f3f4;">
                                    <img src="./logo.png" style="max-width: 50%;margin: 0 auto;" alt="">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2" style="text-align: left;">
                                    <h5 style="margin: 15px auto;font-weight: 400; font-size: 16px; color: #4a4b4b;">Dear ' . $name . ',</h5>
                                    <p style="font-weight: 400; font-size: 14px; ">We are pleased to confirm that your order nx651153771 has been received and is being processed.
                                        A confirmation email will be sent to notify you when your order has been shipped.
                                        To track the status of your order, please visit your <a href="#">My LV</a> account.
                                        Please note if your order includes more than one product, it may be shipped in several packages and
                                        delivered on separate days.
                                        To learn about preserving your item, please access the <a href="#">Product Care Page.</a></p>
                                    <p  style="font-size: 14px;">Please note if your order includes more than one product, it may be shipped in several packages and
                                        delivered on separate days.</p>
                                    <p style="font-size: 14px;">To learn about preserving your item, please access the Product Care Page.</p>
                                </td>
                            </tr>
                        
                            <tr>
                                <td colspan="2" style="text-align: left;">
                                    <p style="font-weight: 400; font-size: 14px;">Should you require additional information, please contact our Client Services at +1.866.VUITTON. Our
                                        client advisors will be pleased to assist you.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style="padding-top: 40px;">
                                        <h4 style="font-size: 18px; font-weight: 600; color: #616566;margin-bottom: 20px;">ORDER DETAILS</h4>
                                    
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ul style="word-wrap: wrap; background-color: #f6f5f1; color: #313232; font-weight: 600; display: flex; -webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between; list-style: none;" class="d-flex list-unstyled justify-content-between">
                                        <li style="margin: 0; width: 50%;"><span style="padding-right: 30px; ">PRODUCT</span><span style="padding-right: 30px;">DESCRIPTION</span></li>
                                        <li style="margin: 0;  width: 50%;text-align: end;"><span style="padding-right: 30px;">QUANTITY</span><span style="padding-right: 30px;">PRICE</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ul style=" color: #313232; font-weight: 600; display: flex; -webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between; list-style: none;" class="d-flex list-unstyled justify-content-between">
                                        <li class="d-flex" style="margin: 0; display: flex; width: 50%;">
                                        
                                            <div class="d-flex flex-direction-column" style="flex-direction: column; display: flex;">
                                                <span style="padding-right: 30px;">
                                                    <span style="font-size: 13px;">My Monogram Eclipse Hat</span>
                                                    </span>
                                                    <span style="font-size: 13px;">Product ID: M73469</span>
                                                    <span style="font-size: 13px;">Material: S00</span>
                                                    <span style="font-size: 13px;">Color: Grey</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li style="margin: 0; width: 50%;text-align: end;"><span style="padding-right: 30px;">1</span><span style="padding-right: 30px;">$383.94</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ul style=" color: #313232; font-weight: 600; background-color: #f6f5f1; margin-bottom: 0; display: flex;-webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between; list-style: none;" class="d-flex list-unstyled justify-content-between">
                                        <li style="margin: 0; width: 50%;"><span style="padding-right: 30px;">SUBTOTAL</span></li>
                                        <li style="margin: 0; width: 50%;text-align: end;"><span style="padding-right: 30px;">$383.94</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <ul style=" color: #313232; margin-bottom: 0; font-size: 13px; display: flex; -webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between; list-style: none;" class="d-flex list-unstyled justify-content-between">
                                        <li style="margin: 0;"><span style="padding-right: 30px; width: 50%;">Delivery: Green Delivery - Estimated between 04/06 and 04/11</span></li>
                                        <li style="margin: 0;"><span style="padding-right: 30px; width: 50%;text-align: end;">$0.00</span></li>
                                    </ul>
                                    <ul style=" color: #313232; margin-bottom: 0; font-size: 13px; display: flex; -webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between; list-style: none;" class="d-flex list-unstyled justify-content-between">
                                        <li style="margin: 0; width: 50%;"><span style="padding-right: 30px;">Tax</span></li>
                                        <li style="margin: 0; width: 50%;text-align: end;"><span style="padding-right: 30px;">$18.94</span></li>
                                    </ul>
                                    <div class="row" style="display: flex; -webkit-justify-content: space-between; -ms-justify-content: space-between; justify-content: space-between; background-color: #f6f5f1; margin-top: 10px;">
                                        <div class="col-md-6" style="width: 50%;">
                                            <h4 style="margin: 0; font-size: 15px; font-weight: 600; color: #616566;">Total</h4>
                                        </div>
                                        <div class="col-md-6" style="width: 50%;">
                                            <h4 style="margin: 0; font-size: 15px; font-weight: 600; color: #616566;">$383.94</h4>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="row" style="display: flex;color: #313232 !important;">
                                        <div class="col-md-6" style="width: 50%;">
                                            <h4 style="font-size: 16px;  font-weight: 600; color: #616566;  margin-top: 10px;border-bottom: 15px solid #dfded9;">Shipping Address</h4>
                                            <ul style=" color: #313232; font-weight: 600; list-style: none;" class="list-unstyled">
                                                <li style="padding-right: 30px; margin: 0; ">
                                                <li style="font-size: 13px; margin: 0;">Mr Mac Jones</li>
                                                </li>
                                                <li style="font-size: 13px; margin: 0;">190 Applejack Way</li>
                                                <li style="font-size: 13px; margin: 0;">New York NY 10010</li>
                                                <li style="font-size: 13px; margin: 0;">US</li>
                                                
                                            </ul>
                                        </div>
                                        <div class="col-md-6" style="width: 50%;">
                                            <h4 style="font-size: 16px;  font-weight: 600; color: #616566;  margin-top: 10px;border-bottom: 15px solid #dfded9;">Billing Address</h4>
                                            <ul style=" color: #313232; font-weight: 600; list-style: none;" class="list-unstyled">
                                                <li style="padding-right: 30px; margin: 0;">
                                                <li style="font-size: 13px; margin: 0;">Mr Mac Jones</li>
                                                </li>
                                                <li style="font-size: 13px; margin: 0;">190 Applejack Way</li>
                                                <li style="font-size: 13px; margin: 0;">New York NY 10010</li>
                                                <li style="font-size: 13px; margin: 0;">US</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="text-align: left;">
                                    <p style="font-weight: 400; font-size: 14px;">Should you require additional information, please contact our Client Services at +1.866.VUITTON. Our
                                        client advisors will be pleased to assist you.</p>
                                </td>
                                
                            </tr>
                            <tr>
                                <td style="text-align: left;">
                                    <ul style="font-weight: 400; list-style:none; padding:0; margin: 0; " class="list-unstyled p-0 m-0">
                                        <li style="margin: 0;">We look forward to continuing our journey together soon!</li>
                                        <li style="margin: 0;">Warm regards, <a href="#">Louis Vuitton Client Services</a></li>
                                        <li style="margin: 0;">Call us: +1.866.VUITTON</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>

            </html>';

            // Your mail function
            $mail_response = send_mail('hasnainhasan751@gmail.com', 'Order Email', $htmlTemplate);
            print_r($mail_response);
            exit;

                }


          //  $body = "<p>New order Placed Successfully the details are attached about customer Please proceed with this order.</p><p><strong>Name:</strong> $name</p><p><strong>Email:</strong> $email</p><p><strong>Product Name:</strong> $product_name</p><p><strong>Price:</strong> $product_price</p><p><strong>Payment ID:</strong>$payment_id</p>";             
          //  $mail_response = send_mail('kooldeveloper2@gmail.com', 'Order Email', $body);
           if($mail_response){
            $data['response'] = true;
            $data['message'] = "Order Placed Successfully";

           }
            
           // print_r($state);

           echo json_encode($data);
           exit; 
       
           