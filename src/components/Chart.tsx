import React from 'react'
import { LineChart, Line, Tooltip, Legend, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { responseArr } from './../utils/utils';
import './../App.css';



const obj = responseArr.map((x: number, i: number) => {
            return {
            "Request #": `${i + 1}`, 
            "Response Time (ms)": x,
        }
})


const RenderLineChart: React.FC = (props: object): JSX.Element => {
    return(
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <LineChart width={500} height={400} data={obj} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Response Time (ms)" stroke="#8884d8" />
            
            <Tooltip />
            <Legend/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="Request #"/>
            <YAxis dataKey="Response Time (ms)"/>
        </LineChart>
        </ResponsiveContainer>
        </div>
    )
};


export default RenderLineChart;
