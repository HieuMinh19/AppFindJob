<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau


//$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
//lay du lieu tu JS
//$tencongviec = "";
//$tencongviec = "viet";
//$diachi = "";
//$diachi = 1;
  //$diachi = "nha";


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

        $result = mysqli_query($db,"SELECT congviec.MaCViec,TenCTy, TenCViec, TenTinh, LuongCViec, YeuCauCViec, KinhNghiemCViec, TrinhDoCViec 
        FROM congty, congviec,tinh,chitietcongviec 
        WHERE 
            congviec.MaCViec = chitietcongviec.MaCViec 
            and 
            congviec.MaCTy = congty.MaCTy 
            and 
            congviec.MaTinh = tinh.MaTinh
            and TinhChatCViec = 1

           ");

        $arrshowcongviec = array();
      
            while($row = mysqli_fetch_array($result)){              
                array_push($arrshowcongviec, new showcongviec( $row["MaCViec"],$row["TenCTy"],$row["TenCViec"],$row["TenTinh"], $row["LuongCViec"],$row["YeuCauCViec"],$row["KinhNghiemCViec"], $row["TrinhDoCViec"] ));
            }
            echo json_encode($arrshowcongviec); 
            // $errMess = "1";
        

?>