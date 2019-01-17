const searchcongviecandmatinh = (tencongviec, matinh) => {
    url = `http://172.30.192.17/servershowcongviec.php?tencongviec=${tencongviec}&matinh=${matinh}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchcongviecandmatinh;
