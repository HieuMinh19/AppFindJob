<?php
// initializing variables
$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'datadidong');

  $MaUser= $obj["MaUser"];
  $MaCongViec= $obj["MaCongViec"];

  if ( empty($MaUser)) 
  { 
    $errMess = "Bạn chưa đăng nhập";
    $errors ++; 
  }
    
  if ($errors == 0) {
    $query = "INSERT INTO chitietnguoixinviec (MaUser, MaCViec) 
    VALUES ('$MaUser', '$MaCongViec')";
    if(mysqli_query($db, $query)){
        $errMess = "1";
    }else{
        $errMess = "0";
    } 
}  
?>
{"kq":"<?=$errMess?>"}