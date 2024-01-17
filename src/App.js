import Navbar from './Components/Navbar';
import React, {useState, useEffect} from 'react';
import './App.css';
// import date from './Date';
import Frigider from './Components/Frigider';
import Filtru from './Components/Filtru';
import Form from './Components/Form';
import axios from 'axios'; // eslint-disable-line
import LoadingSpinner from './Components/LoadSpinner';
import FriendForm from './Components/FriendForm';
import MyFriends from './Components/MyFriends';


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
        const response = await axios.get('http://localhost:5000/');
        // console.log('response:', response.data);
        setProduse(response.data);
      } catch (error) {
        console.error('Error getting produse:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      // Make an API request to delete the product with the given id
      await axios.delete(`http://localhost:5000/produs/${id}`);

      // Update the state to remove the deleted product
      setProduse(prevProduse => prevProduse.filter(produs => produs.id !== id));
    } catch (error) {
      console.error('Error deleting produs:', error);
    }
  };

  let produseFiltrate = [];
  console.log('produse:', produse);
  const [friendsList, setFriendsList] = useState([
    { id: 1, name: 'Alice', dietaryPreference: 'vegan' },
    { id: 2, name: 'Bob', dietaryPreference: 'vegetarian' },
    { id: 3, name: 'Charlie', dietaryPreference: 'carnivore' },
    // Add more friends as needed
  ]);

  produseFiltrate = produse.filter(produs => {
    return (!filtruCarnivor || produs.carnivor) &&
    (!filtruVegan || produs.vegan) &&
    (!filtruVegetarian || produs.vegetarian);
  });
  const addFriend = (friend) => {
    setFriendsList([...friendsList, { ...friend, id: friendsList.length + 1 }]);
  };
  // console.log('produse filtrate:', produseFiltrate);


  return (
    <React.Fragment>
      <Navbar/>
      <div className='main'>
      {loading && <LoadingSpinner asOverlay={true} />}
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
            produse={produseFiltrate.filter(produs =>
            produs.name && produs.name.toLowerCase().includes(search.toLowerCase())
          )}
            onDelete={handleDelete}
          />
        }
      </div>
      <div className='friendList'>
        <MyFriends friendsList={friendsList}/>
      </div>
      <div className='forms'>
        <Form/>
        <FriendForm addFriend={addFriend}/>
      </div>
     
    </React.Fragment>
  );
}

export default App;
