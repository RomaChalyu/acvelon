import React from 'react'
import './styles.scss'

const Header = props => {
  const { title } = props
  return (
    <div className="header">
      <h2 className="header__title">{title}</h2>
      <hr />
    </div>
  )
}

export default Header
