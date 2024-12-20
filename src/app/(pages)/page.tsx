import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import NumberTicker from '@/components/ui/number-ticker'
import HeadingBlock from '@/components/ui/heading-block'
import {
  Card,
  CardContent,
  CardDescription,
  CardTags,
  CardTitle,
  CardHeader,
} from '@/components/ui/card'
import TextRevealByWord from '@/components/ui/text-reveal'
import ImageWithText from '@/components/ui/image-with-text'
import GetInTouchSection from '@/components/sections/get-in-touch'
import OurPortfolioSection from '@/components/sections/our-portfolio'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ProjectCard from '@/components/ui/project-card'
import BlogInsightsTipsSection from '@/components/sections/blog-insights-tips'

export default async function Home() {
  return (
    <main>
      <section className="relative flex flex-col justify-center bg-brown bg-[url('/_next/image?url=%2Fimages%2Fhero-section-background-1.png&w=1200&q=100')] bg-cover bg-center bg-no-repeat pt-[12rem]">
        <div className="container mb-12 xl:mb-0">
          <div className="flex flex-col justify-center space-y-8">
            <div className="header-1 text-center uppercase text-white">
              <h1>Transform Your Online Presence with a Stunning, Modern Website</h1>
            </div>
            <div className="text-center">
              <Button asChild variant="secondary">
                <Link href="/contact-us">Get Your Consultation Today</Link>
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-y-10 xl:grid-cols-5 xl:gap-x-[1.5rem] xl:gap-y-0">
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={3} />
                </span>
                <span>Free Projects Remaining</span>
              </div>
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={20} />+
                </span>
                <span>Years Combined Experience</span>
              </div>
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={5} />
                </span>
                <span>Dedicated Team Members</span>
              </div>
              <div className="col-span-4 flex flex-col space-y-1 text-center text-white md:col-span-2 xl:col-span-1 xl:text-left">
                <span className="text-[2.4rem] font-medium">
                  <NumberTicker className="text-white" value={1} />
                </span>
                <span>Building Our 1st Portfolio</span>
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
                  <Link href="/about-us">Find out more</Link>
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

      <section className="relative bg-[#041A28] bg-[url('/images/noisy-gradients.svg')] bg-cover bg-center bg-no-repeat py-16 xl:py-[7.5rem]">
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
                    <Link href="/services">Find out more</Link>
                  </Button>
                </div>
              </CardContent>
              <div className="col-span-2 hidden lg:col-span-1 lg:block">
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
                    <Link href="/services">Find out more</Link>
                  </Button>
                </div>
              </CardContent>
              <div className="col-span-2 hidden lg:col-span-1 lg:block">
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
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
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
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
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
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
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

      <section className="relative bg-[#041A28] bg-[url('/images/section-background-1.svg')] bg-cover bg-center bg-no-repeat py-16 xl:py-[6.5rem]">
        <div className="container">
          <div className="rounded-[1.5rem] bg-black px-10 py-[4rem]">
            <div className="space-y-16">
              <div className="mx-auto max-w-[700px]">
                <HeadingBlock
                  heading="What you’ll get with our web design offer"
                  subheading="Our Features"
                  headingColor="white"
                  subheadingColor="white"
                  className="text-center"
                  headingSize="sm"
                />
              </div>
              <div className="grid grid-cols-4 gap-x-6 gap-y-10">
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                  <div className="space-y-4">
                    <Image
                      src="/images/web-design-1.svg"
                      alt="Custom Design"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                    <div className="subheading mx-auto max-w-[100px] text-center font-semibold uppercase text-white">
                      <h3>Custom Design</h3>
                    </div>
                    <div className="text-center text-gray">
                      <p>We’ll build a website that’s unique to your business and brand.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                  <div className="space-y-4">
                    <Image
                      src="/images/mobile-friendly-1.svg"
                      alt="SEO-Friendly structure"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                    <div className="subheading mx-auto max-w-[160px] text-center font-semibold uppercase text-white">
                      <h3>SEO-Friendly structure</h3>
                    </div>
                    <div className="text-center text-gray">
                      <p>We’ll build a website that’s unique to your business and brand.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                  <div className="space-y-4">
                    <Image
                      src="/images/pen-tool-1.svg"
                      alt="Responsive layout"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                    <div className="subheading mx-auto max-w-[160px] text-center font-semibold uppercase text-white">
                      <h3>Responsive layout</h3>
                    </div>
                    <div className="text-center text-gray">
                      <p>Your site will look great on any device, from mobile to desktop.</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1">
                  <div className="space-y-4">
                    <Image
                      src="/images/deadline-1.svg"
                      alt="Fast & Secure"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                    <div className="subheading mx-auto max-w-[100px] text-center font-semibold uppercase text-white">
                      <h3>Fast & Secure</h3>
                    </div>
                    <div className="text-center text-gray">
                      <p>Your site will look great on any device, from mobile to desktop.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPortfolioSection />

      <section className="relative bg-brown pb-16 xl:pb-[8rem]">
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
              <Link href="/work">Learn more</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-16 xl:py-[6.3rem]">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-10">
            <div className="col-span-12 md:col-span-5">
              <HeadingBlock heading="Faq’s" headingColor="white">
                <div className="subheading uppercase text-white">
                  <p>Frequently Asked Questions</p>
                </div>
                <Button asChild variant="outline-secondary">
                  <Link href="/contact-us">Start your project</Link>
                </Button>
              </HeadingBlock>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Accordion type="single" collapsible className="w-full text-white">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What services do you offer?</AccordionTrigger>
                  <AccordionContent>
                    We offer professional website design and development services, tailored to meet
                    the needs of modern businesses. Right now, we’re offering a limited-time
                    opportunity to receive a free website design as part of our portfolio-building
                    process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does it take to design a website?</AccordionTrigger>
                  <AccordionContent>
                    Our free website offer includes a 7-10 day turnaround, so you’ll have your new,
                    fully functional website quickly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What if I need changes after the website is live?
                  </AccordionTrigger>
                  <AccordionContent>
                    We’re happy to make any minor updates free of charge, ensuring your website
                    stays fresh and accurate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you provide website hosting?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we can provide hosting services for your website, and we’ll help you get
                    everything set up so you don’t have to worry about the technical details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How does your free website design offer work?</AccordionTrigger>
                  <AccordionContent>
                    We’re offering 3 free website design projects to select businesses. In return,
                    we ask for a simple Trustpilot review and permission to showcase the website in
                    our portfolio. That’s it—no hidden fees or strings attached.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Will my new website be mobile-friendly?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! All our websites are designed to be fully responsive, so they look
                    and function beautifully on all devices—desktops, tablets, and smartphones.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>What happens after you complete my website?</AccordionTrigger>
                  <AccordionContent>
                    Once your website is live, you’ll have full control over it. We’ll also be
                    available for any additional support or questions you may have.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>What’s the catch?</AccordionTrigger>
                  <AccordionContent>
                    There’s no catch! This is a genuine offer as we’re building our portfolio. All
                    we ask in return is a Trustpilot review and permission to showcase your new
                    website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Can I see examples of your work?</AccordionTrigger>
                  <AccordionContent>
                    We’re currently building our portfolio. Once our first few projects are
                    completed, you’ll be able to see examples of our work on our website.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <BlogInsightsTipsSection />

      <GetInTouchSection />
    </main>
  )
}
