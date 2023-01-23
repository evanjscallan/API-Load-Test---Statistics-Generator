let JSONResult = require('./loadTestResults.json')

interface Nums{
    avgResponseTime: number | string
    a: string | number,
    b: string | number
}

let responseArr: number[] = JSONResult['results']['0']['times']

const error: 'error code 500' = 'error code 500'

const responses: (number | string)[] = responseArr ? responseArr : [0, 0]

const dummyData: number[] = [6, 2, 3, 1]

const filteredResponses: object = responses.filter(e => e != 'error code 500') as number[]

const avgResponseTime: number = responseArr.reduce((a, b) => a + b) / responseArr.length

const dataPoints: number = responseArr.length

let distanceArr: number[] = []

const distanceFromMeanSq = (responseArr: any[], distanceArr: number[], avgResponseTime: number) => {
    for (let i=0; i<responseArr.length; i++){
        distanceArr.push(Math.abs(responseArr[i] - avgResponseTime)**2)
    }
    return distanceArr
}

const distances: number[] = distanceFromMeanSq(responseArr, distanceArr, avgResponseTime)

const sumDistances = (distances: number[]) => distances.reduce((a, b) => a + b)

const distanceSums: number = sumDistances(distances)

const divideByDataPoints = (distanceSums: number, dataPoints: number) => distanceSums / dataPoints 

const variance: number = divideByDataPoints(distanceSums, dataPoints)

const stdDeviation = (variance: number) => Math.sqrt(variance)

const stdDev: number = stdDeviation(variance)

const zValue95Percent: 1.96 = 1.96

const confidenceLvlUpper = (zValue95Percent: number, avgResponseTime: number, stdDev: number ,dataPoints: number) => {
    return avgResponseTime + (zValue95Percent * (((stdDev)/(Math.sqrt(dataPoints))))) 
}

const confidenceLvlLower = (zValue95Percent: number ,avgResponseTime: number,stdDev: number,dataPoints: number) => {
    return avgResponseTime - (zValue95Percent * ((stdDev)/(Math.sqrt(dataPoints))))  
}

const confidenceLevelUpper = confidenceLvlUpper(zValue95Percent,avgResponseTime,stdDev,dataPoints)
const confidenceLevelLower = confidenceLvlLower(zValue95Percent,avgResponseTime,stdDev,dataPoints)


export {confidenceLevelUpper, confidenceLevelLower, stdDeviation, distances, sumDistances, dataPoints,
avgResponseTime, responses, responseArr, dummyData, distanceSums, variance, stdDev};
