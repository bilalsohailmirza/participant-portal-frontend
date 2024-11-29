'use client';
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import SidebarNav from "./components/sidebar-nav";
import ContentSection from "./components/sidebar-section";

export default function Settings() {
  return (
    <>
      <Navbar />
      <div className="space-y-0.5">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          My Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your account settings and your personal data.
        </p>
      </div>
      <Separator className="my-4 lg:my-6" />
      <div className="flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="top-0 lg:sticky lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        {/* <div className='flex w-full p-1 pr-4 md:overflow-y-hidden'>
            <Outlet />
          </div> */}
      </div>

      <ContentSection
        title="Profile"
        desc="This is how others will see you on the site."
      >
        {/* <ProfileForm /> */}
      </ContentSection>
    </>
  );
}

const sidebarNavItems = [
  {
    title: "Profile",
    // icon: <IconUser size={18}
    href: "/settings",
  },
  {
    title: "Account",
    // icon: <IconTool size={18} />,
    href: "/settings/account",
  },
  {
    title: "Appearance",
    // icon: <IconPalette size={18} />,
    href: "/settings/appearance",
  },
  {
    title: "Notifications",
    // icon: <IconNotification size={18} />,
    href: "/settings/notifications",
  },
  {
    title: "Display",
    // icon: <IconBrowserCheck size={18} />,
    href: "/settings/display",
  },
  {
    title: "Error Example",
    // icon: <IconExclamationCircle size={18} />,
    href: "/settings/error-example",
  },
];
