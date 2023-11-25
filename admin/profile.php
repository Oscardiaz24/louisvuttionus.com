<?php
error_reporting(0); 
session_start();
$admin = $_SESSION['email'];
if($admin=="")
{
  echo "<script>location='index.php'</script>";
  exit();
}
include("header.php");
include("sidebar.php");
require_once("database.php");
$status = $_GET['status'];
 
    if($status==1)
{
  ?>
  <script type="text/javascript">
swal({
  title: "Success!",
  text: "Updated Successfully !",
  type: "success",
  timer: 2000,
  showConfirmButton: true
}, function(){
      // window.location.href = "//stackoverflow.com";
});
  </script>
  <?php
}
 
$sql = "SELECT * FROM admin WHERE email='$admin'";
$res = db::getrecord($sql);


?>

 
        <div class="container">
            
                <div class="row">
                <div class="col-12">
                    <h1>Profile</h1>
                    
                </div>
              
            </div>
            
            <div class="row sortable">
               <div class="col-xl-11 col-lg-11 mb-11">
            <div class="card">
                        <div class="card-body">
                            <form method="post" action="action.php" enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" name="name" required value="<?php echo $res['name']; ?>">
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text" class="form-control" readonly value="<?php echo $res['email']; ?>">
                                        <small>Email cannot be changed</small>
                                    </div>
                                    
                                    
                                    <div class="form-group">
                                        <label>password</label>
                                        <input type="text" class="form-control"  name="password" required  value="<?php echo $res['password']; ?>">
                                    </div>
                                    
                                    
                                  
                                    
                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" class="form-control" name="doc_file">
                                    </div>
                                    
                                    <center>
                                                 <button class="btn" name="update" style="border:1px solid grey;border-radius:0px">Update</button>
                                                
                                                 
                                    </center>
                                    
                                    
                                </div>
                                
                                 <div class="col-md-6">
                                     <img src="uploads/<?php echo $res['image']; ?>" style="width:100%">
                                     </div>
                                     
                            
                                
                            </div>
                            </form>
                           
                        </div>
                    </div>
                   
                   
                   
                   
                   
                 </div>  
            </div>
            
            </div>
       </div>

         
         
     
 