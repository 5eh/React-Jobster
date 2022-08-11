import React, { useEffect } from 'react'
import { showStats } from '../../features/allJobs/allJobsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ChartsContainer, StatsContainer } from '../../components'


const Stats = () => {
  const {isLoading, monthlyApplications} = useSelector((store)=> store.allJobs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showStats)
  }, [])

  return (
    <>
      <StatsContainer />
      <ChartsContainer />

    </>
  )
}

export default Stats