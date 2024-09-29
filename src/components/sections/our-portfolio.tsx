import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeadingBlock from '@/components/HeadingBlock'
import { Button } from '@/components/ui/button'
import Marquee from '@/components/ui/marquee'

const OurPortfolioSection = () => {
  return (
    <React.Fragment>
      <section className="relative bg-brown py-16 xl:py-[7.5rem]">
        <div className="md:container">
          <div className="grid grid-cols-12 gap-x-0 gap-y-8 xl:gap-x-[4rem]">
            <div className="col-span-12 xl:col-span-8">
              <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-background">
                <Marquee pauseOnHover className="[--duration:20s]">
                  <Image
                    src="/images/portfolio-image-1.png"
                    alt="Portfolio"
                    width={300}
                    height={400}
                  />
                  <Image
                    src="/images/portfolio-image-2.png"
                    alt="Portfolio"
                    width={300}
                    height={400}
                  />
                  <Image
                    src="/images/portfolio-image-3.png"
                    alt="Portfolio"
                    width={300}
                    height={400}
                  />
                  <Image
                    src="/images/portfolio-image-4.png"
                    alt="Portfolio"
                    width={300}
                    height={400}
                  />
                  <Image
                    src="/images/portfolio-image-5.png"
                    alt="Portfolio"
                    width={300}
                    height={400}
                  />
                  <Image
                    src="/images/portfolio-image-6.png"
                    alt="Portfolio"
                    width={300}
                    height={400}
                  />
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 -left-1 w-[4rem] bg-gradient-to-r from-brown"></div>
                <div className="pointer-events-none absolute inset-y-0 -right-1 w-[4rem] bg-gradient-to-l from-brown"></div>
              </div>
            </div>
            <div className="container col-span-12 md:max-w-full md:px-0 xl:col-span-4">
              <HeadingBlock
                heading="Our Work Speaks for Itself"
                subheading="Portfolio"
                headingColor="white"
                subheadingColor="white"
                headingSize="md"
              >
                <div className="text-white">
                  <p>
                    Explore our portfolio to see how we’ve helped businesses like yours achieve
                    their online goals. Each project is a testament to our commitment to quality and
                    creativity.
                  </p>
                </div>
                <Button asChild variant="secondary">
                  <Link href="#">Start your project</Link>
                </Button>
              </HeadingBlock>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default OurPortfolioSection