import React, { useState } from 'react';
import '../CSS/friendForm.css';

const ProductForm = ({ addFriend }) => {
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
    const dietaryPreference = formData.vegan ? 'vegan' :
      formData.vegetarian ? 'vegetarian' :
        formData.carnivor ? 'carnivor' : '';
    addFriend({ name: formData.name, dietaryPreference });
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="friend-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" name="vegetarian" checked={formData.vegetarian} onChange={handleChange} />
            Vegetarian
          </label>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" name="vegan" checked={formData.vegan} onChange={handleChange} />
            Vegan
          </label>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" name="carnivor" checked={formData.carnivor} onChange={handleChange} />
            Carnivor
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
