const DeliverableStatusSelect = ({ formData, handleChange }) => {

  return (
    <select
      name="status"
      onChange={handleChange}
      defaultValue={formData.status}
    >
      <option value='assigned'>Assigned</option>
      <option value='pendingAudit'>Pending Audit</option>
      <option value='complete'>Complete</option>
      <option value='incomplete'>Incomplete</option>
      <option value='missing'>Missing</option>
    </select>
  )
}

export default DeliverableStatusSelect