import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './Header.jsx';
import CallList from './CallList.jsx';
import useCallData from './hooks/useCallData.js';

const App = () => {
  const { state, setState } = useCallData();
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<CallList state={state} setState={setState}/>} />
        <Route path="/test" element={<div>Test</div>} />
        <Route path="/missed" element={<CallList state={state} setState={setState} filter={'missed'}/>} />
        <Route path="/archived" element={<CallList state={state} setState={setState} filter={'archived'}/>} />


      </Routes>

    </div>

    
  );
};

export default App;
