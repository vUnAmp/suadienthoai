import React, { useState } from "react"
import { navigate } from "gatsby"

import emailjs, { init } from "emailjs-com"

// import SEO from "../SEO"

init("user_pjN71AkA6f8IUCEG6ohxc")
const d = new Date()
const month = d.getMonth() + 1
const day = d.getDate()
const year = d.getFullYear()
const fullDate = [year, month, day].join("-")

const Termin = () => {
  const [terminDate, setTerminDate] = useState(`${fullDate}T00:00`)
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [problem, setProblem] = useState("")

  const sendEmail = () => {
    // `khach hang: ${name}, sdt: ${number}, May : ${branch},  ${model}, Bi hong : ${problem} , Thoi gian ${terminDate} `
    // <li>Handy Model: ${branch} - ${model}  </li>
    // <li>Problem : ${problem}  </li>
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
      {/* <SEO title="Termin buchen" /> */}
      <form
        className="termin"
        onSubmit={e => {
          e.preventDefault()
          sendEmail()
        }}
      >
        <h3>Termin Buchen</h3>
        <input
          className="form-name"
          type="text"
          placeholder="Ihr Name"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          required
        />
        <input
          className="form-number"
          type="number"
          placeholder="Handy Numer"
          value={number}
          onChange={e => {
            setNumber(e.target.value)
          }}
          required
        />
        <input
          className="form-email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          required
        />
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
          max="2021-10-14T00:00"
        ></input>
        <textarea
          placeholder="Problembeschreibung"
          onChange={e => {
            setProblem(e.target.value)
          }}
        ></textarea>

        <input className="form-submit" type="submit" value="Termin buchen" />
      </form>
    </>
  )
}

export default Termin
