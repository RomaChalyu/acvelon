import React from 'react'

const Textarea = props => {
  const { commentValue, setCommentValue } = props
  const ChangeInput = e => setCommentValue(e.target.value)
  return (
    <div className="form__comment">
      <label htmlFor="comment" className="text">
        Comment
        <textarea
          id="comment"
          maxLength="160"
          className="input"
          onChange={ChangeInput}
          value={commentValue}
          required
        />
      </label>
    </div>
  )
}

export default Textarea
