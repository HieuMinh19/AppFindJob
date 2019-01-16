const checkNapHoSo = (MaUser) => (

    fetch('http://192.168.1.101/check_CV.php',

    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ MaUser })
    })
    .then(res => res.json())
);

module.exports = checkNapHoSo;