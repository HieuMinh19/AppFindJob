<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
$MaUser = $obj['MaUser'];
class showCV{  
    var $MaNXinViec;
    var $TenNXinViec;
    var $TrinhDo;
    var $EmailNXinViec;
    var $TentTinh;
    var $SoDienThoai;
    var $DiaChiNXViec;
    var $NgaySinh;
 
    function showCV($_MaNXViec,$_Ten, $_TrinhDo,$_Email, $_Tinh,$_SDT, $_DiaChi,$_NgaySinh){
        $this->MaNXinViec = $_MaNXViec;
        $this->TenNXinViec = $_Ten;
        $this->TrinhDo = $_TrinhDo;  
        $this->EmailNXinViec = $_Email;
        $this->TentTinh = $_Tinh;
        $this->SoDienThoai = $_SDT;  
        $this->DiaChiNXViec = $_DiaChi;
        $this->NgaySinh = $_NgaySinh;
    }
}
        $result = mysqli_query($db,"SELECT MaNXinViec, TenNXinViec, nxv.MaTrinhDo, nxv.MaTinh, EmailNXinViec, SoDienThoai, DiaChiNXViec, NgaySinh,
                                    trinhdo.tenTrinhDo, tinh.TenTinh, user.Mauser 
        FROM nguoixinviec as nxv, trinhdo,tinh,user 
        WHERE 
            user.MaUser = nxv.MaUser 
            and 
            tinh.MaTinh = nxv.MaTinh 
            and 
            trinhdo.MaTrinhDo = nxv.MaTrinhDo
            and

            user.MaUser =  $MaUser");
        $arrshowcongviec = array();
        
            while($row = mysqli_fetch_array($result)){           
                array_push($arrshowcongviec, new showCV( $row["MaNXinViec"],$row["TenNXinViec"],$row["tenTrinhDo"],$row["EmailNXinViec"],$row["TenTinh"], $row["SoDienThoai"],$row["DiaChiNXViec"],$row["NgaySinh"]));
            }
            echo json_encode($arrshowcongviec); 
            // $errMess = "1";
        
?>