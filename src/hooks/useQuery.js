import { useState, useEffect } from 'react'

function useQuery(query) {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const startExecution = () => {
      setError(null)
      setIsLoading(true)
    }
    const finishExecution = (error, data) => {
      setIsLoading(false)
      if (error) {
        return setError(error)
      }
      setData(data)
    }
    const execute = async () => {
      startExecution()
      try {
        const result = await query()
        finishExecution(null, result)
      } catch (error) {
        finishExecution(error)
      }
    }
    execute()
  }, [query])

  return {
    isLoading,
    error,
    data,
  }
}

export default useQuery
