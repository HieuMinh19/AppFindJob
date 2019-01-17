const checkLogin = (token) => (
    fetch('http://172.30.192.17/check_login.php',

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
