import React from 'react';
import CallListItem from './CallListItem.jsx';
import './css/call-list.css';

export default function CallList(props) {
  let filteredCalls = props.state.calls;
  if(props.filter) {
    filteredCalls = props.state.calls.filter( (call) => {
      return call.call_type === props.filter;
    });
  };

  const parsedCalls = filteredCalls.map( (call, index) => {
    return (
      <CallListItem 
        key={index}
        {...call}
        state={props.state}
        setState={props.setState}
      />
    );
  });

  return(
    <div id="call-list" className="call-list overflow-auto">
      {parsedCalls}
    </div>
  )
}