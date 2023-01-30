import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <footer className='py-5 bg-dark fixed-bottom'>
                <div className='container'>
                    <a href='https://github.com/ArchitectB93' target="_blank" rel='noreferrer'>
                        <button>
                            <FontAwesomeIcon icon={faGithub} id="github"/>
                        </button>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;