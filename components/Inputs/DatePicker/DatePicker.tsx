import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'

interface IDatePickerProps extends KeyboardDatePickerProps {
  label: string
  dataTestId?: string
}

const DatePicker: React.FC<IDatePickerProps> = props => {
  const {label, dataTestId, name, ...rest} = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        label={label}
        TextFieldComponent={TextField}
        name={name}
        KeyboardButtonProps={{
          'aria-label': {label},
          /*eslint-disable-next-line no-useless-computed-key */
          ...({['data-testid']: {name}} as any),
        }}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
