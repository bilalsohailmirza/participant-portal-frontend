import { SignUpForm } from "@/components/signup-form"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Page() {
  return (
    <>
    <Navbar />
    <div className="flex h-screen w-full items-center justify-center px-4">
      <SignUpForm />
    </div>
    <Footer />
    </>
  )
}