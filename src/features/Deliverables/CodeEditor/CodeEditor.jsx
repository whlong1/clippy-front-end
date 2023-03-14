import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { javascript } from '@codemirror/lang-javascript'
import './CodeEditor.css'

const CodeEditor = ({ instructorView, formData, setFormData }) => {
  return (
    <section>
      {instructorView && <h2>Codeblock</h2>}
      <CodeMirror
        width='100%'
        theme={dracula}
        name="codeblock"
        minHeight="100px"
        readOnly={!setFormData}
        value={formData.codeblock}
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => {
          if (setFormData) setFormData({ ...formData, codeblock: value })
        }}
      />
    </section>
  )
}

export default CodeEditor