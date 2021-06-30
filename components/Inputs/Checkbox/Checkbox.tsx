import React, {CSSProperties} from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel'
import MuiCheckbox, {CheckboxProps} from '@material-ui/core/Checkbox'

export interface IMultiCheckbox {
  value: boolean
  name: string
}

interface ICheckboxProps extends CheckboxProps {
  label: string
  labelPlacement?: FormControlLabelProps['labelPlacement']
  isMultiCheckbox?: boolean
  checkboxes?: IMultiCheckbox[]
  containerStyle?: CSSProperties
}

const Checkbox: React.FC<ICheckboxProps> = props => {
  const {
    label,
    checked,
    onChange,
    name,
    labelPlacement,
    isMultiCheckbox,
    checkboxes,
    color,
    style,
    containerStyle,
  } = props

  const renderMultipleCheckboxes = (): JSX.Element[] | undefined => {
    if (!checkboxes) return

    const checkboxesNames = checkboxes.map(checkbox => checkbox.name)

    const hasDuplicates =
      new Set(checkboxesNames).size !== checkboxesNames.length

    // Checks if exists radio buttons with the property name repeated
    if (hasDuplicates) {
      const duplicatedCheckboxes = checkboxesNames.filter(
        (checkbox, index, self) => self.indexOf(checkbox) !== index,
      )

      console.error(
        'The Checkbox component has checkboxes with the name property repeated: \n',
        duplicatedCheckboxes,
      )

      return
    }

    return checkboxes.map(({value, name}) => (
      <FormControlLabel
        key={name}
        control={
          <MuiCheckbox
            color={color}
            checked={value}
            onChange={onChange}
            name={name}
            style={style}
          />
        }
        label={name}
      />
    ))
  }

  return (
    <FormGroup style={containerStyle}>
      {!isMultiCheckbox ? (
        <FormControlLabel
          control={
            <MuiCheckbox
              checked={checked}
              color={color}
              onChange={onChange}
              name={name}
              style={style}
            />
          }
          label={label}
          labelPlacement={labelPlacement}
        />
      ) : (
        renderMultipleCheckboxes()
      )}
    </FormGroup>
  )
}

export default Checkbox
