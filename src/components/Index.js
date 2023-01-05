import React, {useState, useContext} from 'react';
import Calculator from './Calculator'
import RenderLineChart from './Chart';
import UserInput from './UserInput';
import './../App.css';

const Index = () => {
    return(
        <>
        <div className='separatorBox'>
        <div className='titleText'>
            <h1>API Load Test</h1>
            <h2>Response Times & General Insights</h2>
        </div>
        <Calculator/>
        {RenderLineChart}
        <UserInput/>
        </div>
        </>
    )
}

export default Index;
