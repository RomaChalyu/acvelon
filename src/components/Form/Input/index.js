import React from 'react'

const Input = props => {
  const { setNumberValue, numberValue } = props
  const ChangeInput = e => setNumberValue(e.target.value)

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
          value={numberValue}
          required
        />
      </label>
    </div>
  )
}
export default Input
