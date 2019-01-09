<?php
$db = mysqli_connect("localhost","root","","datadidong");//ket noi data
mysqli_set_charset($db, "utf8");// de lay chu co dau


//$errors = 0;
$json = file_get_contents("php://input");
$obj = json_decode($json, TRUE);
//lay du lieu tu JS
$tencongviec = $obj["txtTimKiem"];
//$tencongviec = "";
$diachi = $obj["txtDiaDiem"];
  //$diachi = "nha";


class showcongviec{
    var $MaCViec;
    var $TenCViec;
    var $LuongCViec;
    var $TenTinh;
    
    function showcongviec($_MaCViec, $_TenCViec,$_LuongCViec, $_TenTinh){
        $this->MaCViec = $_MaCViec;
        $this->TenCViec = $_TenCViec;
        $this->LuongCViec = $_LuongCViec;  
        $this->TenTinh = $_TenTinh;
       
    }
}
//$raw_results = mysqli_query($db,"SELECT * FROM congviec,congty
//WHERE (`TenCongViec` LIKE '%".$search."%') and congty.MaCongTy = congviec.MaCongTy ") ;      
//
//lay test theo ten cong ty
//$quert = "SELECT * FROM congviec, tinh WHERE congviec.MaTinh = tinh.MaTinh";
//$min_length = 3; //so ki tu nhap vao
//if(strlen($tencongviec) >= $min_length){

    

    if(empty($tencongviec)){
       
        /*$quert = "SELECT * FROM congviec, tinh WHERE (congviec.MaTinh = tinh.MaTinh)";
        $result = mysqli_query($db,$quert);
        $arrshowcongviec = array();*/
       

       $result = mysqli_query($db,"SELECT * FROM congviec,tinh 
        WHERE congviec.MaTinh = tinh.MaTinh ");
        $arrshowcongviec = array();
        if($result){
            
            while($row = mysqli_fetch_array($result)){
                
                array_push($arrshowcongviec, new showcongviec($row["MaCViec"], $row["TenCViec"],$row["LuongCViec"], $row["TenTinh"] ));
            }
            echo json_encode($arrshowcongviec);
            // $errMess = "1";
        }
    }
 
    if(!empty($tencongviec)){
      
        $result = mysqli_query($db,"SELECT * FROM congviec,tinh 
        WHERE (`TenCViec` LIKE '%".$tencongviec."%') and congviec.MaTinh = tinh.MaTinh");
        $arrshowcongviec = array();
      
            while($row = mysqli_fetch_array($result)){              
                array_push($arrshowcongviec, new showcongviec( $row["MaCViec"],$row["TenCViec"],$row["LuongCViec"], $row["TenTinh"] ));
            }
            echo json_encode($arrshowcongviec); 
            // $errMess = "1";
        
    }
    /*else if(empty( $tencongviec) && !empty($diachi) ){
        $quert = "SELECT * FROM congviec, tinh WHERE (TenTinh LIKE '%$diachi%')";
        $result = mysqli_query($db,$quert);
        $arrshowcongviec = array(); 

        if($result){
            while($row = mysqli_fetch_array($result)){
            
                array_push($arrshowcongviec, new showcongviec($row["TenCViec"],$row["LuongCViec"], $row["TenTinh"] ));
            }
            echo json_encode($arrshowcongviec);
             // $errMess = "1";
        }
    }
    else{
        $quert = "SELECT * FROM congviec, tinh ";
        $result = mysqli_query($db,$quert);
        $arrshowcongviec = array();
       
        if($result){
            while($row = mysqli_fetch_array($result)){
            
                array_push($arrshowcongviec, new showcongviec($row["TenCViec"],$row["LuongCViec"], $row["TenTinh"] ));
            }
             echo json_encode($arrshowcongviec);
             $errMess = "1";
        }
    }*/



    //(`TenTinh` LIKE '%".$diachi."%') and 
     /*}else{
         $errMess = "0";
    }*/


//test
// $query = "INSERT INTO test ( taikhoan,  matkhau) 
//       VALUES('$tencongviec', '$diachi') ";
      
//       if(mysqli_query($db, $query)){
//         $errMess = "1";
//       }else{
//         $errMess = "0";
//       }
      
//}
?>