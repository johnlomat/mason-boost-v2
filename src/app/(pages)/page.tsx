import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NumberTicker from '@/components/ui/number-ticker'
import HeadingBlock from '@/components/HeadingBlock'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardTags,
  CardTitle,
  CardHeader,
} from '@/components/ui/card'

export default function Home() {
  return (
    <main>
      <section className="relative flex flex-col justify-center bg-[url('/images/hero-section-background-1.png')] bg-cover bg-center bg-no-repeat pt-[12rem]">
        <div className="container mb-12 xl:mb-0">
          <div className="flex flex-col justify-center space-y-8">
            <div className="header-1 text-center uppercase text-white">
              <h1>Transform Your Online Presence with a Stunning, Modern Website</h1>
            </div>
            <div className="text-center">
              <Button asChild variant="secondary">
                <Link href="#">Get Your Consultation Today</Link>
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-y-10 xl:grid-cols-5 xl:gap-y-0">
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={5} />
                  k+
                </span>
                <span>Satisfied Customers</span>
              </div>
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={15} />
                </span>
                <span>Years Experience</span>
              </div>
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={28} />
                </span>
                <span>Experienced Member</span>
              </div>
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={1500} />+
                </span>
                <span>Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-0 w-full pb-[58px] xl:-mt-10">
          <Image
            className="relative bottom-0 left-1/2 z-10 -translate-x-1/2"
            src="/images/shape-divider-1.png"
            alt="Shape divider"
            width={360}
            height={116}
          />
          <Image
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            src="/images/Group-8.png"
            alt="Shape"
            width={151}
            height={151}
          />
          <div className="absolute left-1/2 top-1/2 z-30 h-[130px] w-[133px] -translate-x-1/2 -translate-y-1/2">
            <Image
              className="animate-spin-slow"
              src="/images/Frame-453.png"
              alt="Shape"
              width={133}
              height={130}
            />
          </div>
          <Image
            className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
            src="/images/Mouse.png"
            alt="Mouse"
            width={31}
            height={41}
          />
          <div className="absolute bottom-0 h-[60px] w-full bg-white"></div>
        </div>
      </section>

      <section className="relative -mt-[2px] bg-white py-[8.5rem]">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-14">
            <div className="col-span-1 flex items-center">
              <HeadingBlock heading="Mason BOOST LTD" subheading="Who we are">
                <div className="body-text">
                  <p>
                    We’re a web design agency dedicated to building beautiful, user-optimized
                    websites that help businesses thrive online. Whether you&apos;re a small
                    business or an established brand, we’ll create a website that reflects your
                    vision and drives results.
                  </p>
                </div>
                <Button asChild>
                  <Link href="#">Find out more</Link>
                </Button>
              </HeadingBlock>
            </div>
            <div className="col-span-1">
              <Image src="/images/about-us-image.png" alt="About us" width={630} height={460} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black bg-[url('/images/noisy-gradients.svg')] bg-cover bg-center bg-no-repeat py-[7.5rem]">
        <div className="container">
          <div className="space-y-10">
            <HeadingBlock heading="Our Services" headingColor="white" />
            <Card className="grid grid-cols-2 gap-x-0 gap-y-8 rounded-[2rem] lg:gap-x-[6rem] lg:gap-y-0">
              <CardContent className="col-span-2 flex flex-col justify-center lg:col-span-1">
                <CardHeader>
                  <CardTitle>Web Design</CardTitle>
                  <CardTags tags={['Creative web design', 'FIGMA']} />
                </CardHeader>
                <CardDescription>
                  Looking for a modern, responsive website? We are offering a limited number of free
                  web designs for businesses looking to transform their online presence. In exchange
                  for a Trustpilot review, we’ll design and develop a fully customized website that
                  helps you achieve your business goals.
                </CardDescription>
                <div>
                  <Button asChild className="hover:border-white hover:bg-white">
                    <Link href="#">Find out more</Link>
                  </Button>
                </div>
              </CardContent>
              <div className="col-span-2 lg:col-span-1">
                <Image
                  src="/images/web-design-image.png"
                  alt="Web Design"
                  width={551}
                  height={581}
                  className="w-full"
                />
              </div>
            </Card>
            <Card className="grid grid-cols-2 gap-x-0 gap-y-8 rounded-[2rem] lg:gap-x-[6rem] lg:gap-y-0">
              <CardContent className="col-span-2 flex flex-col justify-center lg:col-span-1">
                <CardHeader>
                  <CardTitle>SEO</CardTitle>
                  <CardTags
                    tags={[
                      'On-Page Optimization',
                      'Keyword Research',
                      'Backlink Strategies',
                      'Technical SEO',
                    ]}
                  />
                </CardHeader>
                <CardDescription>
                  Our SEO experts use a strategic approach to help your business rank higher in
                  search results and attract more traffic. With a focus on long-term success, we
                  offer a range of SEO services.
                </CardDescription>
                <div>
                  <Button asChild className="hover:border-white hover:bg-white">
                    <Link href="#">Find out more</Link>
                  </Button>
                </div>
              </CardContent>
              <div className="col-span-2 lg:col-span-1">
                <Image
                  src="/images/seo-image.png"
                  alt="SEO"
                  width={551}
                  height={581}
                  className="w-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-[11rem] uppercase">
        <div className="container">
          <div className="header-2 text-center text-black">
            <HeadingBlock heading="Our websites are more than just visually stunning—they’re built to perform." />
          </div>
        </div>
      </section>
    </main>
  )
}
