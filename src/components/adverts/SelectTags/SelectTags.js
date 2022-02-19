import { useEffect } from 'react'

import { CheckboxGroup } from '../../common'
import { useDispatch, useSelector } from 'react-redux'
import { getAdvertTags } from '../../../store/selectors'
import { getTags } from '../../../store/actions'

function SelectTags(props) {
  const dispatch = useDispatch()
  const tags = useSelector(getAdvertTags)

  useEffect(() => {
    dispatch(getTags())
  }, [dispatch])

  return <CheckboxGroup options={tags} {...props} />
}

export default SelectTags
