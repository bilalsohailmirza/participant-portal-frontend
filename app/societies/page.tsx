"use client"
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
const SocietiesPage = () =>{
    return (
        <>
        <div className="flex justify-between px-5 py-2">
        <div className="py-1 text-xl font-bold">
          Campus Connect
        </div>
        <Navbar />
        </div>
    
        <Footer />
        </>
      )}
  
  export default SocietiesPage;