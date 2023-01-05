import React from 'react';
import UserInput from './UserInput';

let error = 'error code 500'

let responses = [10, 12, 8, 20, 24, 23, 54, 90, error, 33, 21, 18, 16, error, error]

let dummyData = [6, 2, 3, 1]

let filteredResponses = responses.filter(e => e != 'error code 500')

console.log('Filtered data points:', filteredResponses)

let avgResponseTime = filteredResponses.reduce((a, b) => a + b) / filteredResponses.length

let dataPoints = filteredResponses.length

const distanceFromMeanSq = () => {
    let distanceArr= []
    for (let i=0; i<filteredResponses.length; i++){
        distanceArr.push(Math.abs(filteredResponses[i] - avgResponseTime)**2)
    }
    return distanceArr
}

let distances = distanceFromMeanSq()

console.log('Distances from mean squared: ', distances)

const sumDistances = () => {
    let summer = distances.reduce((a, b) => a + b)
    return summer
}

let distanceSums = sumDistances()

const divideByDataPoints = () => {
    return distanceSums / dataPoints
}

let variance = divideByDataPoints()

const stdDeviation = () => {
    return Math.sqrt(variance)
}

let stdDev = stdDeviation()
console.log('Sample size: ', dataPoints)
console.log('Max Response time: ', '90')
console.log('Min Response time: ', '8')
console.log('Average Response Time: ', avgResponseTime)
console.log('Standard Deviation:', stdDev)

//console.log('z-score:', z)

const confidenceLevel = () => {
    let zValue95Percent = 1.96
    let upperBound = avgResponseTime + (zValue95Percent * (((stdDev)/(Math.sqrt(dataPoints)))))
    console.log(upperBound)
    let lowerBound = avgResponseTime -(zValue95Percent * ((stdDev)/(Math.sqrt(dataPoints))) )

    let upperLower = (
        <>
        <div>
        
          <li> <b>Data points will fall within this upper bound with 95% confidence: </b> {upperBound} </li> 
         <li> <b>Data points will fall within this lower bound lower bound with 95% confidence: </b> {lowerBound} </li> 
        </div>
        </>
    )
    return upperLower
}

let confidenceLvl = confidenceLevel()

console.log(confidenceLvl)



export {confidenceLvl, stdDeviation, distances, sumDistances, dataPoints,
avgResponseTime, responses, filteredResponses, dummyData, distanceSums, variance, stdDev};
