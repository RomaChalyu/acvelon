import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteInvoice } from '../../../store'

const TableRow = props => {
  const { number, dateCreated, dateSupplied, comment, _id, action, removeInvoice } = props

  return (
    <div className="table__row">
      <p className="table__text">{dateCreated}</p>
      <p className="table__text table__text--color-blue">{number}</p>
      <p className="table__text">{dateSupplied}</p>
      <p className="table__text">{comment}</p>
      {action === 'edit' ? (
        <Link to={`/edit/${_id}`} className="link link-text">
          edit
        </Link>
      ) : (
        <p />
      )}
      {action === 'delete' ? (
        <button type="button" onClick={() => removeInvoice(_id)} className="link">
          delete
        </button>
      ) : (
        <p />
      )}
    </div>
  )
}
export default connect(
  state => ({
    invoices: state.invoices,
    action: state.action,
  }),
  dispatch => ({
    removeInvoice: invoice => dispatch(deleteInvoice(invoice)),
  })
)(TableRow)
