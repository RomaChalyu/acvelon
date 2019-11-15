import React from 'react'
import '../../styles/globalClass.scss'
import { connect } from 'react-redux'
import Form from '../../components/Form'
import Header from '../../components/Header'
import { addInvoice as add } from '../../store'

const CreateInvoice = props => {
  const { addInvoice } = props
  return (
    <div className="body">
      <div className="g-container">
        <Header title="Create Invoice" />
        <Form addInvoice={addInvoice} />
      </div>
    </div>
  )
}

export default connect(
  state => ({
    state: state.invoices,
  }),
  dispatch => ({
    addInvoice: invoice => dispatch(add(invoice)),
  })
)(CreateInvoice)
