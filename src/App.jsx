import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './Header.jsx';
import CallList from './CallList.jsx';
import CallDetails from './CallDetails.jsx';
import useCallData from './hooks/useCallData.js';

const App = () => {
  const { state, setState } = useCallData();
  return (
    <div className='main-container container'>
      <Header/>
      <Routes>
        <Route path="/" element={<CallList state={state} setState={setState}/>} />
        <Route path="/test" element={<div>Test</div>} />

        {/* With more time, I would have liked to add a dropdown on All Calls in the navbar,
            where we could filter calls by missed, answered, voicemail. It could've looked like this route:*/}
        <Route path="/missed" element={<CallList state={state} setState={setState} filter={'missed'}/>} />

        <Route path="/archived" element={<CallList state={state} setState={setState} filter={'archived'}/>} />
        <Route path="/details/:id" element={<CallDetails state={state}/>} />


      </Routes>

    </div>

    
  );
};

export default App;
