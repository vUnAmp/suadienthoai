import React from "react"
import firebase from "gatsby-plugin-firebase"
import { useForm } from "react-hook-form"
import Input from "@material-ui/core/Input"

const SignIn = ({ handleChange }) => {
  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = data => console.log(data)

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
          ref={register({ required: true, min: 12, max: 99 })}
        />
        <input
          placeholder="Password"
          className="form-email"
          name="password"
          type="password"
          ref={register({ required: true, min: 6, max: 99 })}
        />
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
