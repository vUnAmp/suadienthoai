import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useForm } from "react-hook-form"
import Input from "@material-ui/core/Input"

// Redux
import { useDispatch } from "react-redux"
import { signInEmail } from "../../../redux/User/user.actions"

const SignIn = ({ handleChange }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    dispatch(signInEmail(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-share">
        <div className="form-account__header">
          <h3>Bereits Kunde?</h3>
          <p>
            Loggen Sie sich jetzt ein, um alle Vorteile des
            Repairphone24-Kundenkontos wahrzunehmen
          </p>
        </div>
        {/* <input
          placeholder="Ihr Name"
          className="form-name"
          name="firstName"
          ref={register({ required: true, maxLength: 20 })}
        /> */}
        {/* <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} /> */}
        <input
          placeholder="Ihr Email"
          className="form-email"
          name="email"
          type="email"
          ref={register({ required: true, minLength: 12 })}
        />
        {errors.email && (
          <p className="form-account__error">
            Bitte geben Sie eine gültige Email-Adresse ein.
          </p>
        )}
        <input
          placeholder="Password"
          className="form-email"
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && (
          <p className="form-account__error">
            Bitte geben Sie Ihr Passwort ein(mindestens 6 Zeichen)
          </p>
        )}
        <input
          type="submit"
          className="btn form-submit form-submit__account"
          value="Anmelden"
        />
        <p onClick={handleChange} className="form-account__link">
          Neu bei Repairphone24? <strong>Jetzt Konto anlegen</strong>{" "}
        </p>
      </form>
    </div>
  )
}

export default SignIn
