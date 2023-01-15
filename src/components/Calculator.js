import React, {useState, setState} from 'react';
import {confidenceLevelUpper, confidenceLevelLower, 
distances, avgResponseTime, distanceSums, variance, stdDev} from './../utils/utils'
import './../App.css';

const Calculator = (props) => {
    let [calcState, setCalcState] = useState(
        [
            `Average Response Time: ${avgResponseTime}ms `,
            `Distance from Sum Squared: ${distanceSums}ms `,
            `Variance:  ${variance}`,
            `Standard Deviation:  ${stdDev}`,
            `95% confidence that response times will be below: ${confidenceLevelUpper}ms`,
            `95% confidence that response times will be above:  ${confidenceLevelLower}ms`
        ]
    )

    const theStatList = calcState.map((stats) => <li key={stats.toString()}>{stats}</li>)

    return(
        <>
        <div className='titleText'>
            <ul>
                {theStatList}
            </ul>
        </div>
        </>   
    )
}

export default Calculator
