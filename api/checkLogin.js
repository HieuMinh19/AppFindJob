const checkLogin = (token) => (
<<<<<<< HEAD

    // console.log("sdsdssssssssssssssssss"),
    fetch('http://192.168.0.126/check_login.php',

=======
    fetch('http://192.168.0.107/check_login.php',
>>>>>>> hieu_le

    {   
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

module.exports = checkLogin;
