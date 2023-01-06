import React,{useState} from 'react';
import './card.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Comments() {

  const [comments, setComments] = useState([])

  const addComment = (newComment) => {
    setComments([newComment,...comments])
  }

  return (
    <div className='card'>
      <h2>Ocijenite ovu igricu</h2>
        <CommentForm addComment={addComment}/>
        <CommentList comments={comments}/>
      {/*
        <CommentStats />
      */}
    </div>
  )
}

export default Comments
