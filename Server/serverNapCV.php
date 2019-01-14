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
  
  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  
//   if (empty($username)) { 
//       $errMess = "Username is required";
//       $errors ++; 
//     }
    

//   if (empty($password_1)) { 
//         $errMess = "Password is required"; 
//         $errors++;
//     }
    
//   if ($password_1 != $password_2) {
// 	$errMess = "Password nhập lại không đúng";
//     $errors++;
//   }
  
//   // first check the database to make sure 
//   // a user does not already exist with the same username and/or email
//   $user_check_query = "SELECT * FROM user WHERE username='$username' ";
//   $result = mysqli_query($db, $user_check_query);
 
//   $user = mysqli_fetch_assoc($result);
  

//   if ($user) { // if user exists
//     if ($user['username'] === $username) {
//         $errMess = "Username đã tồn tại";
//       //header('location: /register.php');
//         $errors++;
//     }
//   }

//   // Finally, register user if there are no errors in the form
 
//   if ($errors == 0) {
//       $password = md5($password_1);//encrypt the password before saving in the database
//       $query = "INSERT INTO user ( username,  password) 
//       VALUES('$username', '$password') ";
//       if(mysqli_query($db, $query)){
//         $errMess = "Thành Công";
//       }else{
//         $errMess = "Thất Bại";
//       }
      
    //$TenNXinViec,$EmailNXinViec,$DiaChiNXViec,$SoDienThoai,$MaTinh, $MaTrinhDo 
//   }
  
?>
{"kq":"<?=$errMess?>"}














