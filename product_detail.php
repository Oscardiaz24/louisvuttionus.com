<?php
require_once("header.php");
//require_once("database.php");

$conn = new mysqli('localhost', 'kooldesi_luis', 'Ewi6M{A[R)iR', 'kooldesi_luisupdated');
if($conn->connect_error){
    die("Connection failed: ". $conn->connect_error);
}

if (!isset($_GET['id'])) {
    header("Location: error.php");
    exit();
}

// Get the product details
$productQuery = "SELECT * FROM product WHERE id = {$_GET['id']}";
$productResult = db::getRecord($productQuery);
$rec = $productResult;

// Get the variants for the product
$variantQuery = "SELECT * FROM product_variants WHERE product_id = {$_GET['id']}";
$variantResult = db::getRecords($variantQuery);
$recs4 = $variantResult;

?>

<style>
    .thumbnail.active {
    border: 2px solid blue; /* Change the border style as needed */
    }

    .image-slider {
        position: relative;
        max-width: 600px;
        margin: auto;
    }

    .main-image {
        width: 100%;
        display: block;
    }

    .thumbnail-container {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    .thumbnail {
        width: 120px;
        height: auto;
        margin: 0 5px;
        cursor: pointer;
    }

    .thumbnail:hover {
        border: 2px solid #333;
    }


    .card-wrapper{
        max-width: 1100px;
        margin: 0 auto;
    }
    .image_section{
        width: 100%;
        display: block;
    }
    .img-display{
        overflow: hidden;
    }
    .img-showcase{
        display: flex;
        width: 100%;
        transition: all 0.5s ease;
    }
    .img-showcase img{
        min-width: 100%;
    }
    .img-select{
        display: flex;
    }
    .img-item{
        margin: 0.3rem;
    }
    .img-item:nth-child(1),
    .img-item:nth-child(2),
    .img-item:nth-child(3){
        margin-right: 0;
    }
    .img-item:hover{
        opacity: 0.8;
    }
    .product-content{
        padding: 2rem 1rem;
    }
    .product-title{
        font-size: 35px;
        color: #575757;
        text-align: center;
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 700;
    }
    .product-link{
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.9rem;
        display: inline-block;
        margin-bottom: 0.5rem;
        background: #256eff;
        color: #fff;
        padding: 0 0.3rem;
        transition: all 0.5s ease;
    }
    .product-link:hover{
        opacity: 0.9;
    }
    .product-rating{
        color: #ffc107;
    }
    .product-rating span{
        font-weight: 600;
        color: #252525;
    }
    .product-price{
        margin: 1rem 0;
        font-size: 1rem;
        font-weight: 700;
    }
    .product-price span{
        font-weight: 400;
    }
    .last-price span{
        color: #f64749;
        text-decoration: line-through;
    }
    .new-price {
        color: #abb2ae;
        text-align: center;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 30px;
        font-weight: 200;
    }
    .product-detail h2{
        text-transform: capitalize;
        color: #12263a;
        padding-bottom: 0.6rem;
    }
    .product-detail p{
        font-size: 0.9rem;
        padding: 0.3rem;
        opacity: 0.8;
    }
    .product-detail ul{
        margin: 1rem 0;
        font-size: 0.9rem;
    }
    .product-detail ul li{
        margin: 0;
        list-style: none;
        background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
        background-size: 18px;
        padding-left: 1.7rem;
        margin: 0.4rem 0;
        font-weight: 600;
        opacity: 0.9;
    }
    .product-detail ul li span{
        font-weight: 400;
    }
    .purchase-info{
        margin: 1.5rem 0;
    }
    .purchase-info input,
    .purchase-info .btn{
        border: 1.5px solid #ddd;
        border-radius: 25px;
        text-align: center;
        padding: 0.45rem 0.8rem;
        outline: 0;
        margin-right: 0.2rem;
        margin-bottom: 1rem;
    }
    .purchase-info input{
        width: 60px;
    }
    .purchase-info .btn{
        cursor: pointer;
        color: #fff;
    }
    .purchase-info .btn:first-of-type{
        background: #256eff;
    }
    .purchase-info .btn:last-of-type{
        background: #f64749;
    }
    .purchase-info .btn:hover{
        opacity: 0.9;
    }
    .social-links{
        display: flex;
        justify-content: center;
    }
    .social-links a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        color: #000;
        border: 1px solid #000;
        margin: 0 0.2rem;
        border-radius: 50%;
        text-decoration: none;
        font-size: 0.8rem;
        transition: all 0.5s ease;
    }
    .social-links a:hover{
        background: wheat;
        border-color: transparent;
        color: #fff;
    }
    .card{
        border: none;
    }

    @media screen and (min-width: 992px){
        .card{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1.5rem;
        }
        .card-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .product-imgs{
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .product-content{
            padding-top: 0;
        }
    }
    .form{
        width: 100%;
        height: 50px;
        border: 1px solid #c9c9c9;
        font-family: 'Montserrat', sans-serif !important;
    }
    .label{
        color: #abb2ae;
        font-family: 'Montserrat', sans-serif !important;
    }
    .quantity button {
        width: 40px;
        height: 40px;
        background-color: #f5f5f5;
        border: none;
        cursor: pointer;
        font-size: 20px;
        transition: background-color 0.3s ease;
    }

    .quantity button:hover {
        background-color: #e0e0e0;
    }

    .quantity input {
        width: 70px;
        height: 40px;
        text-align: center;
        border: none;
        font-size: 18px;
    }
</style>

<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 breadcrumb">
                <a href="index.php">Home / <span><?php echo $rec['heading']; ?></span></a>
            </div>
        </div>
    </div>
</section>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-7">
            <div class="image-slider">
                <img src="admin/uploads/<?php echo $rec['image']; ?>" class="main-image" alt="shoe image">
            </div>
            <div class="thumbnail-container">
                    <!-- Include default product image -->
                    <img src="admin/uploads/<?php echo $rec['image']; ?>" class="thumbnail"
                         alt="<?php echo $rec['heading']; ?>"
                         data-variant-name="Default"
                         data-variant-price="<?php echo $rec['price']; ?>"
                         onclick="changeVariant('<?php echo $rec['image']; ?>', '<?php echo $rec['price']; ?>')">

                    <?php foreach ($recs4 as $val) { ?>
                        <img src="admin/uploads/<?php echo $val['variant_image']; ?>" class="thumbnail"
                             alt="<?php echo $val['variant_name']; ?>"
                             data-variant-name="<?php echo $val['variant_name']; ?>"
                             data-variant-price="<?php echo $val['variant_price']; ?>"
                             data-variant-image="<?php echo $val['variant_image']; ?>"
                             onclick="changeVariant('<?php echo $val['variant_image']; ?>', '<?php echo $val['variant_price']; ?>')">
                    <?php } ?>
                </div>
        </div>

        <div class="col-md-5">
            <!-- card right -->
            <div class="product-content">
                <h2 class="product-title"><?php echo $rec['heading']; ?></h2>

                <div class="product-price">
                    <p class="new-price" id="current-price">$<?php echo $rec['price']; ?></p>
                </div>

             

                <div class="row">
                    <div class="col-md-12 mx-auto text-center">
                        <div class="quantity">
                            <input type="hidden" name="id" id="pid" value="<?php echo $_GET['id']; ?>">
                            <button class="decrement" onclick="decrement()">-</button>
                            <input type="text" value="1" id="quantity">
                            <button class="increment" onclick="increment()">+</button>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-md-12 mx-auto text-center">
                        <div class="row">
                            <div class="col-md-10">
                                <a href="javascript:void(0);" class="btn btn-secondary btn-step3"
                                   onclick="addToCart(<?php echo $_GET['id']; ?>)">Add to Cart</a>
                            </div>
                            <div class="col-md-2">
                                <a href="wishlist.php?id=<?php echo $rec['id']; ?>" class="btn btn-outline-primary"><i
                                            class="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-12 mx-auto">
                        <h4 class="detail_heading">Product details</h4>
                        <p class="detail_pargraph"><?php echo $rec['description']; ?></p>
                        <p class="detail_pargraph">The reference is either made in France,<br> Spain, Italy, or in the US.
                        </p>
                    </div>
                </div>

                <div class="social-links mt-4">
                    <a href="#">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-pinterest"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<!--<div class = "card-wrapper">-->
<!--    <div class = "card">-->
        <!-- card left -->
<!--        <div class = "product-imgs">-->
<!--            <div class = "img-display">-->
<!--                <div class = "img-showcase">-->
<!--                    <img class="image_section" src = "admin/uploads/--><?php //echo $rec['image']; ?><!--" style="height:100%" alt = "shoe image">-->
<!--                    --><?php
//                    if($images){
//                        foreach($images as $img){ ?>
<!--                            <img class="image_section" src = "admin/uploads/--><?php //echo $img['image']; ?><!--" alt = "--><?php //echo $rec['image']; ?><!--">-->
<!--                            --><?php
//
//                        }
//                    }
//
//                    ?>
<!--                           <img class="image_section" src = "assets/images/download15.webp" alt = "shoe image">-->
<!--                              <img class="image_section" src = "assets/images/download21.webp" alt = "shoe image">-->
<!--                             <img class="image_section" src = "assets/images/download22.webp" alt = "shoe image">-->
<!--                </div>-->
<!--            </div>-->
<!---->
<!--            <div class = "img-select">-->
<!--                <div class = "img-item">-->
<!--                    <a href = "#" data-id = "1">-->
<!--                        <img class="image_section" src = "assets/images/download16.webp" alt = "shoe image">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class = "img-item">-->
<!--                    <a href = "#" data-id = "2">-->
<!--                        <img class="image_section" src = "assets/images/download15.webp" alt = "shoe image">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class = "img-item">-->
<!--                    <a href = "#" data-id = "3">-->
<!--                        <img class="image_section" src = "assets/images/download21.webp" alt = "shoe image">-->
<!--                    </a>-->
<!--                </div>-->
<!--                <div class = "img-item">-->
<!--                    <a href = "#" data-id = "4">-->
<!--                        <img class="image_section" src = "assets/images/download22.webp" alt = "shoe image">-->
<!--                    </a>-->
<!--                </div>-->
<!--                --><?php
//                if($images){
//                    foreach($images as $key=>$img){ ?>
<!--                        <div class = "img-item">-->
<!--                            <a href = "#" data-id = "--><?php //echo $key+1; ?><!--">-->
<!--                                <img class="image_section" src = "assets/images/download22.webp" alt = "shoe image">-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        --><?php
//                    }
//                }
//                ?>
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->
<!--</div>-->

<!--<section class="mt-5">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-4">
        <h2 class="detail_section_heading">YOU MAY ALSO LIKE</h2>
      </div>
    </div>

    <div class="row ">

      <div class="col-md-4">
        <figure  class="prod-box">
          <div class="img-holder">
            <a href="product_detail.php">
              <img src="assets/images/download16.webp" style="width:100%" class="item-img-1" alt="Something">
              <img src="assets/images/download15.webp" style="width:100%" class="item-img-2" alt="Something2">
            </a>


            <div class="blok-hover">
              <a class="fancybox" href="https://res.cloudinary.com/vosidiy/image/upload/v1463978460/cpu_xtdif3.jpg" data-fancybox-group="gallery">
                Quick View
              </a>
            </div>
          </div>
          <figcaption class="anons">
            <p>Pochette Accessoires</p>
            <p>$900.00</p>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure  class="prod-box">
          <div class="img-holder">
            <a href="product_detail.php">
              <img src="assets/images/download18.webp" style="width:100%" class="item-img-1" alt="Something">
              <img src="assets/images/download17.webp" style="width:100%" class="item-img-2" alt="Something2">
            </a>


            <div class="blok-hover">
              <a class="fancybox" href="https://res.cloudinary.com/vosidiy/image/upload/v1463978460/cpu_xtdif3.jpg" data-fancybox-group="gallery">
                Quick View
              </a>
            </div>
          </div>
          <figcaption class="anons">
            <p>Louis Vuitton Monogram Canvas </p>
            <p>$1,600.00</p>
          </figcaption>
        </figure>
      </div>

      <div class="col-md-4">
        <figure  class="prod-box">
          <div class="img-holder">
            <a href="product_detail.php">
              <img src="assets/images/download20.webp" style="width:100%" class="item-img-1" alt="Something">
              <img src="assets/images/download19.webp" style="width:100%" class="item-img-2" alt="Something2">
            </a>
            <div class="blok-hover">
              <a class="fancybox" href="https://res.cloudinary.com/vosidiy/image/upload/v1463978460/cpu_xtdif3.jpg" data-fancybox-group="gallery">
                Quick View
              </a>
            </div>
          </div>
          <figcaption class="anons">
            <p>Loop</p>
            <p>$1,600.00</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>-->

<section style="padding-top: 100px;padding-bottom: 100px;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4 border_main">
                        <img class="w-100" src="assets/images/download23.webp">
                    </div>
                    <div class="col-md-4 border_main">
                        <img class="w-100" src="assets/images/download24.webp">
                    </div>
                    <div class="col-md-4 border_main">
                        <img class="w-100" src="assets/images/download25.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
require_once("footer.php");

$conn->close();
?>

<script>
     $(document).ready(function () {
        $('.thumbnail[data-variant-name="Default"]').click();
    });
    function changeVariant(image, price) {
        // Change the main image and update price based on the selected variant
        $('.main-image').attr('src', 'admin/uploads/' + image);
        $('#current-price').html('$' + price);
    }
    // function changeImage(imageName, price, id) {
    //     console.log([imageName, price, id]);
    //     document.querySelector('.main-image').src = 'admin/uploads/'+imageName;
    //     document.querySelector('.new-price').innerText = '$'+price;
    //     document.querySelector('#pid').value = id;
    // }

    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    function decrement() {
        var t = parseInt($("#quantity").val());
        if (t > 1) {
            t = t - 1;
            $("#quantity").val(t);
        }
    }
    function increment() {
        var t = parseInt($("#quantity").val());
        if (t >= 1) {
            t=t+1;
            $("#quantity").val(t);
        }
    }
    function addToCart(id) {
    var quantity = document.getElementById("quantity").value;
    var selectedVariant = $('.thumbnail.active');
    var variantName = selectedVariant.data('variant-name');
    var variantPrice = selectedVariant.data('variant-price');
    var variantImage = selectedVariant.data('variant-image');

    // Use the default product details if no variant is selected
    if (!variantName) {
        variantName = 'Default';
        variantPrice = '<?php echo $rec["price"]; ?>'; // Use the default product price
        variantImage = '<?php echo $rec["image"]; ?>'; // Use the default product image
    }

    // Show an alert with the selected variant details
    alert('Selected Variant:\nName: ' + variantName + '\nPrice: $' + variantPrice);

    // Add the selected variant to the cart
    $.ajax({
        url: 'update_prodetail.php',
        method: 'POST',
        data: {
            id: id,
            qty: quantity,
            variantName: variantName,
            variantPrice: variantPrice,
            variantImage: variantImage,
        },
        dataType: 'json',  // Expect a JSON response
        success: function (response) {
            // Display the product name and price in the alert
            alert('Product added to the cart\nName: ' + response.productName + '\nPrice: $' + response.price);
        }
    });
}



    $('.thumbnail').click(function () {
        // Remove active class from all thumbnails
        $('.thumbnail').removeClass('active');
        // Add active class to the clicked thumbnail
        $(this).addClass('active');
    });


    // function addtocart(quantity){
    //     var id= document.querySelector('#pid').value;
    //     var quantity=document.getElementById("quantity").value;
    //     $.ajax({
    //         url:'update_prodetail.php',
    //         method:'POST',
    //         data:{id:id,qty:quantity},
    //         success:function(response){
    //             alert('Product added into the cart')
    //         }
    //     });
    // }
</script>