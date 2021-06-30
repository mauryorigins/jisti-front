import React from 'react'
import SourceCodeContainer from '../../../SourceCodeContainer'

const codeString =
  "import React, {useState} from 'react'\r\n" +
  "import TextInput from './TextInput'\r\n" +
  '\r\nconst TextInputsExample: React.FC = () => {\r\n' +
  "  const [inputValue, setInputValue] = useState<string>('')\r\n" +
  '\r\n' +
  '  return (\r\n' +
  '    <>\r\n' +
  '      <div style={{minWidth: 700}}>\r\n' +
  '        <TextInput\r\n' +
  '          value={inputValue}\r\n' +
  '          label="Test input"\r\n' +
  "          style={{width: '100%'}}\r\n" +
  '          onChange={event => setInputValue(event.target.value)}\r\n' +
  '        />\r\n' +
  '      </div>\r\n' +
  '      <div style={{minWidth: 700, marginTop: 20}}>\r\n' +
  '        <TextInput\r\n' +
  '          label="Test input with custom error handler"\r\n' +
  '          value={inputValue}\r\n' +
  "          style={{width: '100%'}}\r\n" +
  '          customErrorHandler\r\n' +
  '          error={true}\r\n' +
  '          helperText="This is a custom helper text!"\r\n' +
  '          onChange={event => setInputValue(event.target.value)}\r\n' +
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
