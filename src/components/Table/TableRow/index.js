import React from 'react'
import { Link } from 'react-router-dom'

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
      {action === 'remove' ? (
        <button type="button" onClick={() => removeInvoice(_id)} className="link">
          delete
        </button>
      ) : (
        <p />
      )}
    </div>
  )
}
export default TableRow
