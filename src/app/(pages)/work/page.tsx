import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/ui/hero-section'
import ProjectCard from '@/components/ui/project-card'
import { Button } from '@/components/ui/button'
import HeadingBlock from '@/components/ui/heading-block'
import GetInTouchSection from '@/components/sections/get-in-touch'

export const metadata: Metadata = {
  title: 'Work | Mason Boost',
}

export default function WorkPage() {
  return (
    <React.Fragment>
      <main>
        <HeroSection
          heading="Our Projects"
          backgroundImage="bg-[url('/_next/image?url=%2Fimages%2Fhero-section-background-5.png&w=1200&q=100')]"
        />

        <section className="relative bg-black py-16 xl:py-[5.5rem]">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-[5.5rem] gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <HeadingBlock
                  heading="Crafting Digital Solutions That Drive Results"
                  headingColor="white"
                  headingSize="sm"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-gray">
                  <p>
                    Explore our portfolio of website designs, SEO success stories, and e-commerce
                    transformations that have helped businesses like yours thrive online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#041A28] bg-[url('/images/section-background-2.svg')] bg-cover bg-center bg-no-repeat py-16 xl:py-[8rem]">
          <div className="container">
            <div className="mb-10 grid grid-cols-2 gap-x-7 gap-y-7 md:gap-y-[4rem] xl:mb-[4.5rem]">
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-1-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-2-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-3-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-4-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-5-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-6-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-7-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-8-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-9-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-10-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-11-image.png" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <ProjectCard name="Project Name" date="2024" image="/images/project-12-image.png" />
              </div>
            </div>
            <div className="text-center">
              <Button asChild variant="outline-secondary">
                <Link href="/contact-us">Start your project</Link>
              </Button>
            </div>
          </div>
        </section>

        <GetInTouchSection />
      </main>
    </React.Fragment>
  )
}
