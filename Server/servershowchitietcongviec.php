<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau
//
// $json = file_get_contents("php://input");
// $obj = json_decode($json, TRUE);
// //lay du lieu tu JS
// $macongviec = $obj["macongviec"];
// $macongviec = "1";
$MaCViec = $_GET['MaCViec'];

class showcongviec{  
    var $MaCViec;
    var $TenCTy;
    var $TenCViec;
    var $TenTinh;
    var $LuongCViec;
    var $YeuCauCViec;
    var $KinhNghiemCViec;
    var $TrinhDoCViec;
 
    function showcongviec($_MaCViec,$_TenCTy, $_TenCViec,$_TenTinh, $_LuongCViec,$_YeuCauCViec, $_KinhNghiemCViec,$_TrinhDoCViec){
        $this->MaCViec = $_MaCViec;
        $this->TenCTy = $_TenCTy;
        $this->TenCViec = $_TenCViec;  
        $this->TenTinh = $_TenTinh;
        $this->LuongCViec = $_LuongCViec;
        $this->YeuCauCViec = $_YeuCauCViec;  
        $this->KinhNghiemCViec = $_KinhNghiemCViec;
        $this->TrinhDoCViec = $_TrinhDoCViec;
     
       
    }
}
        $result = mysqli_query($db,"SELECT congviec.MaCViec, TenCTy, TenCViec, TenTinh, LuongCViec, YeuCauCViec, KinhNghiemCViec, TrinhDoCViec 
        FROM congty, congviec,tinh,chitietcongviec 
        WHERE 
            congviec.MaCViec = chitietcongviec.MaCViec 
            and 
            congviec.MaCTy = congty.MaCTy 
            and 
            congviec.MaTinh = tinh.MaTinh
            and

            chitietcongviec.MaCViec =  $MaCViec
           ");
        $arrshowcongviec = array();
      
            while($row = mysqli_fetch_array($result)){              
                array_push($arrshowcongviec, new showcongviec( $row["MaCViec"],$row["TenCTy"],$row["TenCViec"],$row["TenTinh"], $row["LuongCViec"],$row["YeuCauCViec"],$row["KinhNghiemCViec"], $row["TrinhDoCViec"] ));
            }
            echo json_encode($arrshowcongviec); 

// $quert = "SELECT * FROM chitietcongviec WHERE MaCViec =  $MaCViec";
// $result = mysqli_query($db,$quert);
// $arrshowchitietcongviec = array();
// class showchitietcongviec{
//     var $YeuCauCViec;
//     var $KinhNghiemCViec;
//     var $TrinhDoCViec;
    
//     function showchitietcongviec($_YeuCauCViec,$_KinhNghiemCViec, $_TrinhDoCViec){
//         $this->YeuCauCViec = $_YeuCauCViec;
//         $this->KinhNghiemCViec = $_KinhNghiemCViec;
//         $this->TrinhDoCViec = $_TrinhDoCViec;
        
//     }
// }

// while($row = mysqli_fetch_array($result)){
     
//     array_push($arrshowchitietcongviec, new showchitietcongviec($row["YeuCauCViec"],$row["KinhNghiemCViec"], $row["TrinhDoCViec"]));
// }

// echo json_encode($arrshowchitietcongviec);
?>


