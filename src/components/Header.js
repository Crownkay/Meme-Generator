import React from 'react'

function Header(props) {
  return (
    <div>
      <p>Current User: {props.fname}</p>
    </div>
  )
}

export default Header