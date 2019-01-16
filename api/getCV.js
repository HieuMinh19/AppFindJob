const getCV = (id) => (
    fetch('http://192.168.1.101/serverGetCV.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(res => res.json())
);
module.exports = getCV;
