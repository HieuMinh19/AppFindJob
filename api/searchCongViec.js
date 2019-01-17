const searchCongViec = (TenCV,DiaChi) => {

    fetch("http://172.30.192.17/servershowcongviec.php",{

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


