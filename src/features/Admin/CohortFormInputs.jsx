const CohortFormInputs = ({ formData, handleChange }) => {
  return (
    <>
      <label htmlFor="name">
        Name:
      </label>
      <input
        required
        id="name"
        name="name"
        type="text"
        placeholder="Cohort Name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="startDate">
        Start Date:
      </label>
      <input
        required
        id="startDate"
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <label htmlFor="endDate">
        End Date:
      </label>
      <input
        required
        id="endDate"
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
    </>
  )
}

export default CohortFormInputs 