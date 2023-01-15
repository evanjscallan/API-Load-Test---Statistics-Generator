import React from 'react';

const error = 'error code 500'

const responses = [10, 12, 8, 20, 24, 23, 54, 90, error, 33, 21, 18, 16, error, error]

const dummyData = [6, 2, 3, 1]

const filteredResponses = responses.filter(e => e != 'error code 500')

const avgResponseTime = filteredResponses.reduce((a, b) => a + b) / filteredResponses.length

const dataPoints = filteredResponses.length

let distanceArr = []

const distanceFromMeanSq = (filteredResponses, distanceArr, avgResponseTime) => {
    for (let i=0; i<filteredResponses.length; i++){
        distanceArr.push(Math.abs(filteredResponses[i] - avgResponseTime)**2)
    }
    return distanceArr
}

const distances = distanceFromMeanSq(filteredResponses, distanceArr, avgResponseTime)

const sumDistances = (distances) => { return distances.reduce((a, b) => a + b) }

const distanceSums = sumDistances(distances)

const divideByDataPoints = (distanceSums, dataPoints) => { return distanceSums / dataPoints }

const variance = divideByDataPoints(distanceSums, dataPoints)

const stdDeviation = (variance) => { return Math.sqrt(variance) }

const stdDev = stdDeviation(variance)

const zValue95Percent = 1.96

const confidenceLvlUpper = (zValue95Percent,avgResponseTime,stdDev,dataPoints) => {
    return avgResponseTime + (zValue95Percent * (((stdDev)/(Math.sqrt(dataPoints))))) 
}

const confidenceLvlLower = (zValue95Percent,avgResponseTime,stdDev,dataPoints) => {
    return avgResponseTime - (zValue95Percent * ((stdDev)/(Math.sqrt(dataPoints))))  
}

const confidenceLevelUpper = confidenceLvlUpper(zValue95Percent,avgResponseTime,stdDev,dataPoints)
const confidenceLevelLower = confidenceLvlLower(zValue95Percent,avgResponseTime,stdDev,dataPoints)


export {confidenceLevelUpper, confidenceLevelLower, stdDeviation, distances, sumDistances, dataPoints,
avgResponseTime, responses, filteredResponses, dummyData, distanceSums, variance, stdDev};
