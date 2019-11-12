import React from 'react'

const Input = props => {
  const { value, onChangeInput } = props
  const ChangeInput = e => onChangeInput(e.target.id, e.target.value)

  return (
    <div className="form__block">
      <label className="text" htmlFor="number">
        Number
        <input
          id="number"
          type="number"
          minLength="3"
          className="input class"
          onChange={ChangeInput}
          value={value}
          required
        />
      </label>
    </div>
  )
}
export default Input
