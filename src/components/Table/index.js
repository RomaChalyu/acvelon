/* eslint-disable camelcase */
import React from 'react'
import Invoice from './TableRow'
import TableHeader from './TableHeader'
import Spinner from '../Spinner'
import './styles.scss'

class Table extends React.Component {
  componentDidMount() {
    const { invoices, getInvoices } = this.props

    return invoices.length ? null : getInvoices()
  }

  render() {
    const { invoices, loading, action, removeInvoice } = this.props

    return loading ? (
      <Spinner />
    ) : (
      <div className="wrap-block">
        <p className="text">Invoice</p>
        {!invoices.length ? (
          ''
        ) : (
          <div className="table">
            <TableHeader />
            {invoices.map(invoice => {
              const { number, date_created, date_supplied, comment, _id } = invoice
              return (
                <Invoice
                  key={_id}
                  _id={_id}
                  number={number}
                  dateCreated={date_created}
                  dateSupplied={date_supplied}
                  comment={comment}
                  action={action}
                  removeInvoice={removeInvoice}
                />
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Table
