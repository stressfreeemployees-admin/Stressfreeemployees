import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#F8F9FA]">
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-[#3AAFA9]">Stress Free Employees</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Services
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Benefits
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Our Team
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Success Stories
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-[#3AAFA9] text-white hover:bg-[#2B7A78]">
            Book a Consultation
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#3AAFA9]/20 to-[#F8F9FA] py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#2B7A78]">
                    <span className="block">Stress-Free Teams.</span>
                    <span className="block">Productive Workplaces.</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Corporate wellness programs that bring calm, clarity, and resilience to your team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#3AAFA9] text-white hover:bg-[#2B7A78]">
                    Start Your Wellness Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/access-therapy.png"
                  width={500}
                  height={300}
                  alt="Access Bars therapy session"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-[#E9ECEF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2B7A78]">
                  What We Offer
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive wellness solutions tailored to your organization's needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-3 md:gap-12 lg:max-w-5xl mt-12">
              <Card className="flex flex-col items-center justify-center space-y-4 p-6 text-center shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-white">
                <div className="bg-[#3AAFA9]/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#3AAFA9]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2B7A78]">In-person Workshops</h3>
                <p className="text-gray-600">
                  Interactive sessions designed to reduce stress and improve team dynamics in your workplace.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center space-y-4 p-6 text-center shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-white">
                <div className="bg-[#3AAFA9]/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#3AAFA9]"
                  >
                    <path d="M15 10v5" />
                    <path d="M9 10v5" />
                    <path d="M12 10v5" />
                    <rect width="16" height="6" x="4" y="4" rx="2" />
                    <path d="M12 10v5" />
                    <path d="M4 10h16" />
                    <path d="M2 20h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2B7A78]">Online Training & Webinars</h3>
                <p className="text-gray-600">
                  Flexible digital solutions that fit into your team's schedule, accessible from anywhere.
                </p>
              </Card>
              <Card className="flex flex-col items-center justify-center space-y-4 p-6 text-center shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-white">
                <div className="bg-[#3AAFA9]/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#3AAFA9]"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2B7A78]">1-on-1 Coaching & Access Bars Therapy</h3>
                <p className="text-gray-600">
                  Personalized support for executives and team members facing specific challenges.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2B7A78]">Benefits</h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the positive impact our programs have on your organization
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-[#3AAFA9]" />
                <div>
                  <h3 className="text-lg font-bold text-[#2B7A78]">Reduced stress and burnout</h3>
                  <p className="text-gray-600">Help your team manage pressure and prevent exhaustion.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-[#3AAFA9]" />
                <div>
                  <h3 className="text-lg font-bold text-[#2B7A78]">Improved team communication</h3>
                  <p className="text-gray-600">Foster better understanding and collaboration among team members.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-[#3AAFA9]" />
                <div>
                  <h3 className="text-lg font-bold text-[#2B7A78]">Enhanced leadership clarity</h3>
                  <p className="text-gray-600">Help leaders make better decisions with a clear, calm mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-[#3AAFA9]" />
                <div>
                  <h3 className="text-lg font-bold text-[#2B7A78]">Better focus and productivity</h3>
                  <p className="text-gray-600">Improve concentration and output through mindfulness techniques.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 h-6 w-6 text-[#3AAFA9]" />
                <div>
                  <h3 className="text-lg font-bold text-[#2B7A78]">Greater emotional well-being</h3>
                  <p className="text-gray-600">Support the overall mental health of your employees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-[#E9ECEF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2B7A78]">
                  Meet the Facilitators
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our experienced wellness professionals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <Card className="flex flex-col items-center space-y-4 p-6 text-center shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-white">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#3AAFA9]/30">
                  <Image
                    src="/images/deepa-ramaraj.png"
                    width={160}
                    height={160}
                    alt="Deepa Ramaraj"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#2B7A78]">Deepa Ramaraj</h3>
                  <p className="text-[#3AAFA9] font-medium">Life Transformation Coach</p>
                  <p className="text-gray-600">
                    Over 12 years facilitating Access Bars®, empowering leadership and HR teams to create joyful,
                    effective workplaces.
                  </p>
                </div>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6 text-center shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-white">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#3AAFA9]/30">
                  <Image
                    src="/images/vivek-agarwal.png"
                    width={160}
                    height={160}
                    alt="Vivek Agrawal"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#2B7A78]">Vivek Agrawal</h3>
                  <p className="text-[#3AAFA9] font-medium">Head – Sales & Engagement</p>
                  <p className="text-gray-600">
                    Combines decades of corporate experience with Access Consciousness tools to engage teams and reduce
                    stress from the top down.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2B7A78]">
                  Success Stories
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what our clients have to say about our programs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <Card className="flex flex-col space-y-4 p-6 shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-[#E9ECEF]">
                <div className="space-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#3AAFA9]"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="text-lg text-gray-600 italic">
                    "Our employees felt refreshed and inspired after just one workshop!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium text-[#2B7A78]">HR Director, Tech Company</div>
                </div>
              </Card>
              <Card className="flex flex-col space-y-4 p-6 shadow-sm hover:shadow-md transition-shadow rounded-xl border-0 bg-[#E9ECEF]">
                <div className="space-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#3AAFA9]"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="text-lg text-gray-600 italic">
                    "We've seen a measurable drop in stress-related absenteeism."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium text-[#2B7A78]">Team Lead, Financial Services</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#3AAFA9]/10 rounded-3xl mx-4 md:mx-12 my-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2B7A78]">
                  Ready to reduce stress and energize your team?
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step toward a more productive, harmonious workplace
                </p>
              </div>
              <Button className="bg-[#3AAFA9] text-white hover:bg-[#2B7A78] px-8 py-6 text-lg">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2B7A78]">
                  Contact Us
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch to learn more about our programs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-[#3AAFA9]" />
                  <div>
                    <h3 className="text-lg font-bold text-[#2B7A78]">Phone</h3>
                    <p className="text-gray-600">+919916263165</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-[#3AAFA9]" />
                  <div>
                    <h3 className="text-lg font-bold text-[#2B7A78]">Email</h3>
                    <p className="text-gray-600">deepa.ramaraj@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#3AAFA9]" />
                  <div>
                    <h3 className="text-lg font-bold text-[#2B7A78]">Address</h3>
                    <p className="text-gray-600">
                      Villa 61, Adarsh Palm Retreat,
                      <br />
                      Bellandur, Bangalore 560103
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="border-[#3AAFA9]/30 focus-visible:ring-[#3AAFA9]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="border-[#3AAFA9]/30 focus-visible:ring-[#3AAFA9]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px] border-[#3AAFA9]/30 focus-visible:ring-[#3AAFA9]"
                    />
                  </div>
                </div>
                <Button className="w-full bg-[#3AAFA9] text-white hover:bg-[#2B7A78]">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-[#E9ECEF] py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-6">
          <p className="text-sm text-gray-600">© 2023 Stress Free Employees. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-[#3AAFA9] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
