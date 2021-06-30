import React, {useState, useRef, ChangeEvent} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import MuiSelect, {SelectProps} from '@material-ui/core/Select'

export interface ISelectOption {
  value: string | number
  name: string
}

interface ISelectProps extends SelectProps {
  labelId?: string
  label?: string
  options?: ISelectOption[]
  helperText?: string
  error?: boolean
  customErrorHandler?: boolean
}

const Select: React.FC<ISelectProps> = props => {
  const {
    labelId,
    label,
    options,
    helperText,
    customErrorHandler,
    onChange: selectOnChange,
    error: selectError,
    style: selectStyle,
    value,
  } = props

  const [errorMessage, setErrorMessage] = useState<string>('')
  const selectRef = useRef()

  const handleError = (event: ChangeEvent<{value: unknown}>): void => {
    if (!event.target.value) {
      setErrorMessage('You need to select at least one option')
    } else {
      setErrorMessage('')
    }
  }

  const muiSelectOnChange = (event: ChangeEvent<{value: unknown}>): void => {
    if (selectOnChange) selectOnChange(event, selectRef)
    if (!customErrorHandler) handleError(event)
  }

  const renderHelperText = () => {
    if (!customErrorHandler && !!errorMessage) {
      return <FormHelperText>{errorMessage}</FormHelperText>
    } else {
      return helperText && <FormHelperText>{helperText}</FormHelperText>
    }
  }

  const renderOptions = (): JSX.Element[] | undefined => {
    if (!options) return

    const optionsName = options.map(option => option.name)
    const hasDuplicates = new Set(optionsName).size !== optionsName.length

    if (hasDuplicates) {
      const duplicatedOptions = optionsName.filter(
        (option, index, self) => self.indexOf(option) !== index,
      )

      console.error(
        'The Select component has options with the name property repeated: \n',
        duplicatedOptions,
      )

      return
    }

    return options.map(({value, name}) => (
      <MenuItem key={name} value={value}>
        {name}
      </MenuItem>
    ))
  }

  return (
    <FormControl style={selectStyle} error={selectError || !!errorMessage}>
      <InputLabel htmlFor={labelId}>{label}</InputLabel>
      <MuiSelect
        ref={selectRef}
        onChange={(event: ChangeEvent<{value: unknown}>) =>
          muiSelectOnChange(event)
        }
        inputProps={{
          id: labelId,
        }}
        value={value}
      >
        {renderOptions()}
      </MuiSelect>
      {renderHelperText()}
    </FormControl>
  )
}

export default Select
