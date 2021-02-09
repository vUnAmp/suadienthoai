import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useForm } from "react-hook-form"
import Input from "@material-ui/core/Input"

const SignUp = ({ handleChange }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async data => {
    const { firstName, email, password } = data
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    console.log(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-share">
        <div className="form-account__header">
          <h3>Neuer Kunde?</h3>
          <p>
            Jetzt registrieren, im zweiten Schritt zur anmelden und von vielen
            Vorteilen profitieren.
          </p>
        </div>
        <input
          placeholder="Ihr Name"
          className="form-name"
          name="firstName"
          ref={register({
            required: true,
            minLength: 4,
          })}
        />
        {errors.firstName && (
          <p className="form-account__error">
            Bitte geben Sie Ihren Namen ein.
          </p>
        )}

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
          value="Registrieren"
        />
        <p onClick={handleChange} className="form-account__link">
          Sie haben bereits ein Konto? <strong>Zur Anmeldung</strong>
        </p>
      </form>
    </div>
  )
}

export default SignUp
