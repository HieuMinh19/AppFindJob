const searchcongviecandmatinh = (tencongviec, matinh) => {
  
<<<<<<< HEAD

    url = `http://192.168.0.126/servershowcongviec.php?tencongviec=${tencongviec}&matinh=${matinh}`;

=======
    url = `http://192.168.0.107/servershowcongviec.php?tencongviec=${tencongviec}&matinh=${matinh}`;
>>>>>>> hieu_le
    return fetch(url)
    .then(res => res.json());
};

export default searchcongviecandmatinh;
