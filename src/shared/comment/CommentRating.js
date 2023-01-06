import React from 'react'
import Button from './Button'
function CommentRating({onRatingChange}) {
  
  return (
    <div className='rating-list'>
      <Button onRatingChange={onRatingChange}>1</Button>      
      <Button onRatingChange={onRatingChange}>2</Button>
      <Button onRatingChange={onRatingChange}>3</Button>
      <Button onRatingChange={onRatingChange}>4</Button>
      <Button onRatingChange={onRatingChange}>5</Button>
    </div>
  )

  
}

export default CommentRating
