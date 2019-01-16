
const getMaUpDate = (macviec) => {
    let url;
    
  url =  `http://192.168.3.29/serverUpdateNXViec.php?MaNXViec=${macviec}`;
  console.log("chuoi responseData tra ve ");
    
    return fetch(url)
    .then(res => res.json()
    
    );
    
};

export default getMaUpDate;
