import '../CSS/filtru.css';

const Filtru = ({
    filtruVegan, filtruVegetarian, filtruCarnivor,
    setFiltruVegan, setFiltruVegetarian, setFiltruCarnivor,
    search, setSearch
  }) => {
    return (
      <div className="filtru">
        <ul>
          <li>
            <label htmlFor="filtruVegan">Vegan</label>
            <input
              type="checkbox"
              id="filtruVegan"
              checked={filtruVegan}
              onChange={() => setFiltruVegan(!filtruVegan)}
            />
          </li>
          <li>
            <label htmlFor="filtruVegetarian">Vegetarian</label>
            <input
              type="checkbox"
              id="filtruVegetarian"
              checked={filtruVegetarian}
              onChange={() => setFiltruVegetarian(!filtruVegetarian)}
            />
          </li>
          <li>
            <label htmlFor="filtruCarnivor">Carnivor</label>
            <input
              type="checkbox"
              id="filtruCarnivor"
              checked={filtruCarnivor}
              onChange={() => setFiltruCarnivor(!filtruCarnivor)}
            />
          </li>
          <li>
            <input
              type="text"
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cauta produse"
            />
          </li>
        </ul>
      </div>
    );
  };

  export default Filtru;
