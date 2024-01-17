// Produs.jsx
import '../CSS/produs.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

const Produs = ({ imageSrc, name, expirationDate, vegan, vegetarian, carnivor }) => {
  const [showModal, setShowModal] = useState(false);

  const today = new Date();
  const expiration = new Date(expirationDate);
  const differenceInDays = Math.ceil((expiration - today) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    if (differenceInDays <= 3) {
      setShowModal(true);
    }
  }, [differenceInDays]);

  const handleCloseModal = () => setShowModal(false);

  const warningClass = differenceInDays <= 3 ? 'produs-warning' : '';

  return (
    <div className={`produs ${warningClass}`}>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        produs={name}
        mesaj={`Urmeaza sa expire in ${differenceInDays} zile produsul: ${name}`} />
      <img src={imageSrc} alt={name} className="produs-image" />
      <div className="produs-details">
        <h3 className="produs-name">{name}</h3>
        <p className="produs-expiration">Expiration Date: {expirationDate}</p>
        <p className="produs-dietary">
          {vegan && <span className="dietary-vegan">Vegan</span>}
          {vegetarian && <span className="dietary-vegetarian">Vegetarian</span>}
          {carnivor && <span className="dietary-carnivor">Carnivor</span>}
        </p>
      </div>
    </div>
  );
};

export default Produs;
