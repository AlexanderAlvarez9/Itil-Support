import React from 'react';
import '../assets/styles/components/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Facebook = 'https://www.Facebook.com/';
const Instagram = 'https://www.Instagram.com/';
const Twitter = 'https://www.Twitter.com/';
const Whatsapp = 'https://www.Whatsapp.com/';
const Youtube = 'https://www.Youtube.com/';
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Footer">
          <div className="Footer--social-networks">
            <a href={Facebook} target="_blank" className="socialIcon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={Instagram} target="_blank" className="socialIcon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={Twitter} target="_blank" className="socialIcon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={Whatsapp} target="_blank" className="socialIcon"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href={Youtube} target="_blank" className="socialIcon"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;