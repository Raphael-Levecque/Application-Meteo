import '../assets/style/dataCell.style.css';


const MeteoData = ({dataMonth,favorite}) => {

    return (
        <div className={favorite ? "meteoData favorite" : "meteoData"}>
            <div className='dataCell'>{dataMonth.pour}</div>
            <div className='dataCell temperature'>{dataMonth.temp_min}</div>
            <div className='dataCell temperature'>{dataMonth.temp_max}</div>
            <div className='dataCell mm'>{dataMonth.pluviometrie}</div>
            <div className='dataCell h'>{dataMonth.ensoleillement}</div>
            <div className='dataCell jour'>{dataMonth.jours_gel}</div>
        </div>
    )

}

export default MeteoData;