import React from 'react'

const Button = props => {
  const { action, setAction, title, btnAction } = props

  return (
    <button
      onClick={() => (action === btnAction ? setAction(null) : setAction(btnAction))}
      type="button"
      className={`btn${action === btnAction ? ' btn--active' : ''}`}
    >
      {title}
    </button>
  )
}

export default Button
