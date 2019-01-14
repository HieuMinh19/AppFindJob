const getMaCViec = (macviec) => {
    let url;
  url =  `http://10.0.129.175/servershowchitietcongviec.php?MaCViec=${macviec}`;
    
    return fetch(url)
    .then(res => res.json());
};

export default getMaCViec;
