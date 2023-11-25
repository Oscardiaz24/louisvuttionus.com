<?php
	session_start();
	$sub_total=0;
	if(isset($_SESSION['shopping_cart'])){  
		foreach ($_SESSION["shopping_cart"] as $product){ 
			$tp=($product['price']*$product['quantity']);
			$sub_total=$sub_total+$tp;
		}
	}
	echo $sub_total;
?>