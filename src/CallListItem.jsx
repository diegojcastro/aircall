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
          <div className="phone-icon">
            {props.call_type==='answered' && <i class="fas fa-phone"></i>}
            {props.call_type==='missed' && <i class="fas fa-phone-slash"></i>}
            {props.call_type==='voicemail' && <i class="fas fa-voicemail"></i>}
          </div>
          <div className="list-item-details-inner">
            <p>{props.from}</p>
            {props.call_type==='missed' && <p className="card-subtitle call-receiver text-muted">tried to call on {props.to}</p>}
            {props.call_type==='answered' && <p className="card-subtitle call-receiver text-muted">for {props.to}</p>}
            {props.call_type==='voicemail' && <p className="card-subtitle call-receiver text-muted">voicemail for {props.to}</p>}
          </div>
        </div>
        <div className="list-item-details-right">
          {parsedTime}
        </div>
      </div>
    </div>
  );
};