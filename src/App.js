import React, { PureComponent } from 'react';
import Particles from 'react-particles-js';
import './App.css'

class App extends PureComponent{

  render(){
    const params = { 
                      particles: {
                        number: { value: 40},
                        line_linked: {
                            shadow: {
                                enable: false,
                                color: "#3CA9D1",
                                blur: 5
                            },
                            opacity: 0.3
                        },
                        size: {
                          random: true,
                          value: 4
                        },
                        opacity: {
                          value: 0.3
                        }
                      },
                      retina_detect: true,
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "grab"
                          },
                          "onclick": {
                            "enable": true,
                            "mode": "push"
                          },
                          "resize": true
                        }
                      }
                    }
      return (
        <div className="wrapper">
          <Particles 
            params={params}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          />
          <span className="nameLabel">Terence Lim Zheng Wei</span>
      </div>
      );
  };

}


export default App;
