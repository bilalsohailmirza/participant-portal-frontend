import React from 'react'
import { HomeCard } from '../components/Card'

const FeaturedSocieties = () => {
  return (
    <div className='p-4'>
        <h2 className='flex justify-center text-4xl font-bold'>Featured Societies</h2>
        <div className="mx-4 my-8 flex justify-center content-center flex-wrap gap-8">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </div>
    </div>
  )
}

export default FeaturedSocieties