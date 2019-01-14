const checkLogin = (token) => (
<<<<<<< HEAD
    fetch('http://192.168.0.103/check_login.php',
=======

    fetch('http://192.168.3.29/check_login.php',


>>>>>>> origin/ducnguyen
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
