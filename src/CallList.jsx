import React from 'react';
import CallListItem from './CallListItem.jsx';
import useCallFilters from './hooks/useCallFilters.js';
import './css/call-list.css';

export default function CallList(props) {
  const { filterByCallType, filterByArchived, filterByNotArchived } = useCallFilters();
  let filteredCalls = props.state.calls;

  if (props.filter === 'archived') {
    filteredCalls = filterByArchived(props.state.calls);
  } else if (props.filter) {
    filteredCalls = filterByCallType(props.state.calls, props.filter);
  } else {
    filteredCalls = filterByNotArchived(props.state.calls);
  }

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
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}