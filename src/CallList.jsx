import React from 'react';
import CallListItem from './CallListItem.jsx';
import './css/call-list.css';

export default function CallList(props) {
  const parsedCalls = props.state.calls.map( (result, index) => {
    return (
      <CallListItem 
        key={index}
        {...result}
      />
    )
  })

  return(
    <div id="call-list" className="call-list overflow-auto">
      {parsedCalls}
    </div>
  )
}