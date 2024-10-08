import { useState } from 'react';

import DataForCity from './dataForCity.component.jsx';
import SelectCity from './selectCity.component.jsx';
import DataComparison from './dataComparison.component.jsx';
import ChartZone from './chartZone.component.jsx';

import dataCity from '../data/meteo-data.js';

const App = () => {

  const [currentCity,setCurrentCity] = useState(dataCity[1]);

  const [favorite,setFavorite] = useState(dataCity[0]);

  const [ closedChart, setClosedChart ] = useState(false);

  const handleClick = () => setClosedChart( previousClosed => ! previousClosed );



  return (
    <div>
      <SelectCity 
      dataCity={dataCity}
      setCurrentCity = {setCurrentCity}
      favorite = {favorite}
      setFavorite = {setFavorite}
      currentCity={currentCity}
      />

      <div>Data for {currentCity.city}</div>

      <DataForCity 
      city = {currentCity}
      />

      <DataComparison 
      city = {currentCity}
      favorite={favorite}
      />

    <button onClick={handleClick}>{closedChart ? "Afficher" : "Cacher"}</button>
    <ChartZone
    closed = {closedChart}
    currentCity={currentCity}
    favoriteCity={favorite}
    />
    </div>
  );
}
export default App;
