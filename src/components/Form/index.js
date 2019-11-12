/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from './DatePicker'
import Input from './Input'
import { addInvoice, editInvoice } from '../../store'
import Textarea from './Textarea'
import './styles.scss'

const Form = props => {
  const { id } = props.match.params
  const StartDate = moment(new Date()).format('DD-MM-YYYY')
  const [value, setValue] = useState({
    number: '',
    comment: '',
    date_supplied: StartDate,
    date_created: StartDate,
  })

  const generateId = () => `f${(Math.random() * 1e18).toString(16)}`
  const onChangeInput = (inputId, data) => {
    switch (inputId) {
      case 'number':
        return setValue({ ...value, number: data })

      case 'comment':
        return setValue({ ...value, comment: data })

      case 'date_created':
        return setValue({ ...value, date_created: data })

      case 'date_supplied':
        return setValue({ ...value, date_supplied: data })

      default:
        return null
    }
  }

  useEffect(() => {
    if (id) {
      if (!props.state.length) return props.history.push('/')

      const findDesiredInvoice = props.state.find(invoice => invoice._id === id)
      const { number, comment, date_supplied, date_created } = findDesiredInvoice
      setValue({ number, comment, date_supplied, date_created })
    }
  }, [id])

  const onSubmit = e => {
    e.preventDefault()
    const { EditInvoice, AddInvoice, history } = props
    const invoice = {
      _id: id || generateId(),
      number: value.number,
      date_created: value.date_created,
      date_supplied: value.date_supplied,
      comment: value.comment,
    }
    history.push('/')
    return id ? EditInvoice(invoice) : AddInvoice(invoice)
  }

  return (
    <div className="wrap-block">
      <form onSubmit={onSubmit} className="form">
        <div className="form__header">
          <Input value={value.number} onChangeInput={onChangeInput} />
          <DatePicker
            title="Invoice Date"
            id="date_created"
            onChangeInput={onChangeInput}
            date={value.date_created}
          />
        </div>
        <div>
          <DatePicker
            title="Supply Date"
            id="date_supplied"
            onChangeInput={onChangeInput}
            date={value.date_supplied}
          />
        </div>
        <Textarea value={value.comment} onChangeInput={onChangeInput} />
        <div className="from__btn">
          <button type="submit" value="Отправить" className="btn">
            Save
          </button>
        </div>

      </form>
    </div>
  )
}
export default connect(
  state => ({
    state: state.invoices,
  }),
  dispatch => ({
    AddInvoice: invoice => dispatch(addInvoice(invoice)),
    EditInvoice: invoice => dispatch(editInvoice(invoice)),
  })
)(withRouter(Form))
