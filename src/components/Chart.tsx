import React from 'react'
import { LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { filteredResponses } from './../utils/utils';
import './../App.css';


const obj = filteredResponses.map((x: any, i: any) => {
            return {
            name: `Request: ${i + 1}`, 
            response: x,
        }
})


const RenderLineChart: React.FC = (props: object): JSX.Element => {
    return(
        <div className='titleText'>
        <LineChart width={900} height={400} data={obj}>
            <Line type="monotone" dataKey="response" stroke="#8884d8" />
            <Tooltip />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name"/>
            <YAxis/>
        </LineChart>
        </div>
    )
};


export default RenderLineChart;
