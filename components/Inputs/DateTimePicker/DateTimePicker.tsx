import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardDateTimePicker,
  KeyboardDateTimePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'

interface IDateTimePickerProps extends KeyboardDateTimePickerProps {
  label: string
  dataTestId?: string
}

const DateTImePicker: React.FC<IDateTimePickerProps> = props => {
  const {label, dataTestId, name, ...rest} = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDateTimePicker
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

export default DateTImePicker
