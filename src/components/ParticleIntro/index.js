import React from 'react';
import Config from '../../config'
import Particles from 'react-particles-js';

import './index.css'

const particleSection = () => {
  return (
    <div className="wrapper">
      <Particles
        params={Config.particle}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  )
}

export default particleSection