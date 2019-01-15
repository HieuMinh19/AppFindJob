const getMaCViec = (macviec) => {
    let url;

    console.log(" lay macviec trong getMaCViec.js",macviec);
  url =  `http://192.168.3.29/servershowchitietcongviec.php?MaCViec=${macviec}`;


    
    return fetch(url)
    .then(res => res.json());
};

export default getMaCViec;
