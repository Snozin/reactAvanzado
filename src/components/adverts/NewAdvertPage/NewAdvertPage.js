import T from 'prop-types'
import { Redirect } from 'react-router-dom'

import Layout from '../../layout'
import NewAdvertForm from './NewAdvertForm'

import { getUIState } from '../../../store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { advertCreate } from '../../../store/actions'

function NewAdvertPage({ history }) {
  const dispatch = useDispatch()
  const error = useSelector(getUIState)

  const handleSubmit = (newAdvert) => {
    dispatch(advertCreate(newAdvert, history))
  }
  if (error?.statusCode === 401) {
    return <Redirect to="/login" />
  }

  return (
    <Layout>
      <NewAdvertForm onSubmit={handleSubmit} />
    </Layout>
  )
}

NewAdvertPage.propTypes = {
  history: T.shape({
    push: T.func.isRequired,
  }).isRequired,
}

export default NewAdvertPage
