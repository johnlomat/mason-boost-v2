import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import HeadingBlock from '@/components/ui/heading-block'
import { Button } from '@/components/ui/button'
import OurPortfolioSection from '@/components/sections/our-portfolio'
import GetInTouchSection from '@/components/sections/get-in-touch'
import Blurb from '@/components/ui/blurb'
import HeroSection from '@/components/ui/hero-section'

export const metadata: Metadata = {
  title: 'About Us | Mason Boost',
}

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection
        heading="Your Partner in Achieving Digital Excellence"
        backgroundImage="bg-[url('/_next/image?url=%2Fimages%2Fhero-section-background-2.png&w=1200&q=100')]"
      />

      <section className="relative bg-black py-16">
        <div className="container mb-6">
          <HeadingBlock
            heading="About us"
            headingColor="white"
            className="text-left md:text-right"
          />
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-12 gap-x-0 gap-y-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <div className="header-3 uppercase text-white">
                  <h3>About mason boost ltd</h3>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="subheading space-y-4 text-gray">
                  <p>
                    Founded in 2024, we are a modern web design agency based on City Road, London,
                    specializing in helping masonry businesses build their online presence. Our
                    mission is to deliver engaging, user-friendly websites that not only look great
                    but also drive results for masonry businesses.
                  </p>
                  <p>
                    We understand the unique needs of the masonry industry, and we design
                    customized, responsive websites that showcase your craftsmanship and services
                    effectively. Whether you’re a masonry business looking to establish your online
                    presence or you want to modernize your current website, we offer tailored
                    solutions that blend cutting-edge design with powerful functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-12 gap-x-0 gap-y-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <div className="header-3 uppercase text-white">
                  <h3>Mission</h3>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="subheading text-gray">
                  <p>
                    Our mission is to empower businesses with tailored digital solutions that
                    enhance their online presence, drive measurable results, and foster growth. By
                    offering innovative web design, cutting-edge SEO strategies, and seamless
                    e-commerce experiences, we aim to help our clients succeed in the competitive
                    digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-12 gap-x-0 gap-y-6 md:gap-x-10">
              <div className="col-span-12 md:col-span-5">
                <div className="header-3 uppercase text-white">
                  <h3>Vision</h3>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="subheading text-gray">
                  <p>
                    Our vision is to become a leading provider of digital transformation services,
                    recognized for our creativity, technical expertise, and commitment to client
                    success. We strive to be at the forefront of industry trends, continuously
                    evolving to deliver top-tier solutions that shape the future of online business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 xl:py-[4.3rem]">
        <div className="container">
          <div className="mx-auto max-w-[65rem]">
            <HeadingBlock
              heading="At the heart of our approach is a commitment to delivering exceptional service"
              className="text-center"
            >
              <div className="body-text mx-auto max-w-[43.75rem] text-center">
                <p>
                  We work closely with our clients to understand their goals and deliver websites
                  optimized for performance, user experience, and SEO—ensuring your masonry business
                  stands out in a competitive market.
                </p>
              </div>
              <div className="text-center">
                <Button asChild>
                  <Link href="/contact-us">Get a free consultation today</Link>
                </Button>
              </div>
            </HeadingBlock>
          </div>
        </div>
      </section>

      <OurPortfolioSection sectionBackgroundColor="black" />

      <section className="relative bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-x-[4.5rem]">
            <div className="col-span-12 space-y-10 lg:col-span-4">
              <HeadingBlock
                heading="Registered Office Address"
                subheading="Who we are"
                headingSize="sm"
                className="text-center lg:text-left"
              />
              <Blurb
                description="Mason Boost Ltd. 128 City Road, London, United Kingdom, EC1V 2NX"
                useImage={true}
                imageSrc="/images/map-01.svg"
                imageWidth={45}
                imageHeight={45}
                imageAlt="Map icon"
              />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Image
                src="/images/Figmap.png"
                alt="Mason Boost map"
                width={883}
                height={600}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <GetInTouchSection />
    </main>
  )
}
