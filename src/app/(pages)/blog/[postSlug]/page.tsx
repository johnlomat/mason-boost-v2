import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import getPostBySlug from '@/lib/getPostBySlug'
import HeroSection from '@/components/ui/hero-section'

export default async function PostPage({ params: { postSlug } }: { params: { postSlug: string } }) {
  const getPost = await getPostBySlug(postSlug)
  const postData = getPost.data.post

  if (!postData) {
    notFound()
  }

  const postTitle = postData.title
  const postContent = postData.content
  const featuredImage = postData.featuredImage.node.sourceUrl
  const featuredImageAltText = postData.featuredImage.node.altText
  const featuredImageWidth = postData.featuredImage.node.mediaDetails.width
  const featuredImageHeight = postData.featuredImage.node.mediaDetails.height

  return (
    <React.Fragment>
      <main>
        <HeroSection heading={postTitle} />
        <section className="relative bg-white pt-16">
          <div className="container space-y-12">
            <Image
              src={featuredImage}
              alt={featuredImageAltText}
              width={featuredImageWidth}
              height={featuredImageHeight}
            />
            <div
              className="post-content mx-auto max-w-[780px]"
              dangerouslySetInnerHTML={{ __html: postContent }}
            />
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
