const getMaCViec = (macviec) => {
    let url;
<<<<<<< HEAD

    console.log(" lay macviec trong getMaCViec.js",macviec);
  url =  `http://192.168.0.126/servershowchitietcongviec.php?MaCViec=${macviec}`;


=======
  url =  `http://192.168.0.107/servershowchitietcongviec.php?MaCViec=${macviec}`;
>>>>>>> hieu_le
    
    return fetch(url)
    .then(res => res.json());
};

export default getMaCViec;
