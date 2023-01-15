import React from 'react'
import { LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { filteredResponses } from './../utils/utils';
import './../App.css';

let obj = []
for (let x=0;x<filteredResponses.length; x++){ 
    obj[x] = 
        {
            name: `Request: ` + (x + 1).toString(), "Response Time": filteredResponses[x]
        }
}

const RenderLineChart = (props) => {
    return(
        <div className='titleText'>
        <LineChart width={900} height={400} data={obj}>
            <Line type="monotone" dataKey="Response Time" stroke="#8884d8" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name"/>
            <YAxis/>
        </LineChart>
        </div>
    )
};


export default RenderLineChart;
