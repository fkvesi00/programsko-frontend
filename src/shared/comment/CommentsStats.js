import React from 'react'


function CommentsStats({comments}) {
 const avg = comments.reduce((acc,comment) => {
    return acc+comment.rating
  },0)/comments.length


  return (
    <div className='feedback-stats'>
      <div>Number of comments: {comments.length}</div>
      <div>Game rating:{avg}</div>
    </div>
  )
}

export default CommentsStats
