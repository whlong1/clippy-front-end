import { useCallback } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { dracula } from '@uiw/codemirror-theme-dracula'

import './CodeEditor.css'

const CodeEditor = () => {

  const onChange = useCallback((value, viewUpdate) => {
    console.log('value:', value)
  }, [])


  return (
    <CodeMirror
      value=""
      theme={dracula}
      height="200px"
      width='100%'
      onChange={onChange}
      extensions={[javascript({ jsx: true })]}
    />
  )
}

export default CodeEditor