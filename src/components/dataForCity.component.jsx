import '../assets/style/dataForCity.style.css';

import MeteoData from './meteoData.component.jsx';

const DataForCity = ({city}) => {

    const buildMeteoData = city.data.map(dataMonth => <MeteoData dataMonth={dataMonth} key={dataMonth.pour}/>)

    return (
        <div className='dataForCity'>
            <div className="meteoData">
                <div className="dataCell"></div>
                <div className="dataCell">Temp minimale</div>
                <div className="dataCell">Temp maximale</div>
                <div className="dataCell">Pluviometrie</div>
                <div className="dataCell">Ensoleillement</div>
                <div className="dataCell">Jours de gel</div>
            </div>
            {buildMeteoData}
        </div>
    );
}

export default DataForCity;