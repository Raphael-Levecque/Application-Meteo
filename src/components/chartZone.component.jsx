import { useEffect, useState } from "react"

import Chart   from 'chart.js/auto'
import { Bar } from "react-chartjs-2"


import '../assets/style/chartZone.style.css'

const LABELS = ['Jan','Fev','Mar','Avr','Mai','Jun','Jui','Aou','Sep','Oct','Nov','Dec'];

const MIN_VALUE = -3;
const MAX_VALUE = 10;



const ChartZone = ( { currentCity , favoriteCity, closed } ) => {


    const buildMeteoData = (currentData) => currentCity.data.map(month => month[currentData]);

    const buildFavoriteData = (currentData) => favoriteCity.data.map(month => month[currentData]);


    // @return le jeux de données (datasets) du graphique
    const buildData = (data,favorite)  => {                                             
        return (
            {
                labels: LABELS,                                            // définit les étiquettes en abscisses
                datasets : [
                    {
                        label : currentCity.city,                         // légende jeu de données 1 
                        data : data,            // valeurs jeu de données 1 (ici aléatoires)
                        backgroundColor: 'rgb(255,128,128)',               // couleur jeu de données 1 
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1
                    },
                    {
                        label : favoriteCity.city,                         // légende jeu de données 2 
                        data : favorite,            // valeurs jeu de données 1 (ici aléatoires)
                        backgroundColor: 'gold',                           // couleur jeu de données 2
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1
                    },                                                     // etc. si besoin
                ]  
            })
    }

    const [chartData, setChartData] = useState(buildData());            

    const [currentData,setCurrentData] = useState("temp_min");

    const [currentTitle,setCurrentTitle] = useState("Temperature minimale (°C)");


    const chart = <div className="chartZone">                             
                    <Bar                                                  // type de graphiques (ici des barres, d'autres types existent bien sûr)
                        data = { chartData }                              // les jeux de données gérés par la variable d'état
                        options =  { {
                                        scales: {
                                            y: {
                                                min : Math.min({...chartData.datasets[0].data},{...chartData.datasets[1].data}),          // valeur minimale axe des ordonnées
                                                max : Math.max({...chartData.datasets[0].data},{...chartData.datasets[1].data}),          // valeur maximale axe des ordonnées
                                            }                        
                                        },
                                        animation: {                      // paramètres effets d'animation lors des changements de valeur
                                            duration : 500,
                                            easing : 'easeIn'
                                        },
                                        plugins : {
                                            title: {
                                                display : true,
                                                text : currentTitle  // titre du graphique
                                            }
                                        },
                                        legend: {
                                            labels: {
                                                fontSize: 14
                                            }
                                        }
                                    }
                        }
                    />
                  </div>

    const changeData = event => {
        setCurrentData(event.target.value)   
        setCurrentTitle(event.target.innerText)
    }

    useEffect(() => {
        setChartData(buildData(buildMeteoData(currentData),buildFavoriteData(currentData)))  
    }, 
    [currentData,currentCity,favoriteCity]);

    if(closed) {
        return null;
    }
    else {
        return (
            <div>          
                <button onClick = {changeData} value="temp_min">Température minimale (°C)</button>
                <button onClick = {changeData} value="temp_max">Température maximale (°C)</button>
                <button onClick = {changeData} value="pluviometrie">Pluviométrie (mm)</button>
                <button onClick = {changeData} value="ensoleillement">Ensoleillement (h)</button>
                <button onClick = {changeData} value="jours_gel">Jours de gel (jours)</button>   
                { chart }
            </div>
        )
    }
}
export default ChartZone;