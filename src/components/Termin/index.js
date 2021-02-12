import React, { useState } from "react"
import { navigate } from "gatsby"

import emailjs, { init } from "emailjs-com"

init("user_pjN71AkA6f8IUCEG6ohxc")

const Termin = () => {
  const [terminDate, setTerminDate] = useState(new Date())
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [problem, setProblem] = useState("")

  const sendEmail = () => {
    const templateParams = {
      message_html: `<div><ol style="font-size: 18px">
      <li>Name: ${name}  </li>
      <li>Handy Nummer:  ${number}  </li>

      <li>Time: ${terminDate}  </li>
      <li>Problem: <span style='color : red'>${problem}</span>  </li>
      </ol></div>`,
      from_name: `PhoneABC GmbH`,
      to_bcc: email,
    }

    emailjs
      .send(
        "service_l634urs",
        "template_rt2n1wt",
        templateParams,
        "user_pjN71AkA6f8IUCEG6ohxc"
      )
      .then(
        result => {
          alert(`Thanks for Termin. Check Your ${email} to review your termin`)
          navigate("/")
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <>
      <form
        className="termin form-share"
        onSubmit={e => {
          e.preventDefault()
          sendEmail()
        }}
      >
        <h3>Termin Buchen</h3>
        <label className="form-label" htmlFor="form-name">
          Ihr Name
        </label>
        <input
          id="form-name"
          className="form-name"
          type="text"
          // placeholder="Ihr Name"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          required
        />
        <label className="form-label" htmlFor="form-number">
          Handy Numer
        </label>
        <input
          id="form-number"
          className="form-number"
          type="number"
          // placeholder="Handy Numer"
          value={number}
          onChange={e => {
            setNumber(e.target.value)
          }}
          required
        />
        <label className="form-label" htmlFor="form-email">
          Email Addresse
        </label>
        <input
          id="form-email"
          className="form-email"
          type="email"
          // placeholder="Email Address"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          required
        />
        <label className="form-label" htmlFor="meeting-time">
          {" "}
          Time{" "}
        </label>
        <input
          className="form-time"
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          value={terminDate}
          onChange={e => {
            setTerminDate(e.target.value)
          }}
          min="2020-06-07T00:00"
          max="2022-10-14T00:00"
        />
        <label className="form-label" htmlFor="termin-problem">
          Problembeschreibung
        </label>
        <textarea
          id="termin-problem"
          // placeholder="Problembeschreibung"
          onChange={e => {
            setProblem(e.target.value)
          }}
        />
        <input className="form-submit" type="submit" value="Termin buchen" />
      </form>
    </>
  )
}

export default Termin
