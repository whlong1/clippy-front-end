import "./GradingNotes.css"

const GradingNotes = ({ gradingNotes, handleChange }) => {
  return (
    <section>
      <textarea
        name="gradingNotes"
        placeholder="Grading Notes..."
        value={gradingNotes}
        onChange={handleChange}
        disabled={!handleChange}
      />
    </section>
  )
}

export default GradingNotes