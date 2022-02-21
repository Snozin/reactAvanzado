import T from 'prop-types'

import useForm from '../../../hooks/useForm'

const validEmail = ({ email }) => email
const validPassword = ({ password }) => password

function LoginForm({ onSubmit }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: false,
  })
  const { email, password, remember } = credentials

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <label>
        Remember me
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
      </label>
      <button disabled={!validate(validEmail, validPassword)}>Login</button>
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
}

export default LoginForm
