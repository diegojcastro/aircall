import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCallData() {
  const [state, setState] = useState({
    calls: [],
    archived: []
  });

  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
      .then(res => {
        console.log(res.data);
      })
  }, []);

  return { state, setState };
};