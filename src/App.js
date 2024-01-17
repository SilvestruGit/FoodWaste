import Navbar from './Components/Navbar';
import React, {useState, useEffect} from 'react';
import './App.css';
// import date from './Date';
import Frigider from './Components/Frigider';
import Filtru from './Components/Filtru';
import Form from './Components/Form';
import axios from 'axios'; // eslint-disable-line


function App() {

  const [produse, setProduse] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [filtruVegan, setFiltruVegan] = useState(false);
  const [filtruVegetarian, setFiltruVegetarian] = useState(false);
  const [filtruCarnivor, setFiltruCarnivor] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/produse');
        console.log('response:', response.data);
        setProduse(response.data);
      } catch (error) {
        console.error('Error getting produse:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [produse]);

  let produseFiltrate = [];
  console.log('produse:', produse);

  if (produse.length !== 0){

    produseFiltrate = produse.filter(produs => {
      return (!filtruCarnivor || produs.carnivor) &&
      (!filtruVegan || produs.vegan) &&
      (!filtruVegetarian || produs.vegetarian);
    });
  }

  return (
    <React.Fragment>
      <Navbar/>
      <div className='main'>
        <Filtru
          filtruVegan={filtruVegan}
          filtruCarnivor={filtruCarnivor}
          filtruVegetarian={filtruVegetarian}
          setFiltruCarnivor={setFiltruCarnivor}
          setFiltruVegan={setFiltruVegan}
          setFiltruVegetarian={setFiltruVegetarian}
          search={search}
          setSearch={setSearch}
          />
        {
          loading === false && produse.length !== 0 &&
          <Frigider
            produse={produse.filter(produs =>
            produs.name && produs.name.toLowerCase().includes(search.toLowerCase())
          )}
/>
        }
      </div>
      <div className='main'>
        <Form/>
      </div>
    </React.Fragment>
  );
}

export default App;
