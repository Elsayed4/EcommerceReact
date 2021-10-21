import './../../App.css';
import React from 'react';
const Countnumber = (props) => {
 return (
 <React.Fragment>
  {
      props.data == true ?  
      <button onClick = {props.action}>+</button>
      :<button onClick = {props.action}>-</button>

      
 }
 
        </React.Fragment>
  );
}

export default Countnumber;
