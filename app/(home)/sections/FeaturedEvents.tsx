import React from 'react'
import { HomeCard } from '../components/Card'
import { Home } from 'lucide-react'
const FeaturedEvents = () => {
  return (
    <div className='p-4'>
        <h2 className='flex justify-center text-4xl font-bold'>Featured Events</h2>
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

export default FeaturedEvents