import React from 'react';
import Header from './Header.jsx';
import useCallData from './hooks/useCallData.js';

const App = () => {
  const { state } = useCallData();
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>


      <div className="card">
        <div className="card-header">
          Quote
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>

    </div>

    
  );
};

export default App;
