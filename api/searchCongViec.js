const searchCongViec = (TenCV,DiaChi) => {
<<<<<<< HEAD

    fetch("http://192.168.0.126/servershowcongviec.php",{

=======
    fetch("http://192.168.0.107/servershowcongviec.php",{
>>>>>>> hieu_le
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        "tencongviec":TenCV,
        "tentinh": DiaChi
        })
       
     })
    .then((response) => {response.json(), console.log( response)})
}
module.exports = searchCongViec;


