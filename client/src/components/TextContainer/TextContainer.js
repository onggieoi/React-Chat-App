import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'

import './TextContainer.css'

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>People currently chatting:</h1>
      <div className="activeContainer"></div>
    </div>
  </div>
)

export default TextContainer
