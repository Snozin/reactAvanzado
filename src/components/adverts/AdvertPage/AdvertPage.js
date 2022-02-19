import { useEffect } from 'react'
import { Redirect, useParams, useHistory } from 'react-router-dom'

import Layout from '../../layout'
import AdvertDetail from './AdvertDetail'

import { useSelector, useDispatch } from 'react-redux'
import { getUIState, getSingleAdvert } from '../../../store/selectors'
import { getAdvertById, deleteAdvert } from '../../../store/actions'

function AdvertPage() {
  const dispatch = useDispatch()
  const { advertId } = useParams()
  const { error } = useSelector(getUIState)
  const advert = useSelector(getSingleAdvert)
  const history = useHistory()

  useEffect(() => {
    dispatch(getAdvertById(advertId))
  }, [dispatch, advertId])

  const handleDelete = () => {
    dispatch(deleteAdvert(advertId, history))
  }

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />
  }

  return (
    <Layout>
      {advert && <AdvertDetail {...advert} onDelete={handleDelete} />}
    </Layout>
  )
}

export default AdvertPage
