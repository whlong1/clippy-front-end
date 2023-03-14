import './RequirementTags.css'

// Assets
import tag from '../../../assets/icons/headers/tag.svg'

const RequirementTags = ({ deliverable }) => {
  const requirements = {
    hasQuiz: { color: '#FF6B9E', text: 'Quiz' },
    hasMiscUrl: { color: '#404040', text: 'Misc' },
    hasGitHubUrl: { color: '#56A64B', text: 'Github' },
    hasTrelloUrl: { color: '#A971B1', text: 'Trello' },
    hasDeploymentUrl: { color: '#0077C9', text: 'Deployment' },
    hasCodeSandboxUrl: { color: '#404040', text: 'Code Sandbox' },
  }

  const activeReqs = Object.entries(requirements).filter((obj) => deliverable[obj[0]])
  const requirementTags = activeReqs.map((r) => requirements[r[0]])

  return (
    <div className="subheader">
      <h3>
        <img src={tag} alt="requirements tag" />
        Requirements
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {requirementTags.map((r) => (
          <div key={r.text} className="tag" style={{ background: r.color, marginRight: '8px' }}>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RequirementTags