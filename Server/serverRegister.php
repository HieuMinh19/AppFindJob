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
  $password_1 = $obj["txtMatKhau"];
  $password_2 = $obj["txtRetypeMatKhau"];


  
  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  
  if (empty($username)) { 
      $errMess = "Username is required";
      $errors ++; 
    }
    

  if (empty($password_1)) { 
        $errMess = "Password is required"; 
        $errors++;
    }
    
  if ($password_1 != $password_2) {
	$errMess = "Password nhập lại không đúng";
    $errors++;
  }
  
  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM user WHERE username='$username' ";
  $result = mysqli_query($db, $user_check_query);
 
  $user = mysqli_fetch_assoc($result);
  

  if ($user) { // if user exists
    if ($user['username'] === $username) {
        $errMess = "Username đã tồn tại";
      //header('location: /register.php');
        $errors++;
    }
  }

  // Finally, register user if there are no errors in the form
 
  if ($errors == 0) {
      $password = md5($password_1);//encrypt the password before saving in the database
      $query = "INSERT INTO user ( username,  password) 
      VALUES('$username', '$password') ";
      if(mysqli_query($db, $query)){
        $errMess = "Tạo tài khoản thành công";
      }else{
        $errMess = "Tạo tài khoản thất bại";
      }
  }
  
?>
{"kq":"<?=$errMess?>"}














