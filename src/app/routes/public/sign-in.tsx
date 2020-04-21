import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default (): React.ReactElement => {
  const [error, setError] = React.useState('')
  const history = useHistory()

  return (
    <SignInForm>
    <h1>sign in</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors: {email?: string} = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        signMeIn(values)
          .then(() => history.push('/logged-in'))
          .catch(setError)
          .finally(() => setSubmitting(false))
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </StyledForm>
      )}
    </Formik>
    {error}
  </SignInForm>
  )
}

function signMeIn(payload) {
  return new Promise((resolve, reject) => {
    const randomlyFail = Math.round(Math.random())
    setTimeout(() => randomlyFail ? resolve('happy') : reject('unable to log in at this time'), 2000)
  })
}

const SignInForm = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`

const StyledForm = styled(Form)`
  display: grid;
  grid-row-gap: 10px;
`
