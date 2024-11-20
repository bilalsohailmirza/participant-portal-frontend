import Image from "next/image"
import procom from '@/assets/procom.jpg'

export function CompetitionSectionComponent(){
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
                        Speed Programming
                    </h2>

                    <p>
                    Speed programming, often known as competitive programming, is a fast-paced style of coding where developers aim to solve complex algorithmic and logical problems under time constraints. In speed programming, participants work to devise efficient, optimized solutions to a series of problems, focusing on logic, algorithms, and data structures. This practice enhances skills in problem-solving, quick-thinking, and code optimization, as solutions are judged not only on correctness but also on execution time and memory usage.                    </p>
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
