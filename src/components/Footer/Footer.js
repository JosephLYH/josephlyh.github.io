import './Footer.css'
import { about } from '../../portfolio'

const Footer = () => {
  const { social } = about

  return (
    <footer className='footer'>
      <a
        href={social.github}
        className='link footer__link'
      >
        Created By {about.name}
      </a>
    </footer>
  )
}

export default Footer
