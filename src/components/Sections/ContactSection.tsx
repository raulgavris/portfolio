import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button1 from '@/components/Button1'

const ContactSection = ({ containerRef, contactRef }: ContactSectionProps) => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
    setName('')
    setEmail('')
    setMessage('')
  }

  useEffect(() => {
    const targetElement = document.getElementById('contact')
    if (targetElement) {
      if (router.route.includes(targetElement.id)) {
        containerRef?.current.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'auto',
        })
      }
    }
  }, [containerRef, router.route])

  return (
    <div
      id="contact"
      className="h-screen w-screen"
      ref={contactRef}
      data-path="/contact"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
        <div className="py-6 md:px-6 md:py-0">
          <h1 className="text-4xl font-bold">Let's connect!</h1>
          <p className="pb-4 pt-2">
            Interested in my software engineering work? Let's get in touch! Fill
            out the form below or reach out through my contact information.
            Looking forward to hearing from you!
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-5 w-5 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+40758585407</span>
            </p>
            <p className="group flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-5 w-5 group-hover:fill-rgcolor3 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a
                href="mailto:rg.raulgavris@gmail.com"
                className="mousehover transition-all duration-150 group-hover:translate-x-2 group-hover:text-rgcolor3"
              >
                rg.raulgavris@gmail.com
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="ng-untouched ng-pristine ng-valid flex flex-col space-y-8 py-6 md:px-6 md:py-0"
        >
          <div className="mousehover relative">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="peer relative w-full rounded-md p-3 placeholder-transparent drop-shadow focus:outline-none focus:ring focus:ring-rgcolor3 focus:ring-opacity-75 dark:bg-rgcolor1"
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute -top-7 left-2 text-sm opacity-100 transition-all duration-500 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-placeholder-shown:opacity-50"
            >
              Full name
            </label>
          </div>
          <div className="mousehover relative">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="peer relative w-full rounded-md p-3 placeholder-transparent drop-shadow focus:outline-none focus:ring focus:ring-rgcolor3 focus:ring-opacity-75 dark:bg-rgcolor1"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute -top-7 left-2 text-sm opacity-100 transition-all duration-500 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-placeholder-shown:opacity-50"
            >
              Email
            </label>
          </div>
          <div className="mousehover relative">
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              placeholder="Message"
              rows={8}
              className="peer block w-full resize-none rounded-md p-3 placeholder-transparent drop-shadow focus:outline-none focus:ring focus:ring-rgcolor3 focus:ring-opacity-75 dark:bg-rgcolor1"
            ></textarea>
            <label
              htmlFor="email"
              className="pointer-events-none absolute -top-7 left-2 text-sm opacity-100 transition-all duration-500 peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-placeholder-shown:opacity-50"
            >
              Message
            </label>
          </div>
          <div className="mousehover">
            <Button1>SUBMIT</Button1>
          </div>
        </form>
      </div>
    </div>
  )
}

ContactSection.displayName = 'contact'

export default ContactSection
