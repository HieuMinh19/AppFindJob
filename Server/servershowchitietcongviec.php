<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau
//
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
//lay du lieu tu JS
$macongviec = $obj["macongviec"];
//$macongviec = "1";

$quert = "SELECT * FROM chitietcongviec WHERE MaCViec =  1";
$result = mysqli_query($db,$quert);
$arrshowchitietcongviec = array();
class showchitietcongviec{
    var $YeuCauCViec;
    var $KinhNghiemCViec;
    var $TrinhDoCViec;
    
    function showchitietcongviec($_YeuCauCViec,$_KinhNghiemCViec, $_TrinhDoCViec){
        $this->YeuCauCViec = $_YeuCauCViec;
        $this->KinhNghiemCViec = $_KinhNghiemCViec;
        $this->TrinhDoCViec = $_TrinhDoCViec;
        
    }
}

while($row = mysqli_fetch_array($result)){
     
    array_push($arrshowchitietcongviec, new showchitietcongviec($row["YeuCauCViec"],$row["KinhNghiemCViec"], $row["TrinhDoCViec"]));
}

echo json_encode($arrshowchitietcongviec);
?>


