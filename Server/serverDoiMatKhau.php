<?php
// initializing variables
$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'datadidong');

// REGISTER USER
  // receive all input values from the form
  $username = $obj["txtTaiKhoan"];
  $password_1 = $obj["txtMatKhauCu"];
  $password_2 = $obj["txtRetypeMatKhauMoi"];
  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  
  if(empty($username)) { 
      $errMess = "Nhập Tài Khoản";
      $errors ++; 
    }
    

  if(empty($password_1)) { 
        $errMess = "Nhập Mật Khẩu Mới"; 
        $errors++;
    }
    
    if(empty($password_2)) { 
        $errMess = "Nhập Lại Mật Khẩu Mới"; 
        $errors++;
    } 
  if ($password_1 != $password_2) {
	$errMess = "Mật Khẩu không giống nhau";
    $errors++;
  }
  
  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM user WHERE username='$username' ";
  $result = mysqli_query($db, $user_check_query);
 
  $user = mysqli_fetch_assoc($result);
  
  if ($errors == 0){
    if ($user) { // if user exists
        $password_2 = md5($password_2);
        $query1 = "UPDATE user SET password='$password_2' WHERE username='$username'";
          if(mysqli_query($db, $query1)){
            $errMess = "Thành Công";
          }else{
            $errMess = "Thất Bại";
          }
        }
  }else{
    $errMess = "Đổi Mật Khẩu Không Thành Công";
  }
       
  

  // Finally, register user if there are no errors in the form
 /////////////
  
  
?>
{"kq":"<?=$errMess?>"}

















