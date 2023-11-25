<?php
session_start();
require_once("database.php");

$code = $_POST['id'];
$qty = $_POST['qty'];
$variantName = $_POST['variantName'];
$variantPrice = $_POST['variantPrice'];
$variantImage = $_POST['variantImage'];

// Fetch product details
$productQuery = "SELECT * FROM `product` WHERE `id`='$code'";
$productResult = db::getRecord($productQuery);
$product = $productResult;

$productName = $product['heading'];

// Use the variant image if provided; otherwise, use the default product image
$image = !empty($variantImage) ? $variantImage : $product['image'];

$cartArray = array(
    'productName' => $productName,
    'variantName' => $variantName,
    'price' => $variantPrice,
    'quantity' => $qty,
    'code' => $_POST['id'],
    'image' => $image
);

if (empty($_SESSION["shopping_cart"])) {
    $_SESSION["shopping_cart"] = array($cartArray);
} else {
    // Add the new item to the cart
    $_SESSION["shopping_cart"][] = $cartArray;
}

// Send a JSON response with product details
$response = array('productName' => $variantName, 'price' => $variantPrice);
echo json_encode($response);
?>
