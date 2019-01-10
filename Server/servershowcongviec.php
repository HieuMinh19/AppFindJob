<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau


//$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
//lay du lieu tu JS
$tencongviec = $obj["tencongviec"];
//$tencongviec = "viet";
$diachi = $obj["tentinh"];
  //$diachi = "nha";


class showcongviec{  
    var $TenCTy;
    var $TenCViec;
    var $TenTinh;
    var $LuongCViec;
    var $YeuCauCViec;
    var $KinhNghiemCViec;
    var $TrinhDoCViec;
 
    function showcongviec($_TenCTy, $_TenCViec,$_TenTinh, $_LuongCViec,$_YeuCauCViec, $_KinhNghiemCViec,$_TrinhDoCViec){
        
        $this->TenCTy = $_TenCTy;
        $this->TenCViec = $_TenCViec;  
        $this->TenTinh = $_TenTinh;
        $this->LuongCViec = $_LuongCViec;
        $this->YeuCauCViec = $_YeuCauCViec;  
        $this->KinhNghiemCViec = $_KinhNghiemCViec;
        $this->TrinhDoCViec = $_TrinhDoCViec;
     
       
    }
}

<<<<<<< HEAD
      
=======
>>>>>>> 65eceb802f9dab5c975efe6c8655e5c5e4bac914
        $result = mysqli_query($db,"SELECT TenCTy, TenCViec, TenTinh, LuongCViec, YeuCauCViec, KinhNghiemCViec, TrinhDoCViec 
        FROM congty, congviec,tinh,chitietcongviec 
        WHERE 
            congviec.MaCViec = chitietcongviec.MaCViec 
            and 
            congviec.MaCTy = congty.MaCTy 
            and 
<<<<<<< HEAD
            congviec.MaTinh and tinh.MaTinh
           ");

=======
            congviec.MaTinh = tinh.MaTinh
           ");
>>>>>>> 65eceb802f9dab5c975efe6c8655e5c5e4bac914

        $arrshowcongviec = array();
      
            while($row = mysqli_fetch_array($result)){              
                array_push($arrshowcongviec, new showcongviec( $row["TenCTy"],$row["TenCViec"],$row["TenTinh"], $row["LuongCViec"],$row["YeuCauCViec"],$row["KinhNghiemCViec"], $row["TrinhDoCViec"] ));
            }
            echo json_encode($arrshowcongviec); 
            // $errMess = "1";
        

?>