import React from 'react';
import './css/call-list-item.css'

export default function CallListItem(props) {
  const date = new Date(props.created_at);
  const parsedTime = date.toUTCString().slice(17,25);
  const parsedDate = date.toUTCString().slice(0,16);
  return(
    <div className="card call-list-item">
      <div className="card-header">
        {parsedDate}
      </div>
      <div className="card-body list-item-container">
        <div className="list-item-details-left">
          [icon]
          <div className="list-item-details-inner">
            <p>{props.from}</p>
            <p className="card-subtitle text-muted">tried to call on {props.to}</p>
          </div>
        </div>
        <div className="list-item-details-right">
          {parsedTime}
        </div>
      </div>
    </div>
  );
};