import React from 'react'
import './styles.scss'

const Spinner = () => {
  return (
    <div className="spinner-block">
      <p className="text text-spinner">loading...</p>
      <div className="spinner" />
    </div>
  )
}

export default Spinner
