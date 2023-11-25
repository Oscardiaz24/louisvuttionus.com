<?php
session_start();
require_once("database.php");
$qty=0;
if (isset($_SESSION['shopping_cart'])) {
    foreach ($_SESSION['shopping_cart'] as $product) {
        $qty=$qty+$product['quantity'];
    }
}
echo $qty;
?>