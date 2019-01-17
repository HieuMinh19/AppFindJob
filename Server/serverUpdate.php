<?php
// initializing variables
$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'datadidong');

// REGISTER USER
  // receive all input values from the form

    $MaNXinViec = $obj["a"];
  $TenNXinViec = $obj["TenNXinViec"];
  $EmailNXinViec = $obj["EmailNXinViec"];
  $DiaChiNXViec  = $obj["DiaChiNXViec"];
  $SoDienThoai = $obj["SoDienThoai"];
  $MaTinh = $obj["MaTinh"];
  $MaTrinhDo = $obj["MaTrinhDo"];
  // $NgaySinh= $obj["NgaySinh"];
//   $MaUser= $obj["MaUser"];

$query = "UPDATE nguoixinviec SET ";

if (!empty($SoDienThoai)) 
{ 
  // $errMess = "C?n nh?p d? S? Ði?n Tho?i";
  $errors ++; 
  //
  $query .="SoDienThoai ='$SoDienThoai'";
}
if (!empty($DiaChiNXViec) ) 
{ 
  if($errors != 0){
    $query.=", DiaChiNXViec='$DiaChiNXViec'";
  }else{
    $query.=" DiaChiNXViec='$DiaChiNXViec'";
    $errors ++;
  }
  //$errMess = "B?n Chua Nh?p Ð?a Ch?";
 
}
if (!empty($EmailNXinViec)) 
{ 
  if( $errors != 0){
    $query.=", EmailNXinViec = '$EmailNXinViec'";
  }else{
    $query.="EmailNXinViec = '$EmailNXinViec'";
    $errors ++;
  }
}
  if (!empty($TenNXinViec)) 
  { 
    if($errors != 0)
      $query .= ", TenNXinViec = '$TenNXinViec'";
    else{
      $query .= "TenNXinViec = '$TenNXinViec'";
      $errors ++;
    }
  }
      
 
 
 

  if ($errors == 0) {
    $query .= "
     MaTinh =$MaTinh, MaTrinhDo = $MaTrinhDo
    WHERE MaNXinViec =  $MaNXinViec ";
   
    if(mysqli_query($db, $query)){
        $errMess = "Cập Nhật Thành Công";
    }else{
        $errMess = "Cập Nhật Thất Bại";
    } 
}
else{
  $query .= ",
  MaTinh =$MaTinh, MaTrinhDo = $MaTrinhDo
 WHERE MaNXinViec =  $MaNXinViec ";

 if(mysqli_query($db, $query)){
     $errMess = "Cập Nhật Thành Công";
 }else{
     $errMess = "Cập Nhật Thất Bại";
 } 
}  
?>
{"kq":"<?=$errMess?>"}














