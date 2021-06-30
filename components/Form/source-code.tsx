import React from 'react'
import SourceCodeContainer from '../../SourceCodeContainer'

const codeString =
  "import {ChangeEvent, FocusEvent, FormEvent, useState} from 'react'\r\n" +
  'import {\r\n' +
  '  ChangeEvent,\r\n' +
  '  FC,\r\n' +
  '  ReactElement,\r\n' +
  '  ReactNode,\r\n' +
  '  useEffect,\r\n' +
  '  useState,\r\n' +
  "} from 'react';\r\n" +
  '\r\n' +
  "import curp from '../../../utils/validations/curp';\r\n" +
  "import email from '../../../utils/validations/email';\r\n" +
  "import length from '../../../utils/validations/length';\r\n" +
  "import match from '../../../utils/validations/match';\r\n" +
  "import maxLength from '../../../utils/validations/maxLength';\r\n" +
  "import minLength from '../../../utils/validations/minLength';\r\n" +
  "import maxValue from '../../../utils/validations/maxValue';\r\n" +
  "import minValue from '../../../utils/validations/minValue';\r\n" +
  "import numeric from '../../../utils/validations/numeric';\r\n" +
  "import required from '../../../utils/validations/required';\r\n" +
  "import requiredDate from '../../../utils/validations/requiredDate';\r\n" +
  "import requiredSelected from '../../../utils/validations/requiredSelected';\r\n" +
  "import string from '../../../utils/validations/string';\r\n" +
  "import float from '../../../utils/validations/float';\r\n" +
  '\r\n' +
  'interface IFormChildrenCall {\r\n' +
  '  handleSubmit: () => void;\r\n' +
  '  highlightRequired: () => void;\r\n' +
  '  valid: boolean;\r\n' +
  '  fields: IFields;\r\n' +
  '  handleChange: (name: string) => (value: any) => void;\r\n' +
  '}\r\n' +
  '\r\n' +
  'export interface IValidations {\r\n' +
  '  required?: { errorMessage: string };\r\n' +
  '  requiredIf?: { field: string; equals: string };\r\n' +
  '  emailFormat?: { errorMessage: string };\r\n' +
  '  curp?: { errorMessage: string };\r\n' +
  '  minLength?: { min: number; errorMessage: string };\r\n' +
  '  maxLength?: { max: number; errorMessage: string };\r\n' +
  '  minValue?: { min: number; errorMessage: string };\r\n' +
  '  maxValue?: { max: number; errorMessage: string };\r\n' +
  '  match?: { match: string; errorMessage: string };\r\n' +
  '  string?: { errorMessage: string };\r\n' +
  '  length?: { length: number; errorMessage: string };\r\n' +
  '  numeric?: { errorMessage: string };\r\n' +
  '  float?: { errorMessage: string };\r\n' +
  '}\r\n' +
  '\r\n' +
  'export interface IFieldSchema {\r\n' +
  '  name: string;\r\n' +
  '  value: any;\r\n' +
  '  validations?: IValidations;\r\n' +
  '  watch?: string[];\r\n' +
  '}\r\n' +
  '\r\n' +
  'export interface IFormField extends IFieldSchema {\r\n' +
  '  valid: boolean;\r\n' +
  '  errors: string[];\r\n' +
  '}\r\n' +
  '\r\n' +
  'export interface IFields {\r\n' +
  '  [key: string]: IFormField;\r\n' +
  '}\r\n' +
  '\r\n' +
  'interface IProps {\r\n' +
  '  children: (props: IFormChildrenCall) => ReactNode;\r\n' +
  '  onSubmit: (fields: IFields) => void;\r\n' +
  '  noValidation?: boolean;\r\n' +
  '  fields: IFieldSchema[];\r\n' +
  '}\r\n' +
  '\r\n' +
  'const Form: FC<IProps> = (props) => {\r\n' +
  '  const [valid, setValid] = useState<boolean>(false);\r\n' +
  '  const [fields, setFields] = useState<IFields>({});\r\n' +
  '\r\n' +
  '  useEffect(() => {\r\n' +
  '    createFields();\r\n' +
  '  }, []);\r\n' +
  '\r\n' +
  '  const createFields = () => {\r\n' +
  '    const { fields: propFields } = props;\r\n' +
  '    const fields: IFields = {};\r\n' +
  '    for (const field of propFields) {\r\n' +
  '      let value = field.value;\r\n' +
  '      fields[field.name] = {\r\n' +
  '        ...field,\r\n' +
  '        errors: [],\r\n' +
  '        valid: field.validations ? false : true,\r\n' +
  '        value,\r\n' +
  '      };\r\n' +
  "      if (field.value !== '') {\r\n" +
  '        validateOrSetErrors(fields[field.name], field.name);\r\n' +
  '      }\r\n' +
  '    }\r\n' +
  '    setFields(fields);\r\n' +
  '  };\r\n' +
  '  const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement> | Date) => {\r\n' +
  '    try {\r\n' +
  '      const input = fields[name];\r\n' +
  '      if (event instanceof Date) {\r\n' +
  '        input.value = event;\r\n' +
  '      } else {\r\n' +
  '        input.value = event.target.value;\r\n' +
  '      }\r\n' +
  '      if (input) {\r\n' +
  '        validateOrSetErrors(input, name);\r\n' +
  '      }\r\n' +
  '    } catch (e) {}\r\n' +
  '  };\r\n' +
  '  const validateOrSetErrors = (field: IFormField, name: string) => {\r\n' +
  '    validateField(field);\r\n' +
  '      if (field.watch && field.watch.length) {\r\n' +
  '        for (const input of field.watch) {\r\n' +
  '          validateField(fields[input]);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      const isFormValid = Object.keys(fields).every(\r\n' +
  '        (field) => fields[field].valid,\r\n' +
  '      );\r\n' +
  '      setFields({\r\n' +
  '        ...fields,\r\n' +
  '        [name]: {\r\n' +
  '          ...field,\r\n' +
  '          value: field.value,\r\n' +
  '        },\r\n' +
  '      });\r\n' +
  '      setValid(isFormValid);\r\n' +
  '  };\r\n' +
  '  const handleSubmit = () => {\r\n' +
  '    if (!valid && !props.noValidation) {\r\n' +
  '      highlightRequired();\r\n' +
  '    } else {\r\n' +
  '      if (props.onSubmit) {\r\n' +
  '        const parsedFormWithValues: any = {};\r\n' +
  '        Object.keys(fields).forEach(name => parsedFormWithValues[name] = fields[name].value);\r\n' +
  '        props.onSubmit(parsedFormWithValues);\r\n' +
  '      }\r\n' +
  '    }\r\n' +
  '  };\r\n' +
  '  const highlightRequired = () => {\r\n' +
  '    Object.keys(fields).forEach((name) => {\r\n' +
  '      const input = fields[name];\r\n' +
  '      validateOrSetErrors(input, name);\r\n' +
  '    });\r\n' +
  '  };\r\n' +
  '  const validateField = (field: IFormField) => {\r\n' +
  '    if (field.validations) {\r\n' +
  '      const validations = field.validations;\r\n' +
  '      const errors = [];\r\n' +
  '      if (validations.required) {\r\n' +
  '        if (\r\n' +
  "          typeof field.value === 'object' &&\r\n" +
  '          field.value.length !== 0 &&\r\n' +
  "          typeof field.value[0] === 'object'\r\n" +
  '        ) {\r\n' +
  '          if (!requiredSelected(field.value)) {\r\n' +
  '            errors.push(validations.required.errorMessage);\r\n' +
  '          }\r\n' +
  '        } else if (field.value instanceof Date) {\r\n' +
  '          if (!requiredDate(field.value)) {\r\n' +
  '            errors.push(validations.required.errorMessage);\r\n' +
  '          }\r\n' +
  '        } else {\r\n' +
  '          if (!required(field.value)) {\r\n' +
  '            errors.push(validations.required.errorMessage);\r\n' +
  '          }\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '\r\n' +
  '      if (validations.emailFormat) {\r\n' +
  '        if (!email(field.value)) {\r\n' +
  '          errors.push(validations.emailFormat.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.curp) {\r\n' +
  '        if (!curp(field.value)) {\r\n' +
  '          errors.push(validations.curp.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.minLength) {\r\n' +
  '        if (!minLength(validations.minLength.min)(field.value)) {\r\n' +
  '          errors.push(validations.minLength.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.maxLength) {\r\n' +
  '        if (!maxLength(validations.maxLength.max)(field.value)) {\r\n' +
  '          errors.push(validations.maxLength.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.minValue) {\r\n' +
  '        if (!minValue(validations.minValue.min)(field.value)) {\r\n' +
  '          errors.push(validations.minValue.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.maxValue) {\r\n' +
  '        if (!maxValue(validations.maxValue.max)(field.value)) {\r\n' +
  '          errors.push(validations.maxValue.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.match) {\r\n' +
  '        const matchingField = fields[validations.match.match];\r\n' +
  '        if (matchingField) {\r\n' +
  '          if (!match(matchingField.value)(field.value)) {\r\n' +
  '            errors.push(validations.match.errorMessage);\r\n' +
  '          }\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.string) {\r\n' +
  '        if (!string(field.value)) {\r\n' +
  '          errors.push(validations.string.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.length) {\r\n' +
  '        if (!length(validations.length.length)(field.value)) {\r\n' +
  '          errors.push(validations.length.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.numeric) {\r\n' +
  '        if (!numeric(field.value)) {\r\n' +
  '          errors.push(validations.numeric.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '      if (validations.float) {\r\n' +
  '        if (!float(field.value)) {\r\n' +
  '          errors.push(validations.float.errorMessage);\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '\r\n' +
  "      if (validations.required === undefined && field.value === '') {\r\n" +
  '        // Non required empty fields\r\n' +
  '        field.errors = [];\r\n' +
  '        field.valid = true;\r\n' +
  '      } else {\r\n' +
  '        let validate: boolean = true;\r\n' +
  '        if (validations.requiredIf) {\r\n' +
  '          const input = fields[validations.requiredIf.field];\r\n' +
  '          if (input) {\r\n' +
  '            validate = input.value === validations.requiredIf.equals;\r\n' +
  '          }\r\n' +
  '        }\r\n' +
  '        if (validate) {\r\n' +
  '          // Modify field\r\n' +
  '          field.errors = errors;\r\n' +
  '          field.valid = errors.length > 0 ? false : true;\r\n' +
  '        } else {\r\n' +
  '          // Non required empty fields bc of condition\r\n' +
  '          field.errors = [];\r\n' +
  '          field.valid = true;\r\n' +
  '        }\r\n' +
  '      }\r\n' +
  '    }\r\n' +
  '  };\r\n' +
  '\r\n' +
  "  // First render doesn't have fields, so this is necesary\r\n" +
  '  if (Object.keys(fields).length === 0) {\r\n' +
  '    return <></>;\r\n' +
  '  }\r\n' +
  '  return props.children({\r\n' +
  '    fields,\r\n' +
  '    handleChange,\r\n' +
  '    handleSubmit,\r\n' +
  '    highlightRequired,\r\n' +
  '    valid,\r\n' +
  '  }) as ReactElement<any>;\r\n' +
  '};\r\n' +
  'export default Form;\r\n'

const Source: React.FC = () => {
  return (
    <SourceCodeContainer
      sourceCodeTitle="Form Source Code"
      sourceCode={codeString}
    />
  )
}

export default Source
