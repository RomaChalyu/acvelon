import React, { useState } from 'react'
import '../../styles/globalClass.scss'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import ActionBlock from '../../components/ActionBlock'
import Table from '../../components/Table'
import { getInvoices as getInvoicesAction, removeInvoice as deleteInvoice } from '../../store'

const Home = props => {
  const [action, setAction] = useState(null)
  const { invoices, getInvoices, loading, removeInvoice } = props
  return (
    <div className="body">
      <div className="g-container">
        <Header title="Invoice" />
        <ActionBlock action={action} setAction={setAction} />
        <Table
          action={action}
          invoices={invoices}
          getInvoices={getInvoices}
          loading={loading}
          removeInvoice={removeInvoice}
        />
      </div>
    </div>
  )
}
export default connect(
  state => ({
    invoices: state.invoices,
    loading: state.loading,
  }),
  dispatch => ({
    getInvoices: () => dispatch(getInvoicesAction),
    removeInvoice: invoice => dispatch(deleteInvoice(invoice)),
  })
)(Home)
