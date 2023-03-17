import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Components
import CohortFormInputs from './CohortFormInputs'

// Hooks
import { useCohortManager } from '../../hooks/useCohortManager'

const CohortForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const mutation = useCohortManager()

  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
  })

  const title = location.pathname === '/'
    ? 'create'
    : location.pathname.replace('/admin/cohorts/', '')

  const formattedTitle = title[0].toUpperCase() + title.slice(1)

  useEffect(() => {
    if (title === 'edit') {
      setFormData({
        name: location.state.name,
        endDate: location.state.endDate.slice(0, 10),
        startDate: location.state.startDate.slice(0, 10),
      })
    }
  }, [title, location])


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    title === 'new'
      ? mutation.mutate({ type: 'create', payload: { ...formData } })
      : mutation.mutate({ type: 'update', payload: { ...formData, cohortId: location.state._id } })

    navigate('/admin/cohorts')
  }

  return (
    <section className="formContainer">
      <form onSubmit={handleSubmit}>
        {!formattedTitle === 'Create' &&
          <header className="header">
            <h1>{formattedTitle} Cohort</h1>
            <button type="submit">
              SUBMIT
            </button>
          </header>
        }
        <CohortFormInputs formData={formData} handleChange={handleChange} />

        {formattedTitle === 'Create' && <button type="submit">SUBMIT</button>}
      </form>
    </section>
  )
}

export default CohortForm