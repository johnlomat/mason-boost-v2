import React from 'react'
import NewsLetterForm from '@/components/forms/NewsLetter'
import Image from 'next/image'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="relative bg-white py-0 md:py-16">
        <div className="md:container">
          <div className="space-y-6 bg-brown px-0 py-16 md:p-10 lg:p-16">
            <div className="header-2 container uppercase text-white md:max-w-full md:p-0">
              <h2>Newsletter</h2>
            </div>
            <NewsLetterForm className="container md:max-w-full md:p-0" />
          </div>
          <div className="flex flex-col justify-between gap-y-6 pb-8 pt-16 md:mb-2 md:mt-8 md:flex-row md:py-0">
            <nav className="uppercase">
              <ul className="flex flex-col space-x-0 space-y-4 text-center md:flex-row md:space-x-5 md:space-y-0 xl:text-left">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/work">Work</Link>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center gap-4 md:justify-end">
              <Link
                href="https://www.instagram.com/masonboost/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="text-[1.5rem] text-clay" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61561506080680"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook className="text-[1.5rem] text-clay" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/mason-boost-ltd"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-[1.5rem] text-clay" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-clay pb-16 pt-8 md:pb-0">
          <div className="container">
            <div className="grid grid-cols-2 gap-y-6">
              <div className="col-span-2 flex flex-col justify-start gap-x-8 gap-y-6 md:col-span-1 xl:flex-row">
                <div className="mx-auto max-w-[300px] md:m-0">
                  <Link href="/">
                    <Image
                      src="/images/mason-boost-logo.svg"
                      alt="Mason Boost Logo"
                      width={300}
                      height={54}
                    />
                  </Link>
                </div>
                <div className="body-text text-center text-[0.75rem] uppercase md:text-left">
                  <span>
                    We blend creativity with technology to deliver digital solutions tailored to
                    your needs.
                  </span>
                </div>
              </div>
              <div className="body-text col-span-2 text-center text-[0.75rem] md:col-span-1 md:text-right">
                Email:{' '}
                <Link href="mailto:david@masonboost.com" className="underline">
                  David@masonboost.com
                </Link>{' '}
                <br />
                Maria:{' '}
                <Link href="tel:+15877425355" className="underline">
                  (587) 742-5355
                </Link>{' '}
                <br />
                M.B.L.T.D:{' '}
                <Link href="tel:+15874094416" className="underline">
                  (587) 409-4416
                </Link>{' '}
                <br />
                Office Hours: Mon-Fri, 9 AM - 5PM <br />
                Copyright © 2024 Mason Boost. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
