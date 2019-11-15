/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import DatePicker from './DatePicker'
import Input from './Input'
import Textarea from './Textarea'
import './styles.scss'

const Form = props => {
  const { id } = props.match.params
  const { addInvoice, editInvoice, history, state } = props
  const [numberValue, setNumberValue] = useState('')
  const [commentValue, setCommentValue] = useState('')
  const [dateSupplied, setDateSupplied] = useState(new Date())
  const [dateCreated, setDateCreated] = useState(new Date())

  const generateId = () => `f${(Math.random() * 1e18).toString(16)}`

  useEffect(() => {
    if (id) {
      if (!state.length) return props.history.push('/')
      const formatDateInput = date => {
        const [day, month, year] = date.split('-')
        return new Date(year, month - 1, day)
      }
      const invoice = props.state.find(_invoice => _invoice._id === id)
      const { number, comment, date_supplied, date_created } = invoice
      setNumberValue(number)
      setCommentValue(comment)
      setDateCreated(formatDateInput(date_created))
      setDateSupplied(formatDateInput(date_supplied))
    }
  }, [id])

  const onSubmit = e => {
    e.preventDefault()
    const invoice = {
      _id: id || generateId(),
      number: numberValue,
      date_created: moment(dateCreated).format('DD-MM-YYYY'),
      date_supplied: moment(dateSupplied).format('DD-MM-YYYY'),
      comment: commentValue,
    }
    history.push('/')
    return id ? editInvoice(invoice) : addInvoice(invoice)
  }

  return (
    <div className="wrap-block">
      <form onSubmit={onSubmit} className="form">
        <div className="form__header">
          <Input numberValue={numberValue} setNumberValue={setNumberValue} />
          <DatePicker
            title="Invoice Date"
            id="date_created"
            onChangeInput={setDateSupplied}
            date={dateSupplied}
          />
        </div>
        <div>
          <DatePicker
            title="Supply Date"
            id="date_supplied"
            onChangeInput={setDateCreated}
            date={dateCreated}
          />
        </div>
        <Textarea commentValue={commentValue} setCommentValue={setCommentValue} />
        <div className="from__btn">
          <button type="submit" value="Отправить" className="btn">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
export default withRouter(Form)
