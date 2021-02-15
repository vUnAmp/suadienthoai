import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

const RecoverPassword = ({ handleRecover }) => {
  const [email, setEmail] = useState("")
  const [finish, setFinish] = useState(true)
  const [err, setErr] = useState("")

  const submitRecover = e => {
    e.preventDefault()
    if (
      email.length < 10 ||
      !email.includes(".") ||
      email.split("").lastIndexOf("@") + 4 > email.split("").lastIndexOf(".")
    ) {
      setErr("Bitte geben Sie eine gültige Email-Adresse ein.")
      return
    }
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // setFinish(!finish)
      })
      .catch(err => {
        // console.log(err)
      })
    setFinish(!finish)
  }
  return (
    <div>
      {finish ? (
        <form onSubmit={submitRecover} className="form-share">
          <div className="form-account__header">
            <h3>Passwort vergessen?</h3>
            <p>
              Geben Sie Ihre E-Mail-Adresse ein, mit der Sie sich bei MediaMarkt
              registriert haben. Wir senden Ihnen einen Link zum Zurücksetzen
              des Passworts.
            </p>
            <input
              placeholder="Ihr Email"
              className="form-email"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="submit"
              className="btn form-submit form-submit__account"
              value="submit click"
            />
            {err && <p className="form-account__error">{err}</p>}
          </div>
          <p onClick={handleRecover} className="form-account__link">
            Zurück <strong>zum Login</strong>
          </p>
        </form>
      ) : (
        <div className="form-share">
          <h3>Sie haben Post! </h3>
          <p>
            Sofern unter der E-Mail-Adresse <strong>{email}</strong> ein Konto
            besteht, finden Sie die Anleitung zum Zurücksetzen Ihres Passworts
            im Posteingang. Bitte überprüfen Sie auch Ihren Spamordner.
          </p>
          <p onClick={handleRecover} className="form-account__link">
            Zurück <strong>zum Login</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default RecoverPassword
