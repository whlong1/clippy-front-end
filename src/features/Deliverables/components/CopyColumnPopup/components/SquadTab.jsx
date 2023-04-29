import { filterRequirements } from '../../../helpers/helpers'

const SquadTab = ({ deliverable }) => {
  const requirement = filterRequirements(deliverable)
  const squadList = [
    ...new Set(deliverable.students.map((s) => (
      s.squad[0].toUpperCase() + s.squad.slice(1)
    )))
  ]

  const copySquadDeliverable = (squad) => {
    squad = squad.toLowerCase()
    const squadAcc = deliverable.students.reduce((obj, s) => {
      if (squad === s.squad) {
        obj[squad] = s[requirement] ? s[requirement] : obj[requirement]
      }
      return obj
    }, {})
    navigator.clipboard.writeText(squadAcc[squad])
  }

  return (
    <section className="tabSection">
      {squadList.map((squad, idx) => (
        <div className="urlColumn" key={idx}>
          <p>{squad} Squad</p>
          <button onClick={() => copySquadDeliverable(squad)} style={{ margin: "0" }}>
            {/* {copied[idx] ? "COPIED" : "COPY"} */}
          </button>
        </div>
      ))}
    </section>
  )
}

export default SquadTab