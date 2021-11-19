import React from 'react';
import { Link } from 'react-router-dom';
import './css/call-list-item.css'

export default function CallListItem(props) {
  const date = new Date(props.created_at);
  const parsedTime = date.toUTCString().slice(17,25);
  const parsedDate = date.toUTCString().slice(0,16);

  const archiveItem = () => {
    const id = props.id;
    console.log('my id is: '+id);
    const newCalls = [];
    // This could be refactored for better efficiency
    for (const call of props.state.calls) {
      if (call.id === id) {
        const newCall = {...call, is_archived: true}
        newCalls.push(newCall);
      } else {
        newCalls.push(call);
      };
    };
    console.log('state is');
    console.log(props.state);
    console.log('newCalls is');
    console.log(newCalls);
    props.setState(prev => ({...prev, calls: newCalls}));
  };

  return(
    <div className="card call-list-item">
      <div className="card-header">
        {parsedDate}
      </div>
      <div className="card-body list-item-container">
        <div className="list-item-details-left">
          <div className="phone-icon">
            {props.call_type==='answered' && <div><i className="fas fa-phone"></i></div>}
            {props.call_type==='missed' && <div><i className="fas fa-phone-slash"></i></div>}
            {props.call_type==='voicemail' && <div><i className="fas fa-voicemail"></i></div>}
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
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-cog"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link className="dropdown-item" to="/">Details</Link></li>
              <li><button className="dropdown-item" onClick={archiveItem}>Archive</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};