import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeAction } from '../../store'
import './styles.scss'

const ActionBlock = props => {
  const { assignAction, action } = props

  const callAssignAction = actionName => {
    if (actionName === 'delete' && actionName !== action) return assignAction('delete')
    if (actionName === 'edit' && actionName !== action) return assignAction('edit')

    return assignAction(null)
  }
  return (
    <div className="wrap-block">
      <p className="text">Actions</p>
      <div className="block__btn">
        <Link to="/CreateInvoiceView">
          <button type="button" className="btn">
            Add new
          </button>
        </Link>
        <button
          onClick={() => callAssignAction('delete')}
          type="button"
          className={`${action === 'delete' ? 'btn btn--active' : 'btn'}`}
        >
          Delete
        </button>
        <button
          onClick={() => callAssignAction('edit')}
          type="button"
          className={`${action === 'edit' ? 'btn btn--active' : 'btn'}`}
        >
          Edit
        </button>
      </div>
    </div>
  )
}
export default connect(
  state => ({
    action: state.action,
  }),
  dispatch => ({
    assignAction: action => dispatch(changeAction(action)),
  })
)(ActionBlock)
