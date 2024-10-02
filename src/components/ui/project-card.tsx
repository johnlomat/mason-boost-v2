import Image from 'next/image'
import React from 'react'

interface ProjectCardProp {
  name: string
  date: string
  image: string
}

const ProjectCard = ({ name, date, image }: ProjectCardProp) => {
  return (
    <React.Fragment>
      <div className="overflow-hidden rounded-[1.5rem]">
        <div className="flex justify-between bg-black px-8 pb-9 pt-4">
          <div className="subheading flex items-center font-semibold uppercase text-white">
            <span className="mr-4">
              <Image
                src="/images/arrow-diagonal-icon.svg"
                alt="Arrow icon"
                width={20}
                height={20}
              />
            </span>
            <h2>{name}</h2>
          </div>
          <span className="subheading font-semibold uppercase text-white">{date}</span>
        </div>
        <div className="-mt-5 overflow-hidden rounded-t-[1.5rem]">
          <Image src={image} alt={name} width={630} height={485} quality={100} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectCard
