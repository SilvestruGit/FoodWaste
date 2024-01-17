import { useState } from 'react';
import axios from 'axios';

import '../CSS/form.css';

const AddProdusForm = () => {
  const [produsData, setProdusData] = useState({
    name: '',
    imageSrc: '',
    expirationDate: '',
    vegan: false,
    vegetarian: false,
    carnivor: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProdusData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(produsData);
        console.log(JSON.stringify(produsData));
      const response = await axios.post('http://localhost:5000/produs', produsData);

      console.log('Produs added successfully:', response.data);

      setProdusData({
        name: '',
        imageSrc: '',
        expirationDate: '',
        vegan: false,
        vegetarian: false,
        carnivor: false,
      });
    } catch (error) {
      console.error('Error adding produs:', error);
    }
  };

  return (
    <form className='add-produs-form' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={produsData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image Source:
        <input type="text" name="imageSrc" value={produsData.imageSrc} onChange={handleChange} />
      </label>
      <br />
      <label>
        Expiration Date:
        <input type="text" name="expirationDate" value={produsData.expirationDate} onChange={handleChange} placeholder={"yyyy-mm-dds"} />
      </label>
      <br />
      <label>
        Vegan:
        <input type="checkbox" name="vegan" checked={produsData.vegan} onChange={handleChange} />
      </label>
      <br />
      <label>
        Vegetarian:
        <input type="checkbox" name="vegetarian" checked={produsData.vegetarian} onChange={handleChange} />
      </label>
      <br />
      <label>
        Carnivor:
        <input type="checkbox" name="carnivor" checked={produsData.carnivor} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Produs</button>
    </form>
  );
};

export default AddProdusForm;
