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


?>















