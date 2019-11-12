import React from 'react'

const Textarea = props => {
  const { value, onChangeInput } = props
  const ChangeInput = e => onChangeInput(e.target.id, e.target.value)
  return (
    <div className="form__comment">
      <label htmlFor="comment" className="text">
        Comment
        <textarea
          id="comment"
          maxLength="160"
          className="input"
          onChange={ChangeInput}
          value={value}
          required
        />
      </label>
    </div>
  )
}

export default Textarea
