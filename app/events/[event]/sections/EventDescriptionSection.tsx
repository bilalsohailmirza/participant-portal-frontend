import Image from 'next/image'
import procom from '@/assets/procom.jpg'
export default function EventDescriptionSection(){
  return(
<div id="about" className="relative bg-white overflow-hidden mt-16">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <div className="pt-1"></div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            Event Description
          </h2>

          <p>
            Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non libero. Nam
            rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem volutpat sodales. In
            ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere ultrices, purus nulla tristique turpis,
            hendrerit rutrum augue quam ut est. Fusce malesuada posuere libero, vitae dapibus eros facilisis euismod.
            Sed sed lobortis justo, ut tincidunt velit. Mauris in maximus eros.
          </p>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
  <Image src={procom} alt="procom"/>
  </div>
</div>
)
}