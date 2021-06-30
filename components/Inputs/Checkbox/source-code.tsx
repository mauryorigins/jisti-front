import React from 'react'
import SourceCodeContainer from '../../../SourceCodeContainer'

const codeString =
  "import React, {useState, ChangeEvent} from 'react'\r\n" +
  "import Checkbox, {IMultiCheckbox} from './index'\r\n" +
  '\r\nconst checkboxes: IMultiCheckbox[] = [\r\n' +
  "  {value: false, name: 'option 1'},\r\n" +
  "  {value: true, name: 'option 2'},\r\n" +
  "  {value: true, name: 'option 3'},\r\n" +
  "  {value: false, name: 'option 4'},\r\n" +
  ']\r\n' +
  '\r\nconst TextInputsExample: React.FC = () => {\r\n' +
  '  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false)\r\n' +
  '  const [checkboxesGroup, setCheckboxesGroup] = useState<IMultiCheckbox[]>(\r\n' +
  '    checkboxes,\r\n' +
  '  )\r\n' +
  '\r\n' +
  '  const handleCheckboxes = (event: ChangeEvent<HTMLInputElement>): void => {\r\n' +
  '    const newCheckboxes = checkboxesGroup.map(checkbox => {\r\n' +
  '      if (checkbox.name === event.target.name) {\r\n' +
  '        checkbox.value = !checkbox.value\r\n' +
  '      }\r\n' +
  '\r\n' +
  '      return checkbox\r\n' +
  '    })\r\n' +
  '\r\n' +
  '    setCheckboxesGroup([...newCheckboxes])\r\n' +
  '  }\r\n' +
  '\r\n' +
  '  return (\r\n' +
  '    <>\r\n' +
  '      <div style={{minWidth: 700}}>\r\n' +
  '        <Checkbox\r\n' +
  '          label="Test Checkbox"\r\n' +
  '          name="test-checkbox"\r\n' +
  '          color="secondary"\r\n' +
  '          value={checkboxChecked}\r\n' +
  '          onChange={event => setCheckboxChecked(event.target.checked)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '      <div style={{minWidth: 700, marginTop: 20}}>\r\n' +
  '        <Checkbox\r\n' +
  '          label="Test Checkbox"\r\n' +
  "          style={{color: 'green'}}\r\n" +
  "          containerStyle={{background: '#f5f5f5f5', padding: '10px'}}\r\n" +
  '          isMultiCheckbox\r\n' +
  '          checkboxes={checkboxesGroup}\r\n' +
  '          onChange={event => handleCheckboxes(event)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '    </>\r\n' +
  '  )\r\n' +
  '}\r\n' +
  '\r\n' +
  'export default TextInputsExample'

const Source: React.FC = () => {
  return <SourceCodeContainer sourceCodeTitle="" sourceCode={codeString} />
}

export default Source
