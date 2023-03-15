import { useProfiles } from "../../hooks/useProfiles"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

const Profiles = () => {
  const { profiles, status } = useProfiles()

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  return (
    <section>
      <header className="header">
        <section>
          <h1>Profiles</h1>
        </section>
      </header>
      {profiles.map((p) => (
        <div key={p._id} className="row">
          <ProfileInfo key={p._id} profile={p} />
        </div>
      ))}
    </section>
  )
}

export default Profiles