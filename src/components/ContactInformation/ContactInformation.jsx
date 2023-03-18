import './ContactInformation.css'

// Components
import IdentityHeader from '../IdentityHeader/IdentityHeader'

// Assets
import email from '../../assets/icons/profile/email.svg'
import github from '../../assets/icons/profile/github.svg'
import linkedin from '../../assets/icons/profile/linkedin.svg'
import codewars from '../../assets/icons/profile/codewars.svg'

const ContactInformation = ({ person }) => {
  const checkProp = (prop) => prop ? prop : 'Not Available'

  return (
    <section className="contactInformation">
      <IdentityHeader person={person} textAlign="left" />
      <div>
        <h3>
          <img src={email} alt="email" />
          Email
        </h3>
        <p>{checkProp(person.email)}</p>
      </div>
      <div>
        <h3>
          <img src={github} alt="github" />
          Github
        </h3>
        <p>{checkProp(person.gitHubUserName)}</p>
      </div>
      <div>
        <h3>
          <img src={linkedin} alt="linkedin" />
          LinkedIn
        </h3>
        <p>{checkProp(person.linkedInUserName)}</p>
      </div>
      <div>
        <h3>
          <img src={codewars} alt="codewars" />
          Codewars
        </h3>
        <p>{checkProp(person.codeWarsUserName)}</p>
      </div>
    </section>
  )
}

export default ContactInformation