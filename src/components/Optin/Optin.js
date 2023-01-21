import React, { Component } from "react";
import "./Optin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



class Optin extends Component {
  modal() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("is_open");
  }

  render() {
    return (
      <div className="optin">
        <p>Contact us if you've got questions about studentBae?</p>
        <button onClick={() => this.modal()}>Click Me</button>
        <div id="modal" className="is_open">
          <a href="mailto: gamkersofficial@gmail.com" className="wrapper">
          <FontAwesomeIcon icon={faEnvelope} /><p>gamkersofficial@gmail.com</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Optin;
