"use client";
import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import RegistrationsHeader from "./components/RegistrationsHeader";
import { Separator } from "@/components/ui/separator";
import ProfileSection from "./components/ProfileSection";
import RegistrationsSection from "./components/RegistrationsSection";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const [profilePage, setProfilePage] = useState(true);
  const [registrations, setRegistrations] = useState(false);
  const authToken = Cookies.get("authToken");

  const handleProfile = () => {
    setRegistrations(false);
    setProfilePage(true);
  };
  const handleRegistrations = () => {
    setProfilePage(false);
    setRegistrations(true);
  };
  return (
    <>
      <Navbar />
      {profilePage ? <ProfileHeader /> : <></>}
      {registrations ? <RegistrationsHeader /> : <></>}
      <Separator />
      <div className="min-h-[80vh] flex">
        <aside className="w-[15%] p-2 border-2 ml-[2px]">
          <div className="flex flex-col gap-2">
            <Button
              className="text-md"
              variant={`${profilePage ? "secondary" : "ghost"}`}
              onClick={handleProfile}
            >
              Profile
            </Button>
            <Button
              className="text-md"
              variant={`${registrations ? "secondary" : "ghost"}`}
              onClick={handleRegistrations}
            >
              My Registrations
            </Button>
          </div>
        </aside>

        {profilePage ? <ProfileSection token={authToken} /> : <></>}
        {registrations ? <RegistrationsSection token={authToken} /> : <></>}
        {/* </main> */}
      </div>
    </>
  );
};

export default ProfilePage;
