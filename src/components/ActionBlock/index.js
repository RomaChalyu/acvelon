import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import Button from './button'

const ActionBlock = props => {
  const { action, setAction } = props

  return (
    <div className="wrap-block">
      <p className="text">Actions</p>
      <div className="block__btn">
        <Link to="/create-invoice">
          <button type="button" className="btn">
            Add new
          </button>
        </Link>
        <Button title="Remove" setAction={setAction} action={action} btnAction="remove" />
        <Button title="Edit" setAction={setAction} action={action} btnAction="edit" />
      </div>
    </div>
  )
}
export default ActionBlock
