import React, {useState, setState} from 'react';
import {confidenceLvl, stdDeviation, distances, sumDistances, 
    dataPoints, avgResponseTime, responses, filteredResponses, 
    dummyData, distanceSums, variance, stdDev} from './GlobalVars'
import './../App.css';


const Calculator = (props) => {
    let [res, setRes] = useState(responses)
    let [filteredRes, setFilteredRes] = useState(filteredResponses)
    let [avg, setAvg] = useState(avgResponseTime)
    let [points, setPoints] = useState(dataPoints)
    let [dist, setDist] = useState(distances)
    let [distSum, setDistSum] = useState(distanceSums)
    let [vrnce, setVrnce] = useState(variance)
    let [standardDeviation, setStandardDeviation] = useState(stdDev)
    let [conf, setConf] = useState(confidenceLvl)
    return(
        <>
        <div className='titleText'>
        <ul>
            <li><b>Average Response Time:</b> {avg} </li>
            <li><b>Sample Size: </b> {points} </li>
            <li><b>Distances from Mean Squared - Summed: </b> {distSum} </li>
            <li><b>Variance: </b> {vrnce} </li>
            <li><b>Standard Deviation: </b> {standardDeviation} </li>
            {conf}
        </ul>
        </div>
        </>
          
    )
}

export default Calculator

