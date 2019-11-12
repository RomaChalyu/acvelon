import React from 'react'
import '../styles/globalClass.scss'
import Form from '../../components/Form'
import Header from '../../components/Header'

const CreateInvoiceView = () => {
  return (
    <div className="body">
      <div className="g-container">
        <Header title="Create Invoice" />
        <Form />
      </div>
    </div>
  )
}

export default CreateInvoiceView
