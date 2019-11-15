import React from 'react'
import '../../styles/globalClass.scss'
import { connect } from 'react-redux'
import Form from '../../components/Form'
import Header from '../../components/Header'
import { editInvoice as edit } from '../../store'

const EditInvoice = props => {
  const { state, editInvoice } = props

  return (
    <div className="body">
      <div className="g-container">
        <Header title="Edit Invoice" />
        <Form state={state} editInvoice={editInvoice} />
      </div>
    </div>
  )
}

export default connect(
  state => ({
    state: state.invoices,
  }),
  dispatch => ({
    editInvoice: invoice => dispatch(edit(invoice)),
  })
)(EditInvoice)
