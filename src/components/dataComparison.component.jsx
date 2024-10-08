import '../assets/style/dataComparison.style.css';
import MeteoData from './meteoData.component.jsx';

const DataComparison = ({city,favorite}) => {

    const meanData = (city) => {
        return {
            pour : city.city,
            temp_min : (city.data.reduce((previous,element) => previous + element.temp_min,0) / 12).toFixed(1),
            temp_max : (city.data.reduce((previous,element) => previous + element.temp_max,0) / 12).toFixed(1),
            pluviometrie : (city.data.reduce((previous,element) => previous + element.pluviometrie,0) / 12).toFixed(1),
            ensoleillement : (city.data.reduce((previous,element) => previous + element.ensoleillement,0) / 12).toFixed(1),
            jours_gel : (city.data.reduce((previous,element) => previous + element.jours_gel,0) / 12).toFixed(1)
        };
    }
    

    return (
        <div className='dataComparison'>
            <div className="meteoData">
                <div className="dataCell"></div>
                <div className="dataCell">Temp minimale</div>
                <div className="dataCell">Temp maximale</div>
                <div className="dataCell">Pluviometrie</div>
                <div className="dataCell">Ensoleillement</div>
                <div className="dataCell">Jours de gel</div>
            </div>
            <MeteoData dataMonth={meanData(city)}/>
            <MeteoData dataMonth={meanData(favorite)} favorite={true}/>
        </div>
    )

}

export default DataComparison;