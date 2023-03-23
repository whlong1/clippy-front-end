// Assets
import submittedIcon from '../../../assets/icons/headers/submitted.svg'

// Components
import SubmittedLink from '../components/SubmittedLink/SubmittedLink'

// Helpers
import { filterDeliverableUrls } from '../helpers/helpers'

const SubmittedMaterials = ({ deliverable }) => {
  const filteredUrls = filterDeliverableUrls(deliverable)

  const urlLinks = filteredUrls.map((url, idx) => (
    <SubmittedLink
      key={idx}
      url={url}
      studentDeliverable={deliverable}
      styleProp={{ marginRight: '12px' }}
    />
  ))

  return (
    <div className="subheader">
      <h3>
        <img src={submittedIcon} alt="submitted" />
        Submitted Materials
      </h3>
      <div style={{ flexDirection: 'row', width: '100%' }}>
        {filteredUrls.length ? urlLinks : <p style={{ marginTop: '2px' }}>No materials</p>}
      </div>
    </div>
  )
}

export default SubmittedMaterials