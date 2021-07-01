import React, {useState, ChangeEvent, FocusEvent} from 'react'
import TextField, {StandardTextFieldProps} from '@material-ui/core/TextField'

interface ITextInputProps extends StandardTextFieldProps {
  customErrorHandler?: boolean
}

type ChangeEventInput = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
type FocusEventInput = FocusEvent<HTMLTextAreaElement | HTMLInputElement>

const TextInput: React.FC<ITextInputProps> = props => {
  const {
    onChange: TextInputOnChange,
    onBlur: TextInputOnBlur,
    error: TextInputError,
    helperText: TextInputHelperText,
    customErrorHandler,
    label,
    ...rest
  } = props

  const [error, setError] = useState<string>('')

  const handleError = (event: ChangeEventInput): void => {
    if (!event.target.value) {
      setError(`The ${label} field must be filled`)
    } else {
      setError('')
    }
  }

  const textFieldOnChange = (event: ChangeEventInput): void => {
    if (TextInputOnChange) TextInputOnChange(event)
    if (!customErrorHandler) {
      handleError(event)
    }
  }

  const textFieldOnBlur = (event: FocusEventInput): void => {
    if (TextInputOnBlur) TextInputOnBlur(event)
    if (!customErrorHandler) {
      handleError(event)
    }
  }

  return (
    <TextField
      label={label}
      error={!customErrorHandler ? !!error : TextInputError}
      helperText={!customErrorHandler ? error : TextInputHelperText}
      onChange={event => textFieldOnChange(event)}
      onBlur={event => textFieldOnBlur(event)}
      {...rest}
    />
  )
}

export default TextInput
