import React from 'react';
import {useDispatch} from 'react-redux';

const PingButton = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() =>{dispatch({type: 'PING'})}}>
                Start Ping
        </button>
    );
  }
  
  export default PingButton;
  