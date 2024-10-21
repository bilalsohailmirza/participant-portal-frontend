"use client"
import { Navbar } from "./Navbar";
import { HomeCarousel } from "./sections/Carousel";
import FeaturedSocieties from "./sections/FeaturedSocieties";
import FeaturedEvents from "./sections/FeaturedEvents";
import FAQ from "./sections/FAQ";
import Footer from "./Footer";
const HomePage= () => {

return (
  <>
  <div className="flex justify-between px-5 py-2">
  <div className="py-1 text-xl font-bold">
    Campus Connect
  </div>
  <Navbar />
  </div>
  <div className="">
  <HomeCarousel />
  </div>
  
  <FeaturedSocieties />
  <FeaturedEvents />
  <FAQ />
  <Footer />
  </>
)}

export default HomePage;