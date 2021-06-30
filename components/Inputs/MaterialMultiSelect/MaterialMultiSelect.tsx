import React, {useState, useEffect} from 'react'
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select, {SelectProps} from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'

export interface IOption {
  value: string | number
  name: string
}

interface IMaterialMultiSelectProps extends SelectProps {
  labelId: string
  label: string
  options: IOption[]
  value: IOption[]
  handleOptions: (options: IOption[]) => void
  limit?: number
  limitMessage?: boolean
  halfWidth?: boolean
}

interface IStyleProps {
  halfWidth?: boolean
}

const useStyles = makeStyles<Theme, IStyleProps>((theme: Theme) =>
  createStyles({
    chip: {
      margin: 2,
    },
    selectorWrapper: {
      width: '100%',
      padding: 0,
    },
    selectorLabel: {
      backgroundColor: '#FFF',
      paddingLeft: 5,
      paddingRight: 10,
      marginLeft: -5,
    },
    selectorInnerWrapper: {
      paddingTop: 8.5,
      paddingBottom: 8.5,
      '& > div': {
        flexWrap: 'nowrap !important',
        maxWidth: ({halfWidth}) => (halfWidth ? 'calc(50vw - 200px)' : 'unset'),
        overflow: 'scroll',
        [theme.breakpoints.down('md')]: {
          maxWidth: ({halfWidth}) => (halfWidth ? '40vw' : 'unset'),
        },
      },
    },
  }),
)

const StyledMenuItem = withStyles({
  root: {
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: '#2981FE',
      color: '#FFF',
    },
  },
})(MenuItem)

const INNER_WRAPPER_CLASS =
  'MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input'

const MaterialMultiSelect: React.FC<IMaterialMultiSelectProps> = props => {
  const {halfWidth} = props
  const classes = useStyles({halfWidth})

  const {
    labelId,
    label,
    options,
    value: newValue,
    handleOptions,
    limit = undefined,
    limitMessage,
    ...rest
  } = props

  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>(
    newValue.map(option => option.value),
  )

  const [openOptions, setOpenOptions] = useState<boolean>(false)

  const handleSelectOptions = (event: React.ChangeEvent<{value: unknown}>) => {
    let newOptions: IOption[] = []
    const inputSelectOptions = event.target.value as string[]
    inputSelectOptions.forEach((inputOption: string | number): void => {
      if (limit && newOptions.length >= limit) return // Avoid extra options
      const newOption = options.find(option => inputOption === option.value)
      if (newOption) {
        newOptions.push(newOption)
      }
    })
    handleOptions(newOptions)
    setSelectedOptions(newOptions.map(option => option.value))
  }

  const handleDeleteOption = (
    deleteValue: string,
    deleteIndex: number,
  ): void => {
    const newSelectedOptions = selectedOptions.filter(
      (option: string | number, index: number): boolean =>
        index !== deleteIndex,
    )
    const newValueOptions = newValue.filter(
      (option: IOption): boolean => option.value !== deleteValue,
    )
    setSelectedOptions(newSelectedOptions)
    handleOptions(newValueOptions)
  }

  const handleOpen = (event: React.ChangeEvent<{}>): void => {
    if (limit && selectedOptions.length >= limit) return
    if (event.target === event.currentTarget) {
      setOpenOptions(true)
    }
  }

  const handleClose = (): void => {
    setOpenOptions(false)
  }

  useEffect(() => {
    setSelectedOptions([...newValue.map(option => option.value)])
  }, [newValue])

  useEffect(() => {
    if (limit && selectedOptions.length >= limit) {
      handleClose()
      // Remove extra options
      if (selectedOptions.length > limit) {
        const _selectedOptions = [...selectedOptions]
        _selectedOptions.length = limit
        setSelectedOptions(_selectedOptions)
      }
    }
  }, [selectedOptions, limit])

  return (
    <FormControl variant="outlined" className={classes.selectorWrapper}>
      <InputLabel id={labelId} className={classes.selectorLabel}>
        {label}
      </InputLabel>
      <Select
        {...rest}
        SelectDisplayProps={{
          className: `${INNER_WRAPPER_CLASS} ${classes.selectorInnerWrapper}`,
        }}
        labelId={labelId}
        multiple
        value={selectedOptions}
        onChange={handleSelectOptions}
        open={openOptions}
        onOpen={handleOpen}
        onClose={handleClose}
        style={{height: 53}}
        renderValue={selected => (
          <div className="d-flex flex-wrap">
            {(selected as string[]).map((value, index) => {
              const findOption = options.find(option => option.value === value)
              return (
                <Chip
                  className={classes.chip}
                  key={value}
                  label={findOption ? findOption.name : ''}
                  onDelete={() => handleDeleteOption(value, index)}
                />
              )
            })}
          </div>
        )}
      >
        {options.map(option => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.name}
          </StyledMenuItem>
        ))}
      </Select>
      {limitMessage && limit && selectedOptions.length >= limit && (
        <i className="MuiFormLabel-root mt-2">
          You can only select a maximum of {limit} items
        </i>
      )}
    </FormControl>
  )
}

export default MaterialMultiSelect
