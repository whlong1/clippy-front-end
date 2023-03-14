import GradingNotes from "../GradingNotes"
import CodeEditor from "../CodeEditor/CodeEditor"

const Feedback = ({ studentDeliverable }) => {
  return (
    <>
      {studentDeliverable.gradingNotes &&
        <GradingNotes
          gradingNotes={studentDeliverable.gradingNotes}
        />
      }
      {studentDeliverable.codeblock &&
        <CodeEditor
          formData={studentDeliverable}
        />
      }
    </>
  )
}

export default Feedback