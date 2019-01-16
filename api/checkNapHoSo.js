const checkNapHoSo = (MaUser) => (
<<<<<<< HEAD
    fetch('http://192.168.0.126/check_CV.php',
=======
    fetch('http://192.168.0.107/check_CV.php',
>>>>>>> hieu_le
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