import React from 'react';


const Reservation = (props) => {

  // if(!props.date && !props.startTime && !props.numGuests) return null;

  return (
    <div>
      <h4>Reservation Container</h4>
      <p>Date: {props.date}</p>
      <p>Start time: {props.startTime}</p>

      <br/>
    </div>
  )


}

export default Reservation;