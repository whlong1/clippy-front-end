import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Hooks
import { useCohortManager } from '../../hooks/useCohortManager'

const CohortForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname.replace('/admin/cohorts/', ''))
  const mutation = useCohortManager()

  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
  })

  const title = location.pathname.replace('/admin/cohorts/', '')
  const formattedTitle = title[0].toUpperCase() + title.slice(1)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({ type: 'create', payload: { ...formData } })
    navigate('/admin/cohorts')
  }

  return (
    <section className="formContainer">
      <form onSubmit={handleSubmit}>
        <header className="header">
          <h1>{formattedTitle} Cohort</h1>
          <button type="submit">Submit</button>
        </header>
        <label htmlFor="name">
          Name:
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
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
      </form>
    </section>
  )
}

export default CohortForm