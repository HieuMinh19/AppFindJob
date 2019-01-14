const searchcongviecandmatinh = (tencongviec, matinh) => {
  
    url = `http://10.0.129.175/servershowcongviec.php?tencongviec=${tencongviec}&matinh=${matinh}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchcongviecandmatinh;
