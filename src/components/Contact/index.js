import React from "react"

import LocalIcon from "../../Icons/Local"
import TimeOpenIcon from "../../Icons/Timeopen"
import ContactIncon from "../../Icons/Contact"

const Contact = () => {
  return (
    <div className="boxFull contact">
      <div className="box boxFlex">
        <div className="col-12 col-md-4 contact-address">
          <span className="contact-icon">
            <LocalIcon width="3rem" height="3rem" />
            <span className="contact-title">Adresse</span>
          </span>
          <span className="contact-text">
            {" "}
            Herzbergstraße 128-139 <br /> Halle 6 R606 10365 Berlin
          </span>
        </div>
        <div className="col-12 col-md-4 contact-time">
          <span className="contact-icon">
            <TimeOpenIcon width="3rem" height="3rem" />
            <span className="contact-title">Öffnungszeiten</span>
          </span>
          <span>
            <strong>MI-SO</strong> 10:00 - 19:00 <br />
            <strong>DI</strong> Geschlossen
          </span>
        </div>
        <div className="col-12 col-md-4 contact-method">
          <span className="contact-icon">
            <ContactIncon width="2.8rem" height="2.8rem" />
            <span className="contact-title">Kontakt</span>
          </span>
          <span className="contact-text">
            {" "}
            Tel/Whatsapp 015252686666
            <br />
            Email: phoneabcdo@gmail.com
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
