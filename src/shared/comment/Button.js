import React from 'react'

function Button({children, onRatingChange, isDisabled, pointer}) {
  
  return (
    <button type='button' disabled={isDisabled} style={{
    borderRadius:'50px',
    background:'#202142', 
    color:'#FFF',
    width:'35px',
    height:'35px',
    fontSize:'12px',
    cursor:pointer ? 'pointer' : 'auto'
    }} onClick={()=>onRatingChange(+children)}>{children}</button>
  )
}

Button.defaultProps = {
  pointer:true
}

export default Button
