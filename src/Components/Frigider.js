import '../CSS/frigider.css';
import Produs from './Produs';

const Frigider = ({ produse }) => {
  return (
    <div className="frigider">
      <h2>Frigider Contents</h2>
      <div className="produse-list">
        {produse.map((produs, index) => (
          <Produs
            key={index}
            imageSrc={produs.imageSrc}
            name={produs.name}
            expirationDate={produs.expirationDate}
            vegan={produs.vegan}
            vegetarian={produs.vegetarian}
            carnivor={produs.carnivor}
          />
        ))}
      </div>
    </div>
  );
}

export default Frigider;
