import { about, useContact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!useContact) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${about.social.email}`} aria-label='email'>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
