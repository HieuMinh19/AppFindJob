<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau
//
// $json = file_get_contents("php://input");
// $obj = json_decode($json, TRUE);
// //lay du lieu tu JS
// $macongviec = $obj["macongviec"];
// $macongviec = "1";
$MaCViec = $_GET['MaNXViec'];

class showcongviec{  
    var $MaNXinViec;
    var $TenNXinViec;//
    var $tenTrinhDo;//tenTrinhDo
    var $MaTrinhDo;
    var $EmailNXinViec;//
    var $TenTinh;//
    var $MaTinh;
    var $SoDienThoai;//SoDienThoai
    var $DiaChiNXViec;//DiaChiNXViec
    var $NgaySinh;//NgaySinh
 
    function showcongviec($_MaNXinViec,$_TenNXinViec, $_tenTrinhDo,$_MaTrinhDo, $_EmailNXinViec,$_TenTinh, $_MaTinh,$_SoDienThoai,$_DiaChiNXViec,$_NgaySinh){
        
        $this->MaNXinViec = $_MaNXinViec;
        $this->TenNXinViec = $_TenNXinViec;
        $this->tenTrinhDo = $_tenTrinhDo;  
        $this->MaTrinhDo = $_MaTrinhDo;
        $this->EmailNXinViec = $_EmailNXinViec;
        $this->TenTinh = $_TenTinh;  
        $this->MaTinh = $_MaTinh;
        $this->SoDienThoai = $_SoDienThoai;
        $this->DiaChiNXViec = $_DiaChiNXViec;
        $this->NgaySinh = $_NgaySinh;
     
       
    }
}
$result = mysqli_query($db,"SELECT MaNXinViec, TenNXinViec, nxv.MaTrinhDo, nxv.MaTinh, EmailNXinViec, SoDienThoai, DiaChiNXViec, NgaySinh,
trinhdo.tenTrinhDo, tinh.TenTinh, user.MaUser 
FROM nguoixinviec as nxv, trinhdo,tinh,user 
WHERE 
user.MaUser = nxv.MaUser 
and 
tinh.MaTinh = nxv.MaTinh 
and 
trinhdo.MaTrinhDo = nxv.MaTrinhDo
and

nxv.MaNXinViec =  $MaCViec");

$arrshowcongviec = array();

while($row = mysqli_fetch_array($result)){           
array_push($arrshowcongviec, new showcongviec($row["MaNXinViec"],$row["TenNXinViec"],$row["tenTrinhDo"],
$row["MaTrinhDo"],$row["EmailNXinViec"], $row["TenTinh"],
$row["MaTinh"],$row["SoDienThoai"],$row["DiaChiNXViec"],$row["NgaySinh"] ));
}
echo json_encode($arrshowcongviec); 


?>


