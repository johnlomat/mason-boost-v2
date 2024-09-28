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
import TextRevealByWord from '@/components/ui/text-reveal'
import ImageWithText from '@/components/ImageWithText'
import Marquee from '@/components/ui/marquee'

export default function Home() {
  return (
    <main>
      <section className="relative flex flex-col justify-center bg-[url('/_next/image?url=%2Fimages%2Fhero-section-background-1.png&w=1200&q=100')] bg-cover bg-center bg-no-repeat pt-[12rem]">
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
          <div className="rounded-0 absolute bottom-0 h-[60px] w-full bg-white md:rounded-t-[2.5rem]"></div>
        </div>
      </section>

      <section className="relative -mt-[2px] bg-white py-16 xl:py-[8.5rem]">
        <div className="container">
          <div className="grid grid-cols-2 gap-y-10 md:gap-x-14">
            <div className="col-span-2 flex items-center md:col-span-1">
              <HeadingBlock heading="Mason BOOST LTD" subheading="Who we are" headingSize="md">
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
            <div className="col-span-2 md:col-span-1">
              <Image src="/images/about-us-image.png" alt="About us" width={630} height={460} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-16 xl:py-[7rem]">
        <div className="container space-y-12">
          <div className="grid grid-cols-2">
            <div className="col-span-2 lg:col-span-1">
              <HeadingBlock
                heading="Why choose Mason Boost for your website"
                subheading="Why choose us"
                headingColor="white"
                subheadingColor="white"
                headingSize="sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <ImageWithText
                heading="Modern, Clean Design"
                imageSrc="/images/Modern-Clean-Design-image.png"
              />
            </div>
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <ImageWithText
                heading="Mobile Friendly"
                imageSrc="/images/Mobile-Friendly-image.png"
              />
            </div>
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <ImageWithText heading="SEO Optimized" imageSrc="/images/SEO-Optimized-image.png" />
            </div>
            <div className="col-span-4 md:col-span-2 xl:col-span-1">
              <ImageWithText
                heading="Tailored to Your Business"
                imageSrc="/images/Tailored-to-Your-Business-image.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black bg-[url('/images/noisy-gradients.svg')] bg-cover bg-center bg-no-repeat py-16 xl:py-[7.5rem]">
        <div className="container">
          <div className="space-y-10">
            <HeadingBlock heading="Our Services" headingColor="white" />
            <Card className="grid grid-cols-2 gap-x-0 gap-y-12 rounded-[2rem] lg:gap-x-[6rem] lg:gap-y-0">
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
            <Card className="grid grid-cols-2 gap-x-0 gap-y-12 rounded-[2rem] lg:gap-x-[6rem] lg:gap-y-0">
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
                  <br />
                  <br />
                  <span className="text-white">
                    <strong>
                      Let us help you drive more traffic to your website, improve search rankings,
                      and grow your business online.
                    </strong>
                  </span>
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

      <section className="relative bg-white">
        <div className="container">
          <div className="header-2 text-center uppercase text-black">
            <TextRevealByWord
              text="Our websites are more than just visually stunning they’re built to perform."
              center={true}
            />
          </div>
        </div>
      </section>

      <section className="relative bg-black py-16">
        <div className="container mb-6">
          <HeadingBlock
            heading="How it works"
            subheading="Our process"
            headingColor="white"
            subheadingColor="white"
            className="text-left md:text-right"
          />
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-white">
                  <span>01</span>
                </div>
                <div className="header-3 uppercase text-white">
                  <h3>Consultation</h3>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-gray">
                  <p>
                    We start by listening to your needs and understanding your business. Whether
                    you&apos;re looking for a redesign or a new website, we’ll tailor the solution
                    to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-white">
                  <span>02</span>
                </div>
                <div className="header-3 uppercase text-white">
                  <h3>Design & Develop</h3>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-gray">
                  <p>
                    Our team creates a unique, modern design based on your vision and goals. We
                    ensure your website is responsive and optimized for SEO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray py-6">
          <div className="container">
            <div className="grid grid-cols-2 gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-white">
                  <span>03</span>
                </div>
                <div className="header-3 uppercase text-white">
                  <h3>Launch & Review</h3>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-gray">
                  <p>
                    We launch your new website and provide ongoing support. All we ask is a
                    Trustpilot review once your website goes live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  )
}
