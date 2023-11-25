<?php
  require_once("header.php");
  require_once("database.php");
//   $query1="SELECT * FROM product";
//   $products=db::getRecords($query1);
$query = "SELECT * FROM product ORDER BY id";
$products = db::getRecords($query);

// Function to get the first variant image for a product
function getFirstVariantImage($productId)
{
    $query = "SELECT variant_image FROM product_variants WHERE product_id = {$productId} ORDER BY variant_id LIMIT 1";
    $variantImage = db::getRecord($query);
    return $variantImage;
}
  if(isset($_GET['token']) && $_GET['token']!=""){
        $vc=$_GET['token'];
        $read="SELECT * FROM user WHERE verification_code='$vc' AND verification_status='0'";
        $count=db::query($read)->num_rows;
        if($count>0){
            $p="UPDATE user SET verification_status='1' WHERE verification_code='$vc' AND verification_status='0'";
            $upd=db::query($p);
            if($upd){
                echo"<script>alert('Your Email has been verified')</script>";
                echo"<script>location='members.php'</script>";
            }
        }else{
           echo"<script>location='members.php'</script>"; 
        }
    }
?>
<style>
  


.irs-bar{
    background-color:#007bff !important;
}
.irs--flat .irs-from, .irs--flat .irs-to, .irs--flat .irs-single{
     background-color:#007bff !important;
}

.irs--flat .irs-handle>i:first-child{
    background-color:#007bff !important;
}
.irs--flat .irs-from:before, .irs--flat .irs-to:before, .irs--flat .irs-single:before{
    border:none !important;
}
.border{
    border:2px solid red !important;
}

@media (max-width: 768px){
    .btn_main_section{
        top: 0 !important;
        z-index: 99999;
        width: 25% !important;
        left: 40px !important;
    }
    .prod-box .img-holder{
        margin-top: 50px;
    }

    .badge_btn{
        z-index: 9999;
        position: absolute;
        top: 0;
        width: 100%;
        left: 0;
    }
    .prod-box .img-holder{
        height: 100% !important;
    }
    .prod-box{
        height: unset !important;
    }
    .section{
        margin-top: unset !important;
        margin-bottom: 1rem !important;
    }
    .banner_heading{
        font-size: 38px;
        line-height: 48px;
    }
    .banner{
        padding: 0 10px;
    }
    .prod-box .img-holder img{
        width: 100% !important;
        max-width: 100%;
    }
    .footer{
        padding: 25px;
    }
}

</style>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css">
<section class="banner">
  <div class="row">
    <div class="col-md-8 mx-auto">
      <h1 class="banner_heading">LOUIS VUITTON LEATHER BAGS <br>AND ACCESSORIES</h1>
      <p class="banner_paragraph">Louis Vuitton leather handbags and accessories are available in many different types of leather: Epi leather, Monogram Empreinte, Taiga, and more. The understated luxury and elegance of the House’s iconic bags, wallets and accessories made of Louis Vuitton leather convey a unique look and the spirit of Louis Vuitton. The soft and durable leather creates discreet and refined handbags and leather goods for everyday or special occasions.</p>
      <div class="row mt-3">
        <div class="col-md-3 mx-auto">
          <a href="#" class="btn btn-primary">SHOP NOW</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="inner-section mt-5">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <h2 class="filter">Filter by</h2>
      </div>

      <div class="col-md-8"></div>

      <div class="col-md-2">
        <!--<select class="form-control sort">
          <option>Sort by</option>
          <option>Newest</option>
          <option>Price (low to high)</option>
          <option>Price (high to low)</option>
          <option>Name A-Z</option>
          <option>Name Z-A</option>
        </select>-->
      </div>
    </div>
  </div>
</section>



<section class="product_section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <p class="filter_pargraph">Price</p>
            <input type="text" id="priceRange">
        <div id="rangeValues">
            Min: $<span id="min">100</span> - Max: $<span id="max">6400</span>
        </div>
        
        <div class="row">
          <div class="col-md-7">
              <p class="filter_pargraph">Color <span id="choice"></span></p>
          </div>
          <div class="col-md-2 ">
              <a class="btn-step10"><i style="margin-top: 25px;" class="fas fa-plus"></i></a>
          </div>
          
        </div>
        
        <div class="section_color" style="display:none">
            <div class="row">
                <div class="col-md-9">
                    <ul class="color-list" style="list-style-type: none;padding-left: 0px;display:flex">
                        <li style="width: 10%;background: #f5f5dc;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #f5f5dc;text-align: center;">.</li>
                        <li style="width: 10%;background: #000000;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #000000;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #0000ff;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #0000ff;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #592a2a;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #592a2a;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #7b7350;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #7b7350;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #808080;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #808080;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #f0e68c;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #f0e68c;text-align: center;margin-left: 10px;">.</li>
                    </ul>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-9">
                    <ul  class="color-list" style="list-style-type: none;padding-left: 0px;display:flex">
                        <li style="width: 10%;background: #000080;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #000080;text-align: center;">.</li>
                        <li style="width: 10%;background: #ff0000;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #ff0000;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #c0c0c0;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #c0c0c0;text-align: center;margin-left: 10px;">.</li>
                        <li style="width: 10%;background: #ffffff;border: 1px solid #cacaca;border-radius: 100px;height: 24px;color: #ffffff;text-align: center;margin-left: 10px;">.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div class="col-md-9">
      <div class="row b1">
    <?php if ($products) {
        foreach ($products as $product) {
            // Get the first variant image for the product
            $variantImage = getFirstVariantImage($product['id']);
            // Set the image URL based on whether it's a default or variant image
            $imageURL = "admin/uploads/{$product['image']}";
            ?>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-5 mt-5 section">
                <figure class="prod-box">
                    <div class="img-holder">
                        <a href="product_detail.php?id=<?php echo $product['id']; ?>" class="">
                            <!-- Display the default image -->
                            <img src="<?php echo $imageURL; ?>" style="width: 100%;" class="img_change"
                                 alt="<?php echo $product['heading']; ?>"
                                 data-default="<?php echo $imageURL; ?>"
                                 data-variant="<?php echo !empty($variantImage) ? "admin/uploads/{$variantImage['variant_image']}" : ''; ?>">
                               
                        </a>
                        <!-- hover// -->
                    </div><!-- img-holder// -->
                    <div class="badge_btn">
                        <div class="row">
                            <div class="col-md-3">
                                <a href="product_detail.php?id=<?php echo $product['id']; ?>" class="btn btn_main_section">Sale</a>
                            </div>
                        </div>
                    </div>
                    
                    <?php
                    $price = $product['discount'] != "" ? ($product['price'] - ($product['price'] * $product['discount']) / 100) : $product['price'];
                    ?>
                    <figcaption class="anons">
                        <p><?php echo $product['heading']; ?></p>
                        <p><?php echo !empty($variantImage) ? 'Variant Price' : 'Default Price'; ?>: $<?php echo $price; ?></p>
                        <form action="action.php" method="POST">
                            <input type="hidden" name="id" value="<?php echo $product['id']; ?>">
                            <button type="submit" name="add_to_cart" value="Add To Cart" class="btn btn-secondary">Add To Cart</button>
                        </form>
                    </figcaption>
                </figure>
            </div>
        <?php }
    } ?>
</div>

        <div class="row b2">
            
        </div>
        <!--<div class="row row_section pt-5">
          <div class="col-md-3 mx-auto">
            <a href="#" class="btn btn-success">Load More</a>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</section>

<?php
  require_once("footer.php")
?>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
    <script>
    $(document).ready(function () {
        // Change the image source to the variant image on mouseover
        $('.img_change').mouseover(function () {
            var variantImage = $(this).data('variant');
            if (variantImage !== '') {
                $(this).attr('src', variantImage);
            }
        });

        // Change the image source back to the default image on mouseout
        $('.img_change').mouseout(function () {
            var defaultImage = $(this).data('default');
            $(this).attr('src', defaultImage);
        });
    });
</script>


<script>

    // $(document).on('mouseenter','.img_change',function () {
    //     let id = this.getAttribute('data-id');
    //     let p_name = this.getAttribute('data-heading');
    //     let selector = $(this);

    //     $.ajax({
    //         url: 'get_product_diff_img.php',
    //         type: 'get',
    //         dataType: 'json',
    //         data: { id: id, p_name: p_name },
    //         success: function(response) {
    //             if (response.success) {
    //                 var record = response.data;

    //                 selector.closest('.section').find('.prod-box').html(`
    //                     <figure class="prod-box">
    //         <div class="img-holder">
    //             <a href="product_detail.php?id=${record.id}">
    //                 <img src="admin/uploads/${record.image}" style="width:100%;" class="new_img" alt="${record.heading}" data-id="${id}" data-heading="${p_name}">
    //             </a>
    //         </div>
    //         <div class="row">
    //             <div class="col-md-3">
    //                 <a href="product_detail.php?id=${record.id}" class="btn btn_main_section">Sale</a>
    //             </div>
    //         </div>
    //         <figcaption class="anons">
    //             <p>${record.heading}</p>
    //             <p>
    //                 ${record.discount ? `<del><span class="old-price">$${record.price}</span></del>` : ''}
    //                 $${record.discounted_price ? record.discounted_price : record.price}
    //             </p>
    //             <form action="action.php" method="POST">
    //                 <input type="hidden" name="id" value="${record.id}">
    //                 <button type="submit" name="add_to_cart" value="Add To Cart" class="btn btn-secondary">Add To Cart</button>
    //             </form>
    //         </figcaption>
    //     </figure>
    //                 `);
    //             } else {
    //                 console.log(response.message);
    //             }
    //         },
    //         error: function(xhr, status, error) {
    //             console.error(xhr.responseText);
    //         }
    //     });
    // });

    // $(document).on('mouseleave','.new_img',function () {
    //     let id = this.getAttribute('data-id');
    //     let p_name = this.getAttribute('data-heading');
    //     let selector = $(this);

    //     $.ajax({
    //         url: 'get_product_diff_img.php',
    //         type: 'get',
    //         dataType: 'json',
    //         data: { id: id, p_name: p_name, m_out: 'true' },
    //         success: function(response) {
    //             if (response.success) {
    //                 var record = response.data;

    //                 selector.closest('.section').find('.prod-box').html(`
    //                     <figure class="prod-box">
    //         <div class="img-holder">
    //             <a href="product_detail.php?id=${record.id}">
    //                 <img src="admin/uploads/${record.image}" style="width:100%;" class="img_change" alt="${record.heading}" data-id="${id}" data-heading="${p_name}">
    //             </a>
    //         </div>
    //         <div class="row">
    //             <div class="col-md-3">
    //                 <a href="product_detail.php?id=${record.id}" class="btn btn_main_section">Sale</a>
    //             </div>
    //         </div>
    //         <figcaption class="anons">
    //             <p>${record.heading}</p>
    //             <p>
    //                 ${record.discount ? `<del><span class="old-price">$${record.price}</span></del>` : ''}
    //                 $${record.discounted_price ? record.discounted_price : record.price}
    //             </p>
    //             <form action="action.php" method="POST">
    //                 <input type="hidden" name="id" value="${record.id}">
    //                 <button type="submit" name="add_to_cart" value="Add To Cart" class="btn btn-secondary">Add To Cart</button>
    //             </form>
    //         </figcaption>
    //     </figure>
    //                 `);
    //             } else {
    //                 console.log(response.message);
    //             }
    //         },
    //         error: function(xhr, status, error) {
    //             console.error(xhr.responseText);
    //         }
    //     });
    // });
    
    $(document).ready(function() {
             var colorArray = [];
               var name;
            $(".color-list li").hover(function(){
                var bcolor = $(this).css('color');
                if(bcolor=="rgb(245, 245, 220)"){
                    $("#choice").html(": beige");
                }else if(bcolor=="rgb(0, 0, 0)"){
                     $("#choice").html(": black");
                }else if(bcolor=="rgb(0, 0, 255)"){
                     $("#choice").html(": blue");
                }else if(bcolor=="rgb(89, 42, 42)"){
                     $("#choice").html(": brown");
                }else if(bcolor=="rgb(123, 115, 80)"){
                     $("#choice").html(": cream");
                }else if(bcolor=="rgb(128, 128, 128)"){
                     $("#choice").html(": grey");
                }else if(bcolor=="rgb(240, 230, 140)"){
                     $("#choice").html(": khaki");
                }else if(bcolor=="rgb(0, 0, 128)"){
                     $("#choice").html(": navy");
                }else if(bcolor=="rgb(255, 0, 0)"){
                     $("#choice").html(": red");
                }else if(bcolor=="rgb(192, 192, 192)"){
                     $("#choice").html(": silver");
                }else if(bcolor=="rgb(255, 255, 255)"){
                     $("#choice").html(": white");
                }
            });
              
            $('.color-list li').click(function() {
                var min=$("#min").text();
                var max=$("#max").text();
                var color = $(this).css('background-color');
                //var bColor = $(this).css('color');
                if(color=="rgb(245, 245, 220)"){
                    name="beige";
                }else if(color=="rgb(0, 0, 0)"){
                    name="black";
                }else if(color=="rgb(0, 0, 255)"){
                      name="blue";
                }else if(color=="rgb(89, 42, 42)"){
                      name="brown";
                }else if(color=="rgb(123, 115, 80)"){
                      name="cream";
                }else if(color=="rgb(128, 128, 128)"){
                      name="grey";
                }else if(color=="rgb(240, 230, 140)"){
                      name="khaki";
                }else if(color=="rgb(0, 0, 128)"){
                     name="navy";
                }else if(color=="rgb(255, 0, 0)"){
                      name="red";
                }else if(color=="rgb(192, 192, 192)"){
                      name="silver";
                }else if(color=="rgb(255, 255, 255)"){
                      name="white";
                }
                 if ($(this).hasClass("border")) {
                    $(this).removeClass("border");
                     colorArray.pop(name);
                } else {
                    $(this).addClass("border");
                     colorArray.push(name);
                }
               
                $.ajax({
                    type: "POST",
                    url: "choosecolor.php",
                    data: { colors: colorArray,min:min,max:max },
                    success: function(response) {
                       console.log(response);
                        // Handle the response from PHP if needed
                        $(".b1").hide();
                        $(".b2").html(response);
                        $(".b2").show();
                    }
                });
            });
            $("#priceRange").ionRangeSlider({
                type: "double",
                min: 100,
                max: 6400,
                from: 100,
                to: 6400,
                step: 10,
                postfix: "$",
                onChange: function (data) {
                    var minValue = data.from;
                    var maxValue = data.to;
                    $("#rangeValues").html(`Min: $<span id="min">${minValue}</span> - Max: $<span id="max">${maxValue}</span>`);
                    $.ajax({
                        url:'filters.php',
                        method:'POST',
                        data:{colors: colorArray,min:minValue,max:maxValue},
                        success:function(data){
                            $(".b1").hide();
                            $(".b2").html(data);
                            $(".b2").show();
                        }
                    });
                }
            });
            
        });

    $(".btn-step10").click(function() {
        $(".section_color").show();
  });
</script>