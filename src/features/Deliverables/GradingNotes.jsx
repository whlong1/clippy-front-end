const GradingNotes = ({ instructorView, gradingNotes, handleChange }) => {
  return (
    <section>
      {/* {instructorView && <h2>Grading Notes</h2>} */}
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