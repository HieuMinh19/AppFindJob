const getMaCViec = (macviec) => {
    let url;

  url =  `http://192.168.1.101/servershowchitietcongviec.php?MaCViec=${macviec}`;

    
    return fetch(url)
    .then(res => res.json());
};

export default getMaCViec;
