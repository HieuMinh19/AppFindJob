
const getMaUpDate = (macviec) => {
    let url;
    
  url =  `http://172.30.192.17/serverUpdateNXViec.php?MaNXViec=${macviec}`;
  console.log("chuoi responseData tra ve ");
    
    return fetch(url)
    .then(res => res.json()
    
    );
    
};

export default getMaUpDate;
