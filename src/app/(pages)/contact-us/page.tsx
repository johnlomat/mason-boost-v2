import React from 'react'
import HeroSection from '@/components/ui/hero-section'
import HeadingBlock from '@/components/HeadingBlock'
import ItemList from '@/components/ui/item-list'
import { ContactForm } from '@/components/forms/ContactForm'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function ContactUsPage() {
  return (
    <React.Fragment>
      <main>
        <HeroSection
          heading="Contact"
          backgroundImage="bg-[url('/_next/image?url=%2Fimages%2Fhero-section-background-3.png&w=1200&q=100')]"
        />

        <section className="relative bg-black py-16">
          <div className="container mb-6">
            <HeadingBlock heading="Let’s Start a Conversation" headingColor="white" />
          </div>
          <div className="border-t-[1px] border-gray py-6">
            <div className="container">
              <div className="grid grid-cols-2 gap-x-0 gap-y-10 md:gap-x-[3rem]">
                <div className="col-span-2 lg:col-span-1">
                  <div className="space-y-10 rounded-[1rem] bg-brown p-[2rem]">
                    <div className="header-4 text-center uppercase text-white">
                      <h3>Send us a message</h3>
                    </div>
                    <ContactForm />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col justify-center lg:col-span-1">
                  <div className="mb-12 space-y-2">
                    <div className="header-3 uppercase text-white">
                      <h3>How Can We Help You?</h3>
                    </div>
                    <div className="text-gray">
                      <p>
                        Fill out the form below, and we&apos;ll reach out to help you attract more
                        opportunities, gain new customers, and increase your revenue. Let Mason
                        Boost grow your contracting business today!
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-x-6 gap-y-12">
                    <div className="col-span-4 md:col-span-2">
                      <ItemList
                        heading="Phone"
                        headingColor="white"
                        description="(844) 489-1115"
                        descriptionColor="gray"
                        useImage={true}
                        imageSrc="/images/Phone-icon-brown.svg"
                        imageWidth={80}
                        imageHeight={80}
                        imageAlt="Phone"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-2">
                      <ItemList
                        heading="Email"
                        headingColor="white"
                        description="info@masonboost.com"
                        descriptionColor="gray"
                        useImage={true}
                        imageSrc="/images/Email-icon-brown.svg"
                        imageWidth={80}
                        imageHeight={80}
                        imageAlt="Email"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-4">
                      <ItemList
                        heading="Address"
                        headingColor="white"
                        description="128 City Road, London, United Kingdom"
                        descriptionColor="gray"
                        useImage={true}
                        imageSrc="/images/Address-icon-brown.svg"
                        imageWidth={80}
                        imageHeight={80}
                        imageAlt="Address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#041A28] bg-[url('/images/section-background-1.svg')] bg-cover bg-center bg-no-repeat py-16 xl:py-[6.5rem]">
          <div className="container">
            <div className="rounded-[1.5rem] bg-black px-10 py-[4rem]">
              <div className="space-y-16">
                <div className="mx-auto max-w-[700px]">
                  <HeadingBlock
                    heading="Are you ready to work with us?"
                    subheading="Connect with our social media"
                    headingColor="white"
                    subheadingColor="white"
                    className="text-center"
                    headingSize="sm"
                  />
                </div>
                <div className="flex justify-center gap-12 md:justify-center">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61561506080680"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-[2.5rem] text-[#E58D35] md:text-[4rem]" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/mason-boost-ltd"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-[2.5rem] text-[#E58D35] md:text-[4rem]" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/masonboost/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-[2.5rem] text-[#E58D35] md:text-[4rem]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
