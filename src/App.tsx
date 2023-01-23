import './App.css';
import React from 'react';
import RenderLineChart from './components/Chart'
import Calculator from './components/Calculator'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='containerOuter'>
          <section className='chartBox'>
            <h1>API Load Test</h1>
            <h2>Response Times & General Insights</h2>
            <Calculator/>
            <RenderLineChart/>
          </section>
        </div>
    </>
  );
}

export default App;
