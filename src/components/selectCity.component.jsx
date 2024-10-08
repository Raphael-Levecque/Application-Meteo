import starOff from "../assets/images/star_off.png";
import starOn from "../assets/images/star_on.png";
import '../assets/style/favorite.style.css';

const SelectCity = ({dataCity,setCurrentCity,currentCity,favorite,setFavorite}) => {

    const buildOptions = dataCity.map(city => <option value={city.city} key={city.city}>{city.city}</option>);

    const handleChange = event => {
        setCurrentCity(dataCity[dataCity.indexOf(dataCity.find(city => city.city == event.target.value))]);
    }

    const handleClick = () => {
        setFavorite(currentCity); 

    }

    return (
        <div className='selectCity'>
            <select onChange={handleChange} name="cities" id="city-select">
                {buildOptions}
            </select>
            <img onClick={handleClick} src={currentCity.city == favorite.city ? starOn : starOff} alt={currentCity.city} />
        </div>

    )
}

export default SelectCity;