const checkLogin = (token) => (

    // console.log("sdsdssssssssssssssssss"),
    fetch('http://192.168.3.29/check_login.php',


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
