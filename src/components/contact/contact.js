import React from 'react'

import '../../css/contact.scss'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(fab, faEnvelope,fas);
 


const Contact = () => {

        return(
            <div id="Contact" class="contact-container">
            <h2 id="contact-h2">Contact Me</h2>
          <a
            href="https://www.linkedin.com/in/martin-lindblad-35176516b/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon className="icon" icon={["fab", "linkedin"]} />
            </a>
          <a
            href="https://www.facebook.com/martin.lindblad.733"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon className="icon" icon={["fab", "facebook"]} />
            </a>
          <a
             href="mailto:martin.lindblad1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon className="icon" icon={["fas", "envelope-square"]} />
            </a>
          <a
            href="tel:0730922979"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FontAwesomeIcon className="icon" icon={["fas", "phone-square"]} />
            </a>

        </div>   
            )
            
        
}

export default Contact