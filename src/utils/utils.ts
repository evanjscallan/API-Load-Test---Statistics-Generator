interface Nums{
    avgResponseTime: number | string
    a: string | number,
    b: string | number
}

const error: string = 'error code 500'

const responses: (number | string)[] = [10, 12, 8, 20, 24, 23, 54, 90, error, 33, 21, 18, 16, error, error]

const dummyData: number[] = [6, 2, 3, 1]

const filteredResponses: any[]  = responses.filter(e => e != 'error code 500')

const avgResponseTime: number | string | Nums  = filteredResponses.reduce((a, b) => a + b) / filteredResponses.length

const dataPoints: number = filteredResponses.length

let distanceArr: number[] = []

const distanceFromMeanSq = (filteredResponses: string[] | number[] | any[], distanceArr: number[], avgResponseTime: number) => {
    for (let i=0; i<filteredResponses.length; i++){
        distanceArr.push(Math.abs(filteredResponses[i] - avgResponseTime)**2)
    }
    return distanceArr
}

const distances: number[] = distanceFromMeanSq(filteredResponses, distanceArr, avgResponseTime)

const sumDistances = (distances: number[]) => { return distances.reduce((a: number, b: number) => a + b) }

const distanceSums: number = sumDistances(distances)

const divideByDataPoints: any = (distanceSums: any, dataPoints: any) => { return distanceSums / dataPoints }

const variance: number = divideByDataPoints(distanceSums, dataPoints)

const stdDeviation = (variance: number) => { return Math.sqrt(variance) }

const stdDev: number = stdDeviation(variance)

const zValue95Percent: number = 1.96

const confidenceLvlUpper = (zValue95Percent: any,avgResponseTime: any, stdDev: any ,dataPoints: any) => {
    return avgResponseTime + (zValue95Percent * (((stdDev)/(Math.sqrt(dataPoints))))) 
}

const confidenceLvlLower = (zValue95Percent: any ,avgResponseTime: any,stdDev: any,dataPoints: any) => {
    return avgResponseTime - (zValue95Percent * ((stdDev)/(Math.sqrt(dataPoints))))  
}

const confidenceLevelUpper = confidenceLvlUpper(zValue95Percent,avgResponseTime,stdDev,dataPoints)
const confidenceLevelLower = confidenceLvlLower(zValue95Percent,avgResponseTime,stdDev,dataPoints)


export {confidenceLevelUpper, confidenceLevelLower, stdDeviation, distances, sumDistances, dataPoints,
avgResponseTime, responses, filteredResponses, dummyData, distanceSums, variance, stdDev};
