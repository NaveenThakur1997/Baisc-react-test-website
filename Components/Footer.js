import React from 'react';
import location from './assets/Group 2580.png';
import contact from './assets/Group 2583.png';
import email from './assets/Group 2583 (1).png';
import facebook from './assets/Group 5.png';
import instagram from './assets/Group 11.png';
import twitter from './assets/Group 10.png';
import linkedin from './assets/Group 9.png';
import Logo from './assets/logo.png';
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer">
    <p>Get in Touch</p>
    <h3>We have 25years of Experience in IT Solution</h3>
    <div className="footer-section">
        <div className="footer-col">
            <h4>AI mantra</h4>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About us</NavLink>
      </li>
      <li>
        <NavLink to="/Services">Service</NavLink>
      </li>
      <li>
        <NavLink to="/Career">Career</NavLink>
      </li>
    </ul>
        </div>
        <div className="footer-col">
            <h4>SERVICES</h4>
            <p><span className="webdev">Web Developnent</span></p>
            <ul>
                <li>UT/UX Design</li>
                <li>Mobile App Developnent</li>
                <li>Digital Marketing</li>
                <li>Corporate Branding</li>
                <li>Corporate Videos</li>
            </ul>
        </div>
        <div className="footer-col">
            <h4> WE'RE HERE TO HELP</h4>
            <ul>
                <li>
                    <img src={location} alt=""/>
                    <h4>LOCATION</h4>
                </li>
                <li>
                    <p>Office One, 2nd Floor, <br/>
                        Unit: S-1111, <br/>
                        XYS main ROAd, <br/>
                        Bangaluru, Karnataka 560048.
                    </p>
                </li>
            </ul>
        </div>
        <div className="footer-col">
            <ul>
                <li>
                    <img src={contact}  alt=""/>
                    <h4>Contact Us</h4>
                    <p>+91 xxxxxxxxxx</p>
                </li>
                <li>
                    <img src={email}  alt=""/>
                    <h4>Business Email</h4>
                    <p>info@aimantra.com</p>
                </li>
            </ul>
        </div>
    </div>

    <div className="btm-nav">
        <img className="img-logo" src={Logo}  alt=""/>
        <p> &copy; 2023 AI mantra. ALL RIGHTS RESERVED.</p>
      <div className="social-media">
        <a href="./"><img src={facebook}  alt=""/></a>
        <a href="./"><img src={instagram}  alt=""/></a>
        <a href="./"><img src={twitter}  alt=""/></a>
        <a href="./"><img src={linkedin}  alt=""/></a>
      </div>
    </div>
</footer>
  );
}

export default Footer;