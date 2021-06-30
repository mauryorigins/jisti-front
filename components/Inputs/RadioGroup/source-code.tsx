import React from 'react'
import SourceCodeContainer from '../../../SourceCodeContainer'

const codeString =
  "import React, {useState} from 'react'\r\n" +
  "import RadioGroup, {IRadioButton} from './RadioGroup'\r\n" +
  '\r\nconst radioButtons: IRadioButton[] = [\r\n' +
  "  {value: 'option 1', name: 'option 1'},\r\n" +
  "  {value: 'option 2', name: 'option 2'},\r\n" +
  "  {value: 'option 3', name: 'option 3'},\r\n" +
  "  {value: 'option 4', name: 'option 4'},\r\n" +
  ']\r\n' +
  '\r\nconst RadioGroupExample: React.FC = () => {\r\n' +
  '  const [selectRadioButton, setSelectRadioButton] = useState<number | string>(\r\n' +
  "    'option 1',\r\n" +
  '  )\r\n' +
  '\r\n' +
  '  return (\r\n' +
  '    <>\r\n' +
  '      <div>\r\n' +
  '        <RadioGroup\r\n' +
  '          color="primary"\r\n' +
  '          radioButtons={radioButtons}\r\n' +
  '          value={selectRadioButton}\r\n' +
  '          formLabel="This is a label for you radio buttons"\r\n' +
  '          onChange={event => setSelectRadioButton(event.target.value)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '      <div>\r\n' +
  '        <RadioGroup\r\n' +
  "          style={{color: '#FFA900'}}\r\n" +
  '          radioButtons={radioButtons}\r\n' +
  '          value={selectRadioButton}\r\n' +
  '          row\r\n' +
  '          error={true}\r\n' +
  '          formLabel="This is a label for you radio buttons"\r\n' +
  '          helperText="You can display a helper text in case of error"\r\n' +
  '          onChange={event => setSelectRadioButton(event.target.value)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '    </>\r\n' +
  '  )\r\n' +
  '}\r\n' +
  '\r\n' +
  'export default RadioGroupExample'

const Source: React.FC = () => {
  return <SourceCodeContainer sourceCodeTitle="" sourceCode={codeString} />
}

export default Source
