const [formLte, setFormLte] = useState([
    { lte: '', gte: '' }
])

const handleFormChange4 = (event, index) => {
    let data = [...formLte];
    data[index][event.target.name] = event.target.value;
    setFormLte(data);
}

const removeFields3 = (index) => {
    let data = [...formLte];
    data.splice(index, 1)
    setFormLte(data)
}