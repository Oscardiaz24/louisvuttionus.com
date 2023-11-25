<?php
session_start();
// $admin = $_SESSION['email'];
require_once("database.php");
$db = db::open();
$datee = date("d-m-Y");
// all insertion code start
// //admin login 

if (isset($_POST['login'])) { 

	$email = $_POST['email'];

	$password = $_POST['password'];

	$query = "SELECT * FROM admin WHERE password='$password' AND email='$email'";
  
	$rec = db::getRecord($query);
    echo $rec;
    exit;
	if (!empty($rec)) {
        
		if($rec['status']=="1"){

			if($rec['verification_status']=="1"){

				$_SESSION['id'] = $rec['id'];

				if(isset($_SESSION["shopping_cart"]) && !empty($_SESSION["shopping_cart"])){

				    echo "<script>location='checkout.php'</script>";

				}

			}

		}

	} 

}
// if (isset($_POST['login'])) {

//   $email = $_POST['email'];

//   $password = $_POST['password'];

//   $query = "SELECT * FROM admin WHERE password='$password' && email='$email'";
//     print_r($query);
//     exit; 
//   $rec = db::getRecord($query);

//   if (!empty($rec)) {



//     $_SESSION['admin'] = $rec;

//     echo "<script>location='dashboard.php'</script>";
// } else {

//     echo "<script>alert('Invalid Username or Password !')</script>";
//     echo "<script>location='index.php'</script>";
// }
// }
// //admin logout
if (isset($_GET['adminlogout'])) {

  unset($_SESSION['admin']);

  echo "<script>location='index.php'</script>";
}
//delete_viewer
if (isset($_GET['delete_viewer'])) {
  $id = $_GET['delete_viewer'];

  $sql = "DELETE FROM user WHERE id='$id'";
  db::query($sql);
  echo "<script>location='viewers.php'</script>";
}
//add_banner
if (isset($_POST['add_banner'])) {
    $heading = $db->real_escape_string($_POST['heading']);

    $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
    $file_loc = $_FILES['image']['tmp_name'];
    $file_size = $_FILES['image']['size'];
    $file_type = $_FILES['image']['type'];
    $folder = "uploads/";
    $new_file_name = strtolower($file);
    $final_file = str_replace(' ', '-', $new_file_name);
    $a = move_uploaded_file($file_loc, $folder . $final_file);

    $query_insert = "INSERT INTO `banner` (`heading`,`image`) VALUES ('$heading','$final_file')";

    db::query($query_insert);
    echo "<script>location='banner.php'</script>";
}
// update_banner
if (isset($_POST['update_banner'])) {
    $heading = $db->real_escape_string($_POST['heading']);

    $id = $_POST['id'];
    if ($_FILES['image']['name'] == "") {
        $sql = "UPDATE banner SET heading='$heading' WHERE id='$id'";
        db::query($sql);
    } else {
        $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
        $file_loc = $_FILES['image']['tmp_name'];
        $file_size = $_FILES['image']['size'];
        $file_type = $_FILES['image']['type'];
        $folder = "uploads/";
        $new_file_name = strtolower($file);
        $final_file = str_replace(' ', '-', $new_file_name);
        $a = move_uploaded_file($file_loc, $folder . $final_file);
        $sql = "UPDATE banner SET heading='$heading',image='$final_file' WHERE id='$id'";
        echo db::query($sql);
    }
    echo "<script>location='banner.php'</script>";
}

// del_banner
if (isset($_GET['del_banner'])) {
    $id = $_GET['del_banner'];
    $sql = "DELETE FROM banner WHERE id='$id'";
    db::query($sql);
    echo "<script>location='banner.php'</script>";
}


// update_logo
if (isset($_POST['update_logo'])) {

    if ($_FILES['image']['name'] == "") {
        $sql = "UPDATE logo SET  ";
        db::query($sql);
    } else {
        $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
        $file_loc = $_FILES['image']['tmp_name'];
        $file_size = $_FILES['image']['size'];
        $file_type = $_FILES['image']['type'];
        $folder = "uploads/";
        $new_file_name = strtolower($file);
        $final_file = str_replace(' ', '-', $new_file_name);
        $a = move_uploaded_file($file_loc, $folder . $final_file);
        $sql = "UPDATE logo SET image='$final_file' ";
        db::query($sql);
    }
    echo "<script>location='logo.php'</script>";
}

//add_about
if (isset($_POST['add_about'])) {
    $heading = $db->real_escape_string($_POST['heading']);
    $dcp = $db->real_escape_string($_POST['dcp']);

    $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
    $file_loc = $_FILES['image']['tmp_name'];
    $file_size = $_FILES['image']['size'];
    $file_type = $_FILES['image']['type'];
    $folder = "uploads/";
    $new_file_name = strtolower($file);
    $final_file = str_replace(' ', '-', $new_file_name);
    $a = move_uploaded_file($file_loc, $folder . $final_file);

    $query_insert = "INSERT INTO `about` (`heading`,`dcp`,`image`) VALUES ('$heading','$dcp','$final_file')";

    db::query($query_insert);
    echo "<script>location='about.php'</script>";
}
// update_about
if (isset($_POST['update_about'])) {
    $heading = $db->real_escape_string($_POST['heading']);
    $dcp = $db->real_escape_string($_POST['dcp']);

    $id = $_POST['id'];
    if ($_FILES['image']['name'] == "") {
        $sql = "UPDATE about SET heading='$heading',dcp='$dcp' WHERE id='$id'";
        db::query($sql);
    } else {
        $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
        $file_loc = $_FILES['image']['tmp_name'];
        $file_size = $_FILES['image']['size'];
        $file_type = $_FILES['image']['type'];
        $folder = "uploads/";
        $new_file_name = strtolower($file);
        $final_file = str_replace(' ', '-', $new_file_name);
        $a = move_uploaded_file($file_loc, $folder . $final_file);
        $sql = "UPDATE about SET heading='$heading',dcp='$dcp',image='$final_file' WHERE id='$id'";
        echo db::query($sql);
    }
    echo "<script>location='about.php'</script>";
}

// del_about
if (isset($_GET['del_about'])) {
    $id = $_GET['del_about'];
    $sql = "DELETE FROM about WHERE id='$id'";
    db::query($sql);
    echo "<script>location='about.php'</script>";
}
//add product amir start

// Include your database connection file or database-related code
// For example, if you have a file named db.php, include it like this:
// include('db.php');

// Assuming db::query and db::getLastInsertID are your database interaction methods
// Replace them with your actual methods

if (isset($_POST['add_products'])) {
    $conn = new mysqli('localhost', 'kooldesi_luis', 'Ewi6M{A[R)iR', 'kooldesi_luisupdated');
    $heading = $_POST['heading'];
    $dcp = $_POST['dcp'];
    $price = $_POST['price'];
    $color = $_POST['color'];
    $discount = $_POST['discount'];
    // print_r($_POST);
    // exit;
    // Image Upload for default product image
    $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
    $file_loc = $_FILES['image']['tmp_name'];
    $folder = "uploads/";
    $new_file_name = strtolower($file);
    $final_file = str_replace(' ', '-', $new_file_name);
    move_uploaded_file($file_loc, $folder . $final_file);

    // Insert product
    $query_insert_product = "INSERT INTO `product` (`id`, `heading`, `description`, `image`, `price`, `discount`, `color`) VALUES (NULL, '$heading', '$dcp', '$final_file', '$price', '$discount', '$color')";
    if (mysqli_query($conn, $query_insert_product)) {
        $last_id = mysqli_insert_id($conn);
      
      } else {
        echo "Error in the INSERT operation";
    }
    // Insert default product image
    $sql_default_image = "INSERT INTO `product_images` (`id`, `product_id`, `image`) VALUES (NULL, '$last_id', '$final_file')";
    if (mysqli_query($conn, $sql_default_image)) {
        $last_id_imge = mysqli_insert_id($conn);
      
      }

    // Insert variants
    $variant_names = $_POST['variant_names'];
    $variant_prices = $_POST['variant_prices'];
    $variant_images = $_FILES['variant_images'];

    for ($i = 0; $i < count($variant_names); $i++) {
        $variant_name = $variant_names[$i];
        $variant_price = $variant_prices[$i];

        // Upload variant image
        $variant_image = rand(1000, 100000) . "-" . $variant_images['name'][$i];
        $variant_image_loc = $variant_images['tmp_name'][$i];
        $variant_folder = "uploads/";
        $new_variant_image_name = strtolower($variant_image);
        $final_variant_image = str_replace(' ', '-', $new_variant_image_name);
        move_uploaded_file($variant_image_loc, $variant_folder . $final_variant_image);

        // Insert variant details
        $query_insert_variant = "INSERT INTO `product_variants` (`variant_id`, `product_id`, `variant_name`, `variant_image`, `variant_price`) VALUES (NULL, '$last_id', '$variant_name', '$final_variant_image', '$variant_price')";
        if (mysqli_query($conn, $query_insert_variant)) {
           $last_variant_id = mysqli_insert_id($conn);
          
          }

        // Insert variant image
        $sql_variant_image = "INSERT INTO `variant_images` (`id`, `variant_id`, `image`) VALUES (NULL, '$last_variant_id', '$final_variant_image')";
        if (mysqli_query($conn, $sql_variant_image)) {
            $sql_variant_image_id = mysqli_insert_id($conn);
           
           }
    }

    // Additional code if needed

    // Redirect or display a success message
    header("Location: product.php");
    exit();
}


//add product amir end
//add_products 


// if (isset($_POST['add_products'])) {
//     $heading = $_POST['heading'];
//     $dcp = $_POST['dcp'];
//     $price = $_POST['price'];
//      $color = $_POST['color'];
//     $discount=$_POST['discount'];
//     //Image Upload

//     $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
//     $file_loc = $_FILES['image']['tmp_name'];
//     $file_size = $_FILES['image']['size'];
//     $file_type = $_FILES['image']['type'];
//     $folder = "uploads/";
//     $new_file_name = strtolower($file);
//     $final_file = str_replace(' ', '-', $new_file_name);
//     $a = move_uploaded_file($file_loc, $folder . $final_file);
//     $query_insert = "INSERT INTO `product` (`id`,`heading`,`description`,`image`,`price`,`discount`,`color`) VALUES ('','$heading','$dcp','$final_file','$price','$discount','color')";
//     $ins=db::query($query_insert);
//     $last_id="SELECT * FROM product ORDER BY id DESC LIMIT 1";
//     $w=db::getRecord($last_id);
//     $wid=$w['id'];
//     if(isset($_FILES['images'])){
//            $images = $_FILES['images'];
//            for ($i = 0; $i < count($images['name']); $i++) {
//                 $file = rand(1000, 100000) . "-" . $_FILES['images']['name'][$i];
//                 $file_loc = $_FILES['images']['tmp_name'][$i];
//                 $file_size = $_FILES['images']['size'][$i];
//                 $file_type = $_FILES['images']['type'][$i];
//                 $folder = "uploads/";
//                 $new_file_name = strtolower($file);
//                 $final_file = str_replace(' ', '-', $new_file_name);
//                 $a = move_uploaded_file($file_loc, $folder . $final_file);
//                 $sql="INSERT INTO `product_images`(`id`, `product_id`, `image`) VALUES ('','$wid','$final_file')";
//                 $saved=db::query($sql);
//            }
//     }
//     if($ins){
//         echo "<script>alert('Product Added')</script>";
//         echo "<script>location='product.php'</script>";
//     }else{
//          echo "<script>alert('Product Not Added')</script>";
//         echo "<script>location='add_product.php'</script>";
//     }
// }
// update_product


if (isset($_POST['update_product'])) {
    $conn = new mysqli('localhost', 'kooldesi_luis', 'Ewi6M{A[R)iR', 'kooldesi_luisupdated');
    $heading = $_POST['heading'];
    $dcp = $_POST['dcp'];
    $price = $_POST['price'];
    $color = $_POST['color'];
    $id = $_POST['id'];
    $discount = $_POST['discount'];

    if ($_FILES['image']['name'] == '') {
        $sql = "UPDATE product SET heading='$heading', description='$dcp', price='$price', discount='$discount', color='$color' WHERE id='$id'";
    } else {
        $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
        $file_loc = $_FILES['image']['tmp_name'];
        $file_size = $_FILES['image']['size'];
        $file_type = $_FILES['image']['type'];
        $folder = "uploads/";
        $new_file_name = strtolower($file);
        $final_file = str_replace(' ', '-', $new_file_name);
        $a = move_uploaded_file($file_loc, $folder . $final_file);
        $sql = "UPDATE product SET heading='$heading', description='$dcp', image='$final_file', price='$price', discount='$discount', color='$color' WHERE id='$id'";
    }

    // Update main product details
    mysqli_query($conn, $sql);

    // Update variants
    $variantNames = $_POST['variant_names'];
    $variantPrices = $_POST['variant_prices'];
    $variantIds = $_POST['variant_ids'];

    // Loop through existing variants
    for ($i = 0; $i < count($variantNames); $i++) {
        $variantId = $variantIds[$i];
        $variantName = $variantNames[$i];
        $variantPrice = $variantPrices[$i];

        // Check if variant has an image
        if ($_FILES['variant_images']['name'][$i] != '') {
            $variantFile = rand(1000, 100000) . "-" . $_FILES['variant_images']['name'][$i];
            $variantFileLoc = $_FILES['variant_images']['tmp_name'][$i];
            $variantFileSize = $_FILES['variant_images']['size'][$i];
            $variantFileType = $_FILES['variant_images']['type'][$i];
            $variantFolder = "uploads/";

            $newVariantFileName = strtolower($variantFile);
            $finalVariantFile = str_replace(' ', '-', $newVariantFileName);
            $variantImage = $folder . $finalVariantFile;

            move_uploaded_file($variantFileLoc, $variantFolder . $finalVariantFile);

            // Update variant with image
            $sqlVariant = "UPDATE product_variants SET variant_name='$variantName', variant_price='$variantPrice', variant_image='$variantImage' WHERE product_id='$id' AND variant_id='$variantId'";
            mysqli_query($conn, $sqlVariant);
        } else {
            // Update variant without image
            $sqlVariant = "UPDATE product_variants SET variant_name='$variantName', variant_price='$variantPrice' WHERE product_id='$id' AND variant_id='$variantId'";
            mysqli_query($conn, $sqlVariant);
        }
    }

    

    header("Location: product.php");
    exit();
}







// if (isset($_POST['update_product'])) {
//     $heading =$_POST['heading'];
//     $dcp = $_POST['dcp'];
//     $price = $_POST['price'];
//     $color=$_POST['color'];
//     $id = $_POST['id'];
//     $discount=$_POST['discount'];
//     if ($_FILES['image']['name'] == "") {
//         $sql = "UPDATE product SET heading='$heading',description='$dcp',price='$price',discount='$discount',color='$color' WHERE id='$id'";
//     } else {
//         $file = rand(1000, 100000) . "-" . $_FILES['image']['name'];
//         $file_loc = $_FILES['image']['tmp_name'];
//         $file_size = $_FILES['image']['size'];
//         $file_type = $_FILES['image']['type'];
//         $folder = "uploads/";
//         $new_file_name = strtolower($file);
//         $final_file = str_replace(' ', '-', $new_file_name);
//         $a = move_uploaded_file($file_loc, $folder . $final_file);
//         $sql = "UPDATE product SET heading='$heading',description='$dcp',image='$final_file',price='$price',discount='$discount',color='$color' WHERE id='$id'";
//     }
//     $upd=db::query($sql);
//     if($upd){
//          echo "<script>alert('Product Updated')</script>";
//          echo "<script>location='product.php'</script>";
//     }
   
// }

// del_product
if (isset($_GET['del_product'])) {
    $id = $_GET['del_product'];
    $sql = "DELETE FROM product WHERE id='$id'";
    db::query($sql);
    echo "<script>location='product.php'</script>";
}


//add_contact
if (isset($_POST['add_contact'])) {
    $name = $db->real_escape_string($_POST['name']);
    $email = $db->real_escape_string($_POST['email']);
    $phone = $db->real_escape_string($_POST['phone']);
    $message = $db->real_escape_string($_POST['message']);

    $query_insert = "INSERT INTO `contact` (`name`,`email`,`phone`,`message`) VALUES ('$name','$email','$phone','$message')";

    db::query($query_insert);
    echo "<script>location='../contact.php'</script>";
}


// del_contact
if (isset($_GET['del_contact'])) {
    $id = $_GET['del_contact'];
    $sql = "DELETE FROM contact WHERE id='$id'";
    db::query($sql);
    echo "<script>location='contact.php'</script>";
}
if (isset($_GET['cart_id'])) {
    $id = $_GET['cart_id'];
    $sql = "DELETE FROM cart WHERE id='$id'";
    db::query($sql);
    echo "<script>location='../cart.php'</script>";
}
if(isset($_GET['del_product_image'])){
    $id=$_GET['del_product_image'];
    $q="DELETE FROM product_images WHERE id='$id'";
    $sql=db::query($q);
    if($sql){
        echo"<script>alert('Image Deleted')</script>";
        echo "<script>location='product.php'</script>";
    }
}

?>