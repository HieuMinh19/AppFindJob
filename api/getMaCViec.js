const getMaCViec = (macviec) => {
    let url;

  url =  `http://172.30.192.17/servershowchitietcongviec.php?MaCViec=${macviec}`;

    
    return fetch(url)
    .then(res => res.json());
};

export default getMaCViec;
