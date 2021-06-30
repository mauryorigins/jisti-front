import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  KeyboardTimePicker,
  KeyboardTimePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'

interface ITimePickerProps extends KeyboardTimePickerProps {
  label: string
  dataTestId?: string
}

const TimePicker: React.FC<ITimePickerProps> = props => {
  const {label, dataTestId, name, ...rest} = props

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
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

export default TimePicker
