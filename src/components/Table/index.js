/* eslint-disable camelcase */
import React from 'react'
import { connect } from 'react-redux'
import Invoice from './TableRow'
import TableHeader from './TableHeader'
import { getInvoices as getInvoicesAction } from '../../store'
import './styles.scss'

class Table extends React.Component {
  componentDidMount() {
    const { invoices, getInvoices } = this.props

    return invoices.length ? null : getInvoices()
  }

  showSpinner = () => (
    <div className="wrap-block">
      <p className="text">Invoice</p>
      loading...
    </div>
  )

  render() {
    const { invoices, loading } = this.props

    return loading ? (
      this.showSpinner()
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
                />
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    invoices: state.invoices,
    loading: state.loading,
  }),
  dispatch => ({
    getInvoices: () => dispatch(getInvoicesAction),
  })
)(Table)
