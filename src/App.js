import React, { PureComponent } from 'react';
import ParticleIntro from './components/ParticleIntro'
import Content from './components/Content'
import './App.css'

class App extends PureComponent{

  render(){
      return (
        <div>
          <Content/>
          <ParticleIntro/>
        </div>
      );
  };

}


export default App;
