import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.date) {
      const { startDate } = this.state
      const [day, month, year] = nextProps.date.split('-')
      const newDate = new Date(year, month - 1, day)
      if (newDate.toString() !== startDate.toString()) {
        this.setState({
          startDate: new Date(year, month - 1, day),
        })
      }
    }
    return true
  }

  requiredDate = date => moment(date).format('DD-MM-YYYY')

  handleChange = date => {
    const { onChangeInput, id } = this.props
    onChangeInput(id, this.requiredDate(date))
    this.setState({
      startDate: date,
    })
  }

  render() {
    const { startDate } = this.state
    const { title } = this.props

    return (
      <div className="form__block">
        <p className="text">{title}</p>
        <DatePicker className="input" selected={startDate} onChange={this.handleChange} />
      </div>
    )
  }
}

export default DatePickerComponent
