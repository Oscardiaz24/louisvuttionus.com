<?php
require_once("header.php");
require_once("database.php");
 if(!isset($_SESSION['id'])){
    echo"<script>location='index.php'</script>";
}
$id=$_SESSION['id'];
$get_order="SELECT * FROM orders WHERE customer_id = '$id' ORDER BY id DESC;";
$orders=db::getRecords($get_order);
?>
<style>
    .main_header{
        background: #6a1717;
    }
    .header-padding-7 {
        padding: 16px 0;
    }

</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<div class="breadcrumb-area section-padding-1 breadcrumb-ptb-1">
    <div class="container-fluid">
        <div class="breadcrumb-content text-center pt-5 mt-5">
            <h2>Order History</h2>
        </div>
    </div>
</div>
<div class="cart-area pb-80">
    <div class="container">
        <div class="row pb-120">
            <div class="col-sm-12">
                <table id="dtHorizontalExample" class="table table-bordered table-responsive p-3">
                <tr>
                    <th>#</th>
                    <th>Order Date</th>
                    <th>Total Amount</th>
                    <th>Address</th>
                    <th>House Number</th>
                    <th>Postal Code</th>
                    <th>Order Note</th>
                    <th>Status</th>
                     <th>Action</th>
                </tr>
                <?php
                    if($orders){
                        foreach ($orders as $key => $order) {
                            $key=$key+1;
                            echo'<tr>';
                            echo'<td>'.$key.'</td>';
                            echo'<td>'.$order['order_date'].'</td>';
                            echo'<td> $'.$order['total_amount'].' </td>';
                            echo'<td>'.$order['address'].'</td>';
                            echo'<td>'.$order['house_number'].'</td>';
                            echo'<td>'.$order['postal_code'].'</td>';
                            echo'<td>'.$order['order_note'].'</td>';
                           ;
                            if($order['status']=="0"){
                                echo'<td><span style="font-size:16px;color:blue;">Pending</span></td>';
                            }else{
                                  echo'<td><span style="font-size:16px;color:green;">Delivered</span></td>';
                            }
                            echo'<td><a href="order_details.php?id='.$order['id'].'" class="btn btn-secondary btn-sm" style="width:20%;padding:10px;border-radius:40px;background: #990000;border: none;font-size:10px">View Details</a></td>';
                            echo'</tr>';
                        }
                    }
                ?>
            </table>
            </div>
        </div>
    </div>
</div>
<?php
    require_once("footer.php")
?>