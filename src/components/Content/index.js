import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './index.css'

const Content = () => {
  return (
  	<div className="container">
	    <div className="name-label-wrapper">
	      <span>Terence Lim Zheng Wei</span>
	    </div>
	    <div className="container-row">
	      <a href="www.linkedin.com/in/terencelimzw" className="icon-1">
	        <FontAwesomeIcon icon={faLinkedin} size="2x" color="rgba(228, 233, 237, 1)"/>
	      </a>
	      <a href="www.github.com/terencelimzhengwei" className="icon-2">
	        <FontAwesomeIcon icon={faGithubSquare} size="2x" color="rgba(228, 233, 237, 1)"/>
	      </a>
	    </div>
  	</div>
  )
}

export default Content