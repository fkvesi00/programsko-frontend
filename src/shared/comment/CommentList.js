import React from 'react'
import CommentItem from './CommentItem'

function CommentList({comments}) {
  return (
    <div className='comment-list'>
        {comments.map((comment,i )=> {
          return <CommentItem key={i} comment={comment}/>
        })}
    </div>
  )
}

export default CommentList
