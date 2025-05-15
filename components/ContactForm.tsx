"use client"

import { useState, useRef, ChangeEvent, FormEvent } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_79a13r2'
    const templateId = 'template_3kvyqso'
    const publicKey = 'eXYdAOTOAnR7A51ws'

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company, 
      message: formData.message,
      reply_to: formData.email
    }, publicKey)
      .then(() => {
        setLoading(false)
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      })
      .catch((error) => {
        setLoading(false)
        console.error('Error sending email:', error)
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive"
        })
      })
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
            value={formData.name}
            onChange={handleChange}
            required
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Phone Number
          </label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            type="tel"
            className="border-[#3AAFA9]/30 focus-visible:ring-[#3AAFA9]"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Company Name
          </label>
          <Input
            id="company"
            placeholder="Enter your company name"
            className="border-[#3AAFA9]/30 focus-visible:ring-[#3AAFA9]"
            value={formData.company}
            onChange={handleChange}
            required
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
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-[#3AAFA9] text-white hover:bg-[#2B7A78]"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
} 