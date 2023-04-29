import { useState } from 'react'
import { filterRequirements } from '../../../helpers/helpers'

const SquadTab = ({ deliverable }) => {
  const requirement = filterRequirements(deliverable)
  const squadList = [...new Set(deliverable.students.map((s) => (s.squad[0].toUpperCase() + s.squad.slice(1))))]
  const initialCopiedState = squadList.map((c) => false)
  const [copied, setCopied] = useState(initialCopiedState)

  const copySquadDeliverable = (squad, idx) => {
    squad = squad.toLowerCase()
    const squadAcc = deliverable.students.reduce((obj, s) => {
      if (squad === s.squad) {
        obj[squad] = s[requirement] ? s[requirement] : obj[requirement]
      }
      return obj
    }, {})
    navigator.clipboard.writeText(squadAcc[squad])
    setCopied((prev) => prev.map((s, i) => i === idx ? true : false))
    setTimeout(() => setCopied(initialCopiedState), 800)
  }

  return (
    <section className="tabSection">
      {squadList.map((squad, idx) => (
        <div className="urlColumn" key={idx}>
          <p>{squad} Squad</p>
          <button onClick={() => copySquadDeliverable(squad, idx)} style={{ margin: "0" }}>
            {copied[idx] ? "COPIED" : "COPY"}
          </button>
        </div>
      ))}
    </section>
  )
}

export default SquadTab