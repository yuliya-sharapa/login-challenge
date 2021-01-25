import React, {useState, useEffect}  from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useRouteMatch } from "react-router-dom";
import { getUser} from "../api";

export const Chart = () => {

    const match = useRouteMatch();
    const [options, setOptions] = useState({
        credits: {
            enabled: false
        },
        title: {
            text: 'Visits per day'
        },
        yAxis: {
            title: {
                text: 'Amount of visits'
            }
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        series: [
            {
                data: [],
                name: ''
            }
        ]
    });
    

    useEffect(() => {
      getUser(match.params.id)
      .then(data => {
          setOptions({series: [{data: data.visits, name: `${data.name} ${data.lastName}`}]})
      })
    }, []);
    
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options = {options} />
        </div>
    )
}
