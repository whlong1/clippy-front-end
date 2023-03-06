import { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from '@codemirror/lang-javascript'
import './CodeEditor.css'

const CodeEditor = ({ formData, setFormData }) => {

  const handleChange = useCallback((value) => {
    setFormData({ ...formData, codeblock: value })
  }, [])

  return (
    <CodeMirror
      width='100%'
      theme={dracula}
      name="codeblock"
      minHeight="100px"
      onChange={handleChange}
      value={formData.codeblock}
      extensions={[javascript({ jsx: true })]}
    />
  )
}

export default CodeEditor