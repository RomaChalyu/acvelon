import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class DatePickerComponent extends React.Component {
  handleChange = date => {
    const { onChangeInput } = this.props
    onChangeInput(date)
  }

  render() {
    const { date, title } = this.props

    return (
      <div className="form__block">
        <p className="text">{title}</p>
        <DatePicker className="input" selected={date} onChange={this.handleChange} />
      </div>
    )
  }
}

export default DatePickerComponent
