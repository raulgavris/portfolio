import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button1 from '@/components/Button1'
import { CopyRightSvg, EmailSvg, PhoneSvg } from '@/components/Svg'

const ContactSection = ({ containerRef, contactRef }: ContactSectionProps) => {
  const router = useRouter()

  const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })

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
        containerRef.current.scrollTo({
          top: targetElement.offsetTop + 100,
          behavior: 'auto',
        })
      }
    }
  }, [containerRef, router.route])

  return (
    <div
      id="contact"
      className="relative h-screen w-screen"
      ref={contactRef}
      data-path="/contact"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-row items-start justify-center text-lightGray">
        <div className="mt-52 flex flex-row items-start justify-center divide-x divide-lightGray px-8">
          <div className="flex w-1/2 flex-col items-start justify-start gap-2 px-6 py-0">
            <h1 className="font-raulmono text-4xl font-normal">
              Let's Connect!
            </h1>
            <p className="pb-4 pt-2 text-xl font-normal">
              Interested in my software engineering work? Let's get in touch!
              Fill out the form below or reach out through my contact
              information.
              <br />
              Looking forward to hearing from you!
            </p>
            <div className="flex flex-col gap-4">
              <p className="group flex w-52 items-center justify-start">
                <PhoneSvg className="mr-5 h-6 w-6 drop-shadow-basic group-hover:fill-teal" />
                <span className="mousehover font-raulmono text-xl transition-all duration-150 text-shadow-text group-hover:translate-x-2 group-hover:text-teal ">
                  +40758585407
                </span>
              </p>
              <p className="group flex items-center justify-center">
                <EmailSvg className="mr-5 mt-1 h-6 w-6 fill-lightGray drop-shadow-basic group-hover:fill-teal" />
                <a
                  href="mailto:rg.raulgavris@gmail.com"
                  className="mousehover font-raulmono text-xl transition-all duration-150 text-shadow-text group-hover:translate-x-2 group-hover:text-teal"
                >
                  rg.raulgavris@gmail.com
                </a>
              </p>
            </div>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="ng-untouched ng-pristine ng-valid flex w-1/2 flex-col gap-8 py-6 md:px-6 md:py-0"
          >
            <div className="mousehover relative">
              <input
                maxLength={50}
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className={`${
                  errors.name ? 'ring ring-red' : 'focus:ring focus:ring-teal'
                } peer relative w-full rounded-md p-3 placeholder-transparent drop-shadow-basic focus:outline-none focus:ring-opacity-75 dark:bg-darkGray`}
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute -top-7 left-2 text-sm opacity-100 transition-all duration-500 text-shadow-text peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:font-raulmono peer-placeholder-shown:text-lg peer-placeholder-shown:opacity-50"
              >
                Full name
              </label>
            </div>
            <div className="mousehover relative">
              <input
                maxLength={50}
                required
                pattern={emailRegex}
                value={email}
                onChange={(e) => {
                  const regex = new RegExp(emailRegex)
                  if (!regex.test(e.target.value)) {
                    setErrors({ ...errors, email: true })
                  } else {
                    setErrors({ ...errors, email: false })
                  }
                  setEmail(e.target.value)
                }}
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className={`${
                  errors.email ? 'ring ring-red' : 'focus:ring focus:ring-teal'
                } peer relative w-full rounded-md p-3 placeholder-transparent drop-shadow-basic focus:outline-none focus:ring-opacity-75 dark:bg-darkGray`}
              />
              {errors.email && (
                <span className="mt-2 text-sm text-red peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Please enter a valid email address
                </span>
              )}
              <label
                htmlFor="email"
                className="pointer-events-none absolute -top-7 left-2 text-sm opacity-100 transition-all duration-500 text-shadow-text peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:font-raulmono peer-placeholder-shown:text-lg peer-placeholder-shown:opacity-50"
              >
                Email
              </label>
            </div>
            <div className="mousehover relative">
              <textarea
                required
                maxLength={500}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                placeholder="Message"
                rows={8}
                className={`${
                  errors.message
                    ? 'ring ring-red'
                    : 'focus:ring focus:ring-teal'
                } peer block w-full resize-none rounded-md p-3 placeholder-transparent drop-shadow-basic focus:outline-none focus:ring-opacity-75 dark:bg-darkGray`}
              ></textarea>
              <label
                htmlFor="email"
                className="pointer-events-none absolute -top-7 left-2 text-sm opacity-100 transition-all duration-500 text-shadow-text peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:font-raulmono peer-placeholder-shown:text-lg peer-placeholder-shown:opacity-50"
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
      <div className="absolute bottom-[50px] flex w-full flex-row items-center justify-center gap-4 font-raulmono text-[14px] font-bold leading-[21px] text-lightGray drop-shadow-basic text-shadow-text">
        <span>Copyright</span>
        <CopyRightSvg className="fill-lightGray" />
        <span>2023 Raul Gavriș - Full Stack Engineer</span>
      </div>
    </div>
  )
}

ContactSection.displayName = 'contact'

export default ContactSection
