import React,{useState} from 'react';
import './card.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import CommentsStats from './CommentsStats';

function Comments() {

  const [comments, setComments] = useState([])

  const addComment = (newComment) => {
    setComments([newComment,...comments])
  }

  return (
    <div className='card'>
      <h2>Rate this game</h2>
        <CommentForm addComment={addComment}/>
        <CommentsStats comments={comments}/>
        <CommentList comments={comments}/>
    </div>
  )
}

export default Comments
