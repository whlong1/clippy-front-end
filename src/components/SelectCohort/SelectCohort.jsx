import { useLocation, useNavigate } from 'react-router-dom'
import './SelectCohort.css'

// Hooks
import { useIndexCohorts } from '../../hooks/useIndexCohorts'

const SelectCohort = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const basePath = location.pathname.split('/')[1]
  const { cohorts, status } = useIndexCohorts()
  const { user, cohortId, setCohortId } = props
  const menuStyleClass = user.isAdmin ? 'cohortSelect' : 'cohortDisplay'

  if (status === 'error') return <p className='cohortSelectStatus'>Error</p>
  if (status === 'loading') return <p className='cohortSelectStatus'>Loading...</p>
  if (!cohorts.length) return (
    <select className='cohortDisplay' disabled={true}>
      <option>No Cohorts</option>
    </select>
  )

  const currentCohort = cohorts.find((c) => c._id === cohortId)
  const optionsArr = user.isAdmin
    ? [currentCohort, ...cohorts.filter((c) => c._id !== cohortId)]
    : [currentCohort]

  const handleChange = ({ target }) => {
    setCohortId(target.value)
    navigate(`/${basePath}`)
  }

  return (
    <select className={menuStyleClass} onChange={handleChange} disabled={!user.isAdmin}>
      {optionsArr.map((c) => (
        <option key={c._id} value={c._id}>{c.name}</option>
      ))}
    </select>
  )
}

export default SelectCohort