<?php
session_start();
require_once("database.php");
if (isset($_SESSION['shopping_cart'])) {
    foreach ($_SESSION['shopping_cart'] as &$product) {
        if ($product['code'] === $_POST['id']) {
            $product['quantity'] = $_POST['qty'];
            echo $product['quantity'];
            break; // Stop the loop after we've found the product
        }
    }
}
?>