<?php
require_once("database.php");
if(isset($_POST['colors']) && $_POST['colors']!=""){
    $min=$_POST['min'];
    $max=$_POST['max'];
   $colors = implode("','",$_POST['colors']);
   $w = "SELECT * FROM product WHERE color IN ('$colors') AND CAST(price AS DECIMAL) BETWEEN '$min' AND '$max'";
}else{
    $min=$_POST['min'];
    $max=$_POST['max'];
    $w="SELECT * FROM product WHERE CAST(price AS DECIMAL) BETWEEN $min AND $max";
}
   $recs=db::getRecords($w);
    if ($recs) {
    foreach ($recs as $product) { // Changed $rec to $product
        echo '<div class="col-4 mb-5 mt-5">
            <figure class="prod-box">
                <div class="img-holder">
                    <a href="product_detail.php?id=' . $product['id'] . '">
                        <img src="admin/uploads/' . $product['image'] . '" style="width:100%;" class="item-img-1" alt="' . $product['heading'] . '">
                        <img src="admin/uploads/' . $product['image'] . '" style="width:100%;" class="item-img-2" alt="' . $product['heading'] . '">
                    </a>
                    <!-- hover// -->
                </div><!-- img-holder// -->
                <div class="row">
                    <div class="col-md-3">
                        <a href="product_detail.php?id=' . $product['id'] . '" class="btn btn_main_section">Sale</a>
                    </div>
                </div>';

        $price = $product['discount'] != "" ? ($product['price'] - ($product['price'] * $product['discount']) / 100) : $product['price'];

        echo '<figcaption class="anons">
                <p>' . $product['heading'] . '</p>
                <p>';

        if ($product['discount'] != "") {
            echo '<del><span class="old-price">$' . $product['price'] . '</span></del>';
        }

        echo '   $' . $price . '</p>
                <form action="action.php" method="POST">
                    <input type="hidden" name="id" value="'.$product['id'].'">
                            <button type="submit" name="add_to_cart" value="Add To Cart" class="btn btn-secondary">Add To Cart</button>
                 </form>
            </figcaption>
        </figure>
    </div>';
        }
}

?>