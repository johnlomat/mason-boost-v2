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
        <section className="relative bg-white pt-16">
          <div className="container space-y-12">
            <Image src={sourceUrl} alt={altText} width={width} height={height} />
            <div
              className="post-content mx-auto max-w-[780px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
