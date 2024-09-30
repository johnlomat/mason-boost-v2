import React from 'react'
import Link from 'next/link'
import HeroSection from '@/components/ui/hero-section'
import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import HeadingBlock from '@/components/HeadingBlock'

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

        <section className="relative bg-[#041A28] py-16 xl:py-[8rem]">
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
            </div>
            <div className="text-center">
              <Button asChild variant="outline-secondary">
                <Link href="#">Start your project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
