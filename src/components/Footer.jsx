import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer" id='foot'>
            <footer className='py-5 bg-dark fixed-bottom'>
                <div className='container'>
                    <a href='https://github.com/ArchitectB93' target="_blank" rel='noreferrer'>
                        <button>
                            <FontAwesomeIcon icon={faGithub} id="github"/>
                        </button>
                    </a>
                    <a href='https://www.linkedin.com/in/architectb/' rel='noreferrer' target="_blank">
                        <button>
                            <FontAwesomeIcon icon={faLinkedin} id="link"/>
                        </button>
                    </a>
                    <a href='https://architectb93.github.io/ab93.github.io/about.html' rel='noreferrer'>
                        <button id="main">
                            Main page
                        </button>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;