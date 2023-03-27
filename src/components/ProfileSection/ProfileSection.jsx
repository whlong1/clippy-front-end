// Components
import ExternalLink from "../../components/ExternalLink/ExternalLink"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import IdentityHeader from "../../components/IdentityHeader/IdentityHeader"

// Assets
import github from '../../assets/icons/profile/github.svg'
import linkedin from '../../assets/icons/profile/linkedin.svg'
import codewars from '../../assets/icons/profile/codewars.svg'

const ProfileSection = ({ person }) => {
  return (
    <section>
      <ProfilePicture key={person._id} gitHubUserName={person.gitHubUserName} size="128px" />
      <IdentityHeader person={person} textAlign="center" displayRole={true} />
      <span className="personLinks">
        <ExternalLink urlString={`https://github.com/${person.gitHubUserName}`}>
          <img src={github} alt="github" />
        </ExternalLink>
        <ExternalLink urlString={`https://www.linkedin.com/in/${person.linkedInUserName}`}>
          <img src={linkedin} alt="linkedin" />
        </ExternalLink>
        <ExternalLink urlString={`https://www.codewars.com/users/${person.codeWarsUserName}`}>
          <img src={codewars} alt="codewars" />
        </ExternalLink>
      </span>
    </section>
  )
}

export default ProfileSection