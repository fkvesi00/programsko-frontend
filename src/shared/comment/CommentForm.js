import React from 'react'
import { useState } from 'react'
import CommentRating from './CommentRating'

function CommentForm({addComment}) {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [message, setMessage] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true)

    const onTextChange = (e) => {
        if(text.length===0){
            setIsDisabled(true)
            setMessage('Komentar mora biti duzi od 10 slova')        
        }else if(text.length!==0 && text.trim().length<10){
            setMessage('Komentar mora biti duzi od 10 slova')
            setIsDisabled(true)
        }else{
            setMessage(null)
            setIsDisabled(false)
        }
        setText(e.target.value)
    }

    const onRatingChange = (rating) => {
        if(rating>0){
        setRating(rating)
        }
    }

    const onSubmitChange = () => {
        if(text.trim().length>10 && rating>0){
            const newComment = {
                rating,
                text
            }
            addComment(newComment)
            setText('')
            setRating(0)
        }
    }

  return (
      <form >
        <CommentRating onRatingChange={onRatingChange}/>
          <div className='input-group'>
            <textarea placeholder='napisite komentar...' onChange={onTextChange}></textarea>
            <button type='button' disabled={isDisabled} className='btn' onClick={() => onSubmitChange()}>Submit</button>
        </div>
        <p>{message}</p>
      </form>
    )
}

export default CommentForm
