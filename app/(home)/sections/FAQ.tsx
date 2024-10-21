import { HomeAccordion } from '../components/Accordian'

const FAQ = () => {
  return (
    <div className='p-4'>
        <div className="text-4xl font-bold flex justify-center my-4">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className="flex justify-center my-12">
        <HomeAccordion />
        </div>
    </div>
  )
}

export default FAQ