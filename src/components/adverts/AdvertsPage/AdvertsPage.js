// import React from 'react'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Layout from '../../layout'
import FiltersForm from './FiltersForm'
import AdvertsList from './AdvertsList'
import EmptyList from './EmptyList'
import storage from '../../../utils/storage'
import { defaultFilters, filterAdverts } from './filters'
import { useSelector, useDispatch } from 'react-redux'
import { loadAvderts } from '../../../store/actions'
import { getAdverts, getUIState } from '../../../store/selectors'

const getFilters = () => storage.get('filters') || defaultFilters
const saveFilters = (filters) => storage.set('filters', filters)

function AdvertsPage() {
  const dispatch = useDispatch()
  const adverts = useSelector(getAdverts)
  const {error} = useSelector(getUIState)

  useEffect(() => {
    dispatch(loadAvderts())
  }, [dispatch])

  const [filters, setFilters] = useState(getFilters)

  useEffect(() => {
    saveFilters(filters)
  }, [filters])

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />
  }

  const filteredAdverts = filterAdverts(adverts, filters)

  return (
    <Layout>
      {adverts.length > 0 && (
        <FiltersForm
          initialFilters={filters}
          defaultFilters={defaultFilters}
          prices={adverts.map(({ price }) => price)}
          onFilter={setFilters}
        />
      )}
      {filteredAdverts.length ? (
        <AdvertsList adverts={filteredAdverts} />
      ) : (
        <>
          <EmptyList advertsCount={adverts.length} />
        </>
      )}
    </Layout>
  )
}

export default AdvertsPage
