import './App.css';
import Index from './components/Index'
import StatsMaker from './GlobalVarsComp'
import React from 'react'

const App: React.FC = (): JSX.Element => {
  
  return (
    <>
    <div className='test'>
      <div className='App'>
        <Index/>
      </div>
    </div>
    </>
  );
}

export default App;
