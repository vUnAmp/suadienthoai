import React, { useEffect } from "react"

import { useForm } from "react-hook-form"

// REDUX
import {
  resetUserError,
  startSignUP,
  userLoadingStart,
} from "../../../redux/User/user.actions"
import { useDispatch, useSelector } from "react-redux"

const mapState = ({ user }) => ({
  userErr: user.userErr,
})

const SignUp = ({ handleChange }) => {
  const dispatch = useDispatch()
  const { userErr } = useSelector(mapState)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    dispatch(userLoadingStart())
    // const { firstName, email, password } = data
    dispatch(startSignUP(data))
    // const user = await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    // if (user) {
    //   alert(`Thanks ${firstName} . SignUp success`)
    // }
  }
  useEffect(() => {
    dispatch(resetUserError())
  }, [])

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
          name="displayName"
          ref={register({
            required: true,
            minLength: 4,
          })}
        />
        {errors.displayName && (
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
        {userErr && <p className="form-account__error">{userErr}</p>}
        <p onClick={handleChange} className="form-account__link">
          Sie haben bereits ein Konto? <strong>Zur Anmeldung</strong>
        </p>
      </form>
    </div>
  )
}

export default SignUp
