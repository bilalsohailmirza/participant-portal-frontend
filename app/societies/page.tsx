"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturedMembersCarousel } from "./sections/FeaturedMembers";
const SocietiesPage = () =>{
    return (
        <>
        <div className="flex justify-between px-5 py-2">
        <div className="py-1 text-xl font-bold">
          Campus Connect
        </div>
        <Navbar />
        </div>

        <div className="text-4xl font-bold flex justify-center my-4">
            <h2>Featured Members</h2>
        </div>
        <FeaturedMembersCarousel />
        <Footer />
        </>
      )}
  
  export default SocietiesPage;