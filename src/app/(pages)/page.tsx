import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="relative flex flex-col justify-center bg-[url('/images/hero-section-background-1.png')] bg-cover bg-center bg-no-repeat pt-[12rem]">
        <div className="container">
          <div className="flex flex-col justify-center space-y-8">
            <div className="header-1 text-center uppercase text-white">
              <h1>Transform Your Online Presence with a Stunning, Modern Website</h1>
            </div>
            <div className="text-center">
              <Button variant="secondary">Get Your Consultation Today</Button>
            </div>
            <div className="grid grid-cols-5">
              <div className="col-span-1 flex flex-col space-y-1 text-white">
                <span className="text-[2.4rem] font-medium">5k+</span>
                <span>Satisfied Customers</span>
              </div>
              <div className="col-span-1 flex flex-col space-y-1 text-white">
                <span className="text-[2.4rem] font-medium">15</span>
                <span>Years Experience</span>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1 flex flex-col space-y-1 text-white">
                <span className="text-[2.4rem] font-medium">28</span>
                <span>Experienced Member</span>
              </div>
              <div className="col-span-1 flex flex-col space-y-1 text-white">
                <span className="text-[2.4rem] font-medium">1500+</span>
                <span>Successful Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -mt-10 w-full pb-[58px]">
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
    </main>
  )
}
