<?php
// initializing variables
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'datadidong');
$key = "example_key";

$username = $obj['username'];
$password = $obj['password'];
//$username = "duc123";
//$password ="123";
$sql = "SELECT * FROM user WHERE username='$username' and password=md5('$password')";
$result = mysqli_query($db,$sql);

$user = mysqli_fetch_assoc($result);

if($user){
	$jwt = getToken($user);
	$array = array('token'=>$jwt, 'user'=>$user);
  print_r(json_encode($array));
 
}
else{
	echo 'SAI_THONG_TIN_DANG_NHAP';
}


// REGISTER USER
  // receive all input values from the form
/*$username = $obj["TaiKhoan"];
  $password =$obj["txtMatKhau"];
 
  //$password_2 = $obj["txtRetypeMatKhau"];

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array*/

  /*if (empty($username)) { 
      $errMess = "Nhập Tài Khoản";
      $errors ++; 
    }
    

  if (empty($password)) { 
        $errMess = "Nhập Mật Khẩu"; 
        $errors++;
    }
    
//   if ($password_1 != $password_2) {
// 	$errMess = "Password nhập lại không đúng";
//     $errors++;
//   }
  

if ($errors == 0) {
    $password = md5($password);
    $query = "SELECT * FROM user WHERE username='$username' AND password='$password'";
    $results = mysqli_query($db, $query);
    
  
      
    if (mysqli_num_rows($results) == 1) {
        $errMess = "1";
      //$row = mysqli_fetch_array($results);
     // $MaUser= $row['MaUser'];
      
      
      //$_SESSION['mauser'] = $MaUser;
      //$_SESSION['username'] = $username;
    
     // $_SESSION['success'] = "You are now logged in";
  
    //header('location: /DoAn.php');
    }else {
        $errMess = "Thất Bại";
      //echo"Login ko thanh cong";
    }
}*/



?>















