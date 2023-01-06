import React from 'react'
import Button from './Button'

function CommentItem({comment}) {
  return (
    <div className='card' style={
    {marginRight:'0px',
    display:'flex',
    justifyContent:'start',
    padding:'10px',
    width:'100%',
    alignItems:'center',
    border:'1px solid black'
}}>
      <div style={{width:'80%', padding:'20px 10px'}}>{comment.text}</div>
      <Button isDisabled={true} pointer={false}>{comment.rating}</Button>
    </div>
  )
}

export default CommentItem
