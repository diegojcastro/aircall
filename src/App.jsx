import React from 'react';
import Header from './Header.jsx';
import useCallData from './hooks/useCallData.js';

const App = () => {
  const { state } = useCallData();
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

export default App;
