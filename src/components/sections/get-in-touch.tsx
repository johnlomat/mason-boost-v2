import React from 'react'
import Link from 'next/link'
import HeadingBlock from '@/components/ui/heading-block'
import { Button } from '@/components/ui/button'

const GetInTouchSection = () => {
  return (
    <React.Fragment>
      <section className="relative bg-black py-16 xl:py-[7rem]">
        <div className="container mb-6">
          <div className="flex flex-col justify-between gap-y-6 md:flex-row">
            <HeadingBlock heading="Get in touch" headingColor="white" />
            <div>
              <Button asChild variant="outline-secondary">
                <Link href="/contact-us">Start your project</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <div className="header-5 text-white">
                  <h3>For Clients</h3>
                </div>
                <div className="text-gray">
                  <p>
                    Have a project in mind? Curious if light art is something for you? We are glad
                    to discuss opportunities with you!
                  </p>
                </div>
              </div>
              <div className="col-span-2 mr-0 flex flex-col items-start md:col-span-1 md:items-end lg:mr-16">
                <div className="header-5 text-white">
                  <h4>Contact David</h4>
                </div>
                <div className="text-gray">
                  <Link href="mailto:david@masonboost.com" className="underline">
                    david@masonboost.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <div className="header-5 text-white">
                  <h3>For Talents</h3>
                </div>
                <div className="text-gray">
                  <p>
                    We are curious to hear about you, see your work and get to know about your
                    artistic ideas and vision. We are always open for new collaborations!
                  </p>
                </div>
              </div>
              <div className="col-span-2 mr-0 flex flex-col items-start md:col-span-1 md:items-end lg:mr-16">
                <div className="header-5 text-white">
                  <h4>Contact David</h4>
                </div>
                <div className="text-gray">
                  <Link href="mailto:david@masonboost.com" className="underline">
                    david@masonboost.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default GetInTouchSection
