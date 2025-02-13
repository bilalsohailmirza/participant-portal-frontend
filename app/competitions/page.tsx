"use client"
import React from 'react'
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CompetitionHeroSection } from './sections/HeroSection';
import { AllCompetitionsDisplaySection } from './sections/AllCompetitionsDisplaySection';
import { usePathname } from 'next/navigation';
const CompetitionsPage = () => {

  const competitionId = usePathname().slice(13)
  return (
    <>
        
    <Navbar />

    <CompetitionHeroSection id={competitionId} />
    <AllCompetitionsDisplaySection id={competitionId} />

    <Footer />
    </>
  )
}

export default CompetitionsPage