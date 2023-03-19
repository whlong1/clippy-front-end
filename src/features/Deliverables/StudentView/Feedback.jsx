import GradingNotes from "../components/GradingNotes/GradingNotes"
import CodeEditor from "../components/CodeEditor/CodeEditor"

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