import React from 'react'
import SourceCodeContainer from '../../../SourceCodeContainer'

const codeString =
  "import React, {useState} from 'react'\r\n" +
  "import Select, {ISelectOption} from './Select'\r\n" +
  '\r\nconst selectOptions: ISelectOption[] = [\r\n' +
  "  {value: '', name: ''},\r\n" +
  "  {value: 'option 1', name: 'option 1'},\r\n" +
  "  {value: 'option 2', name: 'option 2'},\r\n" +
  "  {value: 'option 3', name: 'option 3'},\r\n" +
  "  {value: 'option 4', name: 'option 4'},\r\n" +
  ']\r\n' +
  '\r\nconst SelectExample: React.FC = () => {\r\n' +
  "  const [selectValue, setSelectValue] = useState<number | string>('')\r\n" +
  '\r\n' +
  '  return (\r\n' +
  '    <>\r\n' +
  '      <div style={{minWidth: 700}}>\r\n' +
  '        <Select\r\n' +
  '          label="Test select"\r\n' +
  '          labelId="react-test-select"\r\n' +
  '          options={selectOptions}\r\n' +
  "          style={{width: '100%'}}\r\n" +
  '          value={selectValue}\r\n' +
  '          onChange={event => setSelectValue(event.target.value)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '      <div style={{minWidth: 700}}>\r\n' +
  '        <Select\r\n' +
  '          value={selectValue}\r\n' +
  '          label="Select with custom error handler"\r\n' +
  '          labelId="react-test-select-custom"\r\n' +
  '          options={selectOptions}\r\n' +
  "          style={{width: '100%'}}\r\n" +
  '          customErrorHandler\r\n' +
  '          error={true}\r\n' +
  '          helperText="This is a helper text for your select input!"\r\n' +
  '          onChange={event => setSelectValue(event.target.value)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '    </>\r\n' +
  '  )\r\n' +
  '}\r\n' +
  '\r\n' +
  'export default SelectExample'

const Source: React.FC = () => {
  return <SourceCodeContainer sourceCodeTitle="" sourceCode={codeString} />
}

export default Source
