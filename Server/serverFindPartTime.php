<?php
$db = mysqli_connect("localhost","root","","timviec");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau
$quert = "SELECT * FROM chitietcongviec";
$result = mysqli_query($db,$quert);
$arrshowchitietcongviec = array();

class showchitietcongviec{
    var $MaChiTietCV;
    var $MaLoaiCV;
    var $MaNganh;
    var $TenCV;
    var $SoLuong;
    var $YeuCau;
    var $DaiNgo;
    var $MoTa;
    var $ThongTin;
    var $MucLuong;

    function showchitietcongviec($_MaChiTietCV, $_MaLoaiCV, $_MaNganh, $_TenCV, $_SoLuong, $_YeuCau, $_DaiNgo, $_MoTa, $_ThongTin, $_MucLuong){
        $this->MaChiTietCV = $_MaChiTietCV;
        $this->MaLoaiCV = $_MaLoaiCV;
        $this->MaNganh = $_MaNganh;
        $this->TenCV = $_TenCV;
        $this->SoLuong = $_SoLuong;
        $this->YeuCau = $_YeuCau;
        $this->DaiNgo = $_DaiNgo;
        $this->MoTa = $_MoTa;
        $this->ThongTin = $_ThongTin;
        $this->MucLuong = $_MucLuong;      
       
    }
}

while($row = mysqli_fetch_array($result)){
   
    array_push($arrshowchitietcongviec, new showchitietcongviec($row["MaChiTietCV"], $row["MaLoaiCV"], $row["MaNganh"], $row["TenCV"], $row["SoLuong"], $row["YeuCau"], $row["DaiNgo"], $row["ThongTin"], $row["MaChiTietCV"], $row["MucLuong"]));
}

echo json_encode($arrshowchitietcongviec);
?>