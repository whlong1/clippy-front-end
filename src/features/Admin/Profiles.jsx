import { useProfiles } from "../../hooks/useProfiles"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

const Profiles = () => {
  const { profiles, status } = useProfiles()

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  return (
    <section>
      <h1>Profiles</h1>
      {profiles.map((p) => (
        <ProfileInfo key={p._id} profile={p} />
      ))}
    </section>
  )
}

export default Profiles