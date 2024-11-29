"use client"
import { Navbar } from "../../components/Navbar";
import { HomeCarousel } from "./sections/Carousel";
import FeaturedSocieties from "./sections/FeaturedSocieties";
import FeaturedEvents from "./sections/FeaturedEvents";
import FAQ from "./sections/FAQ";
import Footer from "../../components/Footer";
const HomePage= () => {

return (
  <>

  <Navbar />
  <HomeCarousel />
  <FeaturedSocieties />
  <FeaturedEvents />
  <FAQ />
  <Footer />
  </>
)}

export default HomePage;