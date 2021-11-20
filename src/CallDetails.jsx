import React from 'react';
import { useParams } from 'react-router';

import './css/call-details.css'

export default function CallDetails(props) {
  const { id } = useParams();
  // const [call, setCall] = useState({});
  
  const thisCall = props.state.calls.filter( call => {
    // console.log('This is the call, returning '+(call.id == 7834).toString())
    // console.log(call)
    return call.id == id; 
  })[0]
  console.log(thisCall);

  const dateParser = {};

  if (thisCall) {
    dateParser.ready = true;
    dateParser.raw = new Date(thisCall.created_at);
    dateParser.parsedTime = dateParser.raw.toUTCString().slice(17,25);
    dateParser.parsedDate = dateParser.raw.toUTCString().slice(0,16);
  }

  return(
    <div className='container m2'>
      <h1 className='detail-title'>Call #{id}:</h1>
      <p className='detail-entry'><strong>Call Type:</strong> {thisCall && thisCall.call_type}</p>
      <p className='detail-entry'><strong>Date:</strong> {thisCall && dateParser.parsedDate}</p>
      <p className='detail-entry'><strong>Time:</strong> {thisCall && dateParser.parsedTime}</p>
      <p className='detail-entry'><strong>Direction:</strong> {thisCall && thisCall.direction}</p>
      <p className='detail-entry'><strong>Duration:</strong> {thisCall && thisCall.duration}</p>
      <p className='detail-entry'><strong>From:</strong> {thisCall && thisCall.from}</p>
      <p className='detail-entry'><strong>To:</strong> {thisCall && thisCall.to}</p>
      <p className='detail-entry'><strong>Via:</strong> {thisCall && thisCall.via}</p>
      <p className='detail-entry'><strong>Archived:</strong> {thisCall && thisCall.is_archived ? 'Yes' : 'No'}</p>
    </div>
  )
}