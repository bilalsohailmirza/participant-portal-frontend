import Image from "next/image"
import procom from '@/assets/procom.jpg'

export function EventsSectionComponent(){
    return(
        <div id="about" className="relative bg-white overflow-hidden mt-16">
    <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            {/* <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg> */}

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        Concert
                    </h2>

                    <p>
                    A concert is a live music performance where artists or bands play in front of an audience, creating an immersive experience that brings people together through music. Concerts can vary in size from intimate, small venues to massive stadiums and music festivals, each offering unique atmospheres and energy. At concerts, audiences can enjoy their favorite songs, see artists perform live, and often connect with other fans. Concerts can cover a wide range of genres—rock, pop, classical, jazz, and more—offering something for every musical taste and providing memorable, energetic, and emotional moments for attendees.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            // sm:h-72 md:h-96 lg:w-full lg:h-full
            src={procom}
            alt=""
        />
    </div>
</div>

    )
}
