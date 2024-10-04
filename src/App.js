import React, { useState } from 'react';
import './App.css';

function Lightbulb() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div className='App'>
      <img src={isOn ?'light_on.png':'light_off.jpg'} className='light' />
     <div>
      <button onClick={toggleSwitch} className={isOn ? 'b_on':'b_off'}>
        {isOn ? 'ON' : 'OFF'}
      </button>  
      </div>
    </div>
  );
}

export default Lightbulb;