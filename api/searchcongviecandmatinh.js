const searchcongviecandmatinh = (tencongviec, matinh) => {
    url = `http://192.168.1.101/servershowcongviec.php?tencongviec=${tencongviec}&matinh=${matinh}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchcongviecandmatinh;
