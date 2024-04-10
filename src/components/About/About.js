import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      {resume && (
        <a href={resume} aria-label='resume' className='about__contact'>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>
      )}

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.email && (
              <a
                href={`mailto:${social.email}`}
                aria-label='email'
                className='link link--icon'
              >
                <EmailIcon />
              </a>
            )}

            {social.mobile && (
              <a
                href={`tel:${social.mobile}`}
                aria-label='mobile'
                className='link link--icon'
              >
                <SmartphoneIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
