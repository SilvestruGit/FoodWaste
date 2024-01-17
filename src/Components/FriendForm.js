import React, { useState } from 'react';
import '../CSS/friendForm.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    vegetarian: false,
    vegan: false,
    carnivor: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., sending data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Vegetarian:
        <input type="checkbox" name="vegetarian" checked={formData.vegetarian} onChange={handleChange} />
      </label>
      <br />
      <label>
        Vegan:
        <input type="checkbox" name="vegan" checked={formData.vegan} onChange={handleChange} />
      </label>
      <br />
      <label>
        Carnivor:
        <input type="checkbox" name="carnivor" checked={formData.carnivor} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
