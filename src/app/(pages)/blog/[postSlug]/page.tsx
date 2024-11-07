import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import HeroSection from '@/components/ui/hero-section'
import getPostBySlug from '@/lib/getPostBySlug'

export default async function PostPage({ params: { postSlug } }: { params: { postSlug: string } }) {
  const getPost = await getPostBySlug(postSlug)
  const postData = getPost.data.post

  if (!postData) {
    notFound()
  }

  const {
    title,
    content,
    featuredImage: {
      node: {
        sourceUrl,
        altText,
        mediaDetails: { width, height },
      },
    },
  } = postData

  return (
    <React.Fragment>
      <main>
        <HeroSection heading={title} />

        <section className="relative bg-white pb-8 pt-16 md:pb-0">
          <div className="container space-y-12">
            <Image src={sourceUrl} alt={altText} width={width} height={height} />
            <div
              className="mx-auto max-w-[780px] [&_h2]:mb-2 [&_h2]:text-[1.25rem] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:md:text-[1.5rem] [&_h2]:xl:text-[2rem] [&_p:last-child]:mb-0 [&_p]:mb-7"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
