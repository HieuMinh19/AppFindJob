<?php
// initializing variables
$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'datadidong');

// REGISTER USER
  // receive all input values from the form
  $TenNXinViec = $obj["TenNXinViec"];
  $EmailNXinViec = $obj["EmailNXinViec"];
  $DiaChiNXViec  = $obj["DiaChiNXViec"];
  $SoDienThoai = $obj["SoDienThoai"];
  $MaTinh = $obj["MaTinh"];
  $MaTrinhDo = $obj["MaTrinhDo"];
  $NgaySinh= $obj["NgaySinh"];
  $MaUser= $obj["MaUser"];

  if ( empty($TenNXinViec)) 
  { 
    $errMess = "Bạn chưa Nhập Tên";
    $errors ++; 
  }
  if (empty($EmailNXinViec)) 
  { 
    $errMess = "Bạn Chưa Nhập Email";
    $errors ++; 
  }
  if ( empty($DiaChiNXViec) ) 
  { 
    $errMess = "Bạn Chưa Nhập Địa Chỉ";
    $errors ++; 
  }
  if (empty($SoDienThoai)) 
  { 
    $errMess = "Cần nhập đủ Số Điện Thoại";
    $errors ++; 
  }
  if (empty($MaUser)) 
  { 
    $errMess = "Mã user không hợp lệ";
    $errors ++; 
  }
  
  if ($errors == 0) {
    $query = "INSERT INTO nguoixinviec ( TenNXinViec,  EmailNXinViec, NgaySinh, DiaChiNXViec, MaTinh, SoDienThoai, MaTrinhDo, MaUser) 
    VALUES ('$TenNXinViec', '$EmailNXinViec','$NgaySinh', '$DiaChiNXViec', '$MaTinh', '$SoDienThoai','$MaTrinhDo','$MaUser')";
    if(mysqli_query($db, $query)){
        $errMess = "Tạo Hồ Sơ Thành Công";
    }else{
        $errMess = "Tạo Hồ Sơ Thất Bại";
    } 
}  
?>
{"kq":"<?=$errMess?>"}














