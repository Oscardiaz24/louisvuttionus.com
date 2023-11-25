<?php
require_once("header.php");
require_once("database.php");
 if(!isset($_SESSION['id'])){
    echo"<script>location='index.php'</script>";
}
$id=$_SESSION['id'];
$sql="SELECT * FROM user WHERE id='$id'";
$rec=db::getRecord($sql);

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
            <h2>Profile</h2>
        </div>
    </div>
</div>
<div class="cart-area pb-80">
    <div class="container">
        <div class="row pb-120">
            <div class="col-sm-12">
                <form action="action.php" method="POST">
                    <label>Name:</label>
                    <input type="text" name="name" value="<?php echo $rec['name']; ?>" class="form-control" required>
                     <label class="mt-3">Email:</label>
                    <input type="text" name="email" value="<?php echo $rec['email']; ?>" class="form-control" required>
                    <label class="mt-3">Password:</label>
                    <input type="text" name="password" value="<?php echo $rec['password']; ?>" class="form-control" required>
                    <div class="row mt-3">
                        <div class="col-3">
                            <input type="hidden" name="id" value="<?php echo $id; ?>">
                            <button type="submit" name="update_profile" class="btn btn-secondary" style="padding:10px;border-radius:40px;background: #990000;border: none;font-size:10px">Update Profile</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>
<?php
    require_once("footer.php")
?>