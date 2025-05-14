import ChatbotInput from "@/components/ChatbotInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import axios from "axios";
import {
  // BriefcaseIcon,
  // FlowerIcon,
  // HeartIcon,
  // LightbulbIcon,
  // MountainSnow,
  SearchIcon,
  // SettingsIcon,
} from "lucide-react";
// import { useEffect, useState } from "react";

export interface ISociety  {
  id: string,
  name: string,
  description: string,
  about: string,
  logo: string,
  cover: string
  
}

export function EventHeroSection() {


    return (
      <>
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="container py-24 lg:py-32 flex justify-center">
            <div className="text-center max-w-5xl">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Events Organized by Student Societies at NUCES Karachi
              </h1>
              <p className="mt-3 text-xl text-center text-muted-foreground">
                
              </p>
              <ChatbotInput />
              
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
    );
  }
