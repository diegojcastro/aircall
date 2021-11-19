import React from 'react';
import './css/call-list-item.css'

export default function CallListItem(props) {
  return(
    <div className="card call-list-item">
      <div className="card-body">
          <p>+519-519-8221</p>
          <p className="card-subtitle text-muted">missed</p>
      </div>
    </div>
  );
};