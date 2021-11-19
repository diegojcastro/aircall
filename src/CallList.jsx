import React from 'react';
import CallListItem from './CallListItem.jsx';

export default function CallList(props) {
  

  return(
    <div className="call-list">
      <CallListItem />
      <CallListItem />
      <CallListItem />
    </div>
  )
}