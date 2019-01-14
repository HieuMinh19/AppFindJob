<?php
// initializing variables
$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'datadidong');
  $MaUser = $obj["MaUser"];
//$MaUser = "3";
  
  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check_query = "SELECT * FROM nguoixinviec WHERE MaUser='$MaUser' ";
  $result = mysqli_query($db, $user_check_query);
 
  $user = mysqli_fetch_assoc($result);
  print_r(json_encode($user));
  
  // Finally, register user if there are no errors in the for
  
?>














