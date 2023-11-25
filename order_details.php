<?php
require_once("header.php");
require_once("database.php");
 if(!isset($_SESSION['id'])){
          echo"<script>location='signin.php'</script>";
}
$id=$_GET['id'];
$q="SELECT * FROM order_items WHERE order_id='$id'";
$recs=db::getRecords($q);
$total_price=0;
$query="SELECT * FROM orders WHERE id='$id'";
$amount=db::getRecord($query);
  
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
            <h2>Order Details</h2>
        </div>
    </div>
</div>
<div class="cart-area pb-80">
    <div class="container">
        <div class="row pb-120">
            <div class="col-sm-12">
                <table id="dtHorizontalExample" class="table table-bordered table-responsive-sm
                p-3">
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                </tr>
                <?php
                    if($recs){
                        foreach ($recs as $key => $rec) {
                            $tp=$rec['quantity']*$rec['price'];
                            $key=$key+1;
                            $total_price=$total_price+$tp;
                            echo'<tr>';
                            echo'<td>'.$key.'</td>';
                            $pid=$rec['product_id'];
                            $get="SELECT * FROM product WHERE id='$pid'";
                            $name=db::getRecord($get);
                            echo'<td>'.$name['heading'].'</td>';
                            echo'<td>'.$rec['quantity'].'</td>';
                            echo'<td> $'.$rec['price'].'  </td>';
                              echo'<td> $'.$tp.'  </td>';
                            echo'</tr>';
                        }
                        echo'<tr align="center">';
                         echo'<td colspan="14" style="font-size:25px">Total : $ <span class="text-success">'.$total_price.'</span> </td>';
                        echo'</tr>';


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