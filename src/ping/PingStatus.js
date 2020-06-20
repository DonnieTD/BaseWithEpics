import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

const PingStatus = (props) => {
  const [isPinging,setIsPinging] = useState(props.ping.toString());

  useEffect(()=>{
      setIsPinging(props.ping.toString())
  },[props.ping])
  return (
    <h1>Is Pinging: {isPinging}</h1>
  );
}

const mapStateToProps = ({ ping }) => ({
  ping: ping.isPinging
})

export default connect(mapStateToProps,null)(PingStatus);
