import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/ui/hero-section'
import HeadingBlock from '@/components/ui/heading-block'
import GetInTouchSection from '@/components/sections/get-in-touch'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/ui/project-card'
import ItemList from '@/components/ui/item-list'

export const metadata: Metadata = {
  title: 'Services | Mason Boost',
}

export default function ServicesPage() {
  return (
    <React.Fragment>
      <main>
        <HeroSection
          heading="Unlock Your Potential with Our Specialized Services"
          backgroundImage="bg-[url('/_next/image?url=%2Fimages%2Fhero-section-background-6.png&w=1200&q=100')]"
        />

        <section className="relative bg-black py-16 xl:py-[5.75rem]">
          <div className="container">
            <div className="grid grid-cols-12 gap-y-[1.5rem] md:gap-x-[1.5rem]">
              <div className="col-span-12 md:col-span-6">
                <Image
                  src="/images/Rectangle-104.png"
                  alt="Portfolio"
                  width={630}
                  height={630}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <Image
                  src="/images/Frame-378.png"
                  alt="Portfolio"
                  width={300}
                  height={630}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <Image
                  src="/images/Rectangle-107.png"
                  alt="Portfolio"
                  width={300}
                  height={630}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-black py-16 xl:py-[5.5rem]">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-[5.5rem] gap-y-6">
              <div className="col-span-2 md:col-span-1">
                <HeadingBlock
                  heading="At Mason Boost LTD"
                  headingColor="white"
                  headingSize="sm"
                  subheading="Our services"
                  subheadingColor="white"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="subheading text-gray">
                  <p>
                    We offer a comprehensive range of web design and digital services tailored to
                    help masonry businesses establish a strong online presence. Our expertise lies
                    in delivering websites that are not only visually appealing but also drive
                    tangible results for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16 xl:py-[6rem]">
          <div className="container space-y-14 md:space-y-[5rem]">
            <div className="grid grid-cols-12 gap-x-0 gap-y-7 lg:gap-x-[2.5rem] xl:gap-x-[5rem]">
              <div className="col-span-12 lg:col-span-7">
                <Image
                  src="/images/Rectangle-113.png"
                  alt="Custom Website Design"
                  width={661}
                  height={665}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 flex flex-col justify-center lg:col-span-5">
                <HeadingBlock heading="Custom Website Design" headingSize="sm">
                  <div className="space-y-6">
                    <div className="body-text space-y-6">
                      <p>
                        We specialize in creating custom, responsive websites designed to showcase
                        the unique craftsmanship of your masonry business. Whether you need a
                        brand-new site or a complete redesign, we’ll work with you to develop a
                        website that highlights your services, completed projects, and expertise.
                      </p>
                      <div className="space-y-2">
                        <p>
                          <strong>What You Get:</strong>
                        </p>
                        <ItemList
                          items={[
                            'Fully customized website tailored to your business',
                            'Mobile-friendly and responsive design for all devices',
                            'Modern, clean layout to attract and retain visitors',
                          ]}
                          useIcon
                        />
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact-us">Get Started</Link>
                    </Button>
                  </div>
                </HeadingBlock>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-0 gap-y-7 lg:gap-x-[2.5rem] xl:gap-x-[5rem]">
              <div className="col-span-12 lg:order-2 lg:col-span-7">
                <Image
                  src="/images/seo-services-image.png"
                  alt="Search Engine Optimization (SEO)"
                  width={661}
                  height={665}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 flex flex-col justify-center lg:order-1 lg:col-span-5">
                <HeadingBlock heading="Search Engine Optimization (SEO)" headingSize="sm">
                  <div className="space-y-6">
                    <div className="body-text space-y-6">
                      <p>
                        A beautifully designed website means nothing if it can’t be found. We
                        incorporate SEO best practices to ensure that your masonry website ranks
                        higher on search engines, helping potential clients find your business
                        easily. projects, and expertise.
                      </p>
                      <div className="space-y-2">
                        <p>
                          <strong>SEO Features Include:</strong>
                        </p>
                        <ItemList
                          items={[
                            'Keyword optimization for masonry services',
                            'Local SEO to attract customers in your area',
                            'On-page optimization and site performance enhancements',
                          ]}
                          useIcon
                        />
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact-us">Get Started</Link>
                    </Button>
                  </div>
                </HeadingBlock>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-0 gap-y-7 lg:gap-x-[2.5rem] xl:gap-x-[5rem]">
              <div className="col-span-12 lg:col-span-7">
                <Image
                  src="/images/portfolio-showcasing-image.png"
                  alt="Portfolio Showcasing"
                  width={661}
                  height={665}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 flex flex-col justify-center lg:col-span-5">
                <HeadingBlock heading="Portfolio Showcasing" headingSize="sm">
                  <div className="space-y-6">
                    <div className="body-text space-y-6">
                      <p>
                        Showcase your best masonry projects with a dedicated portfolio section that
                        highlights your craftsmanship and builds credibility with potential clients.
                        We design portfolio pages that are easy to update and present your work in a
                        visually compelling way.
                      </p>
                      <div className="space-y-2">
                        <p>
                          <strong>Portfolio Features Include:</strong>
                        </p>
                        <ItemList
                          items={[
                            'High-quality project galleries',
                            'Before-and-after project displays',
                            'Detailed descriptions of services for each project',
                          ]}
                          useIcon
                        />
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact-us">Get Started</Link>
                    </Button>
                  </div>
                </HeadingBlock>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-0 gap-y-7 lg:gap-x-[2.5rem] xl:gap-x-[5rem]">
              <div className="col-span-12 lg:order-2 lg:col-span-7">
                <Image
                  src="/images/lead-generations-image.png"
                  alt="Lead Generation & Contact Forms"
                  width={661}
                  height={665}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 flex flex-col justify-center lg:order-1 lg:col-span-5">
                <HeadingBlock heading="Lead Generation & Contact Forms" headingSize="sm">
                  <div className="space-y-6">
                    <div className="body-text space-y-6">
                      <p>
                        Your website should work for you 24/7. We integrate lead generation tools
                        like contact forms and booking requests to ensure that potential clients can
                        easily get in touch with you. Our designs are optimized to drive inquiries
                        and help you convert website visitors into clients.
                      </p>
                      <div className="space-y-2">
                        <p>
                          <strong>Lead Generation Features:</strong>
                        </p>
                        <ItemList
                          items={[
                            'User-friendly contact forms',
                            'Call-to-action buttons placed strategically',
                            'Custom inquiry and booking options',
                          ]}
                          useIcon
                        />
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact-us">Get Started</Link>
                    </Button>
                  </div>
                </HeadingBlock>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-0 gap-y-7 lg:gap-x-[2.5rem] xl:gap-x-[5rem]">
              <div className="col-span-12 lg:col-span-7">
                <Image
                  src="/images/website-maintenance-image.png"
                  alt="Website Maintenance & Support"
                  width={661}
                  height={665}
                  className="w-full"
                />
              </div>
              <div className="col-span-12 flex flex-col justify-center lg:col-span-5">
                <HeadingBlock heading="Website Maintenance & Support" headingSize="sm">
                  <div className="space-y-6">
                    <div className="body-text space-y-6">
                      <p>
                        Once your website is live, we don’t just leave you hanging. We offer ongoing
                        website maintenance and support services to ensure that your site remains
                        updated, secure, and optimized. Whether you need content updates, security
                        enhancements, or performance monitoring, we’ve got you covered.
                      </p>
                      <div className="space-y-2">
                        <p>
                          <strong>Maintenance Services Include:</strong>
                        </p>
                        <ItemList
                          items={[
                            'Regular updates and backups',
                            'Security monitoring',
                            'Performance improvements and bug fixes',
                          ]}
                          useIcon
                        />
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact-us">Get Started</Link>
                    </Button>
                  </div>
                </HeadingBlock>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-black py-16">
          <div className="container">
            <div className="space-y-14">
              <div className="grid grid-cols-3 gap-y-10">
                <div className="col-span-3 md:col-span-2">
                  <HeadingBlock heading="Related Articles" headingColor="white" headingSize="md" />
                </div>
                <div className="col-span-3 flex items-center justify-start md:col-span-1 md:justify-end">
                  <Button asChild variant="outline-secondary" className="uppercase">
                    <Link href="#">Find out more</Link>
                  </Button>
                </div>
              </div>
              <div className="mb-10 grid grid-cols-3 gap-x-7 gap-y-7 md:gap-y-[4rem] xl:mb-[4.5rem]">
                <div className="col-span-3 md:col-span-1">
                  <div className="space-y-6">
                    <Image
                      src="/images/Rectangle-116.png"
                      alt="Article 1"
                      width={411}
                      height={280}
                    />
                    <HeadingBlock
                      heading="[Title and brief description]"
                      headingSize="subheading"
                      headingColor="gray"
                      headingTextCase="normal"
                    />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <div className="space-y-6">
                    <Image
                      src="/images/Rectangle-117.png"
                      alt="Article 2"
                      width={411}
                      height={280}
                    />
                    <HeadingBlock
                      heading="[Title and brief description]"
                      headingSize="subheading"
                      headingColor="gray"
                      headingTextCase="normal"
                    />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <div className="space-y-6">
                    <Image
                      src="/images/Rectangle-118.png"
                      alt="Article 3"
                      width={411}
                      height={280}
                    />
                    <HeadingBlock
                      heading="[Title and brief description]"
                      headingSize="subheading"
                      headingColor="gray"
                      headingTextCase="normal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16 xl:py-[5.8rem]">
          <div className="container">
            <div className="mx-auto max-w-[65rem]">
              <HeadingBlock
                heading="Ready to elevate your masonry business with a professional, high-performing website?"
                className="text-center"
              >
                <div className="body-text mx-auto max-w-[43.75rem] text-center">
                  <p>
                    Contact us today to schedule a free consultation and learn more about how we can
                    help grow your business online.
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

        <section className="relative bg-brown py-16">
          <div className="container">
            <div className="space-y-14">
              <div className="grid grid-cols-3 gap-y-10">
                <div className="col-span-3 md:col-span-2">
                  <HeadingBlock heading="Related Projects" headingColor="white" headingSize="md" />
                </div>
                <div className="col-span-3 flex items-center justify-start md:col-span-1 md:justify-end">
                  <Button asChild variant="outline-secondary">
                    <Link href="/work">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mb-10 grid grid-cols-2 gap-x-7 gap-y-7 md:gap-y-[4rem] xl:mb-[4.5rem]">
                <div className="col-span-2 md:col-span-1">
                  <ProjectCard
                    name="Project Name"
                    date="2024"
                    image="/images/project-1-image.png"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <ProjectCard
                    name="Project Name"
                    date="2024"
                    image="/images/project-2-image.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <GetInTouchSection />
      </main>
    </React.Fragment>
  )
}
