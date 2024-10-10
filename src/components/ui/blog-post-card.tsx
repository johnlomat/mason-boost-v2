import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface BlogPostCardProps {
  title: string
  excerpt: string
  slug: string
  featuredImage: {
    node: {
      sourceUrl: string
      altText: string
      mediaDetails: {
        width: number
        height: number
      }
    }
  }
}

const BlogPostCard = ({
  title,
  excerpt,
  slug,
  featuredImage: {
    node: {
      sourceUrl,
      altText,
      mediaDetails: { width, height },
    },
  },
}: BlogPostCardProps) => {
  return (
    <React.Fragment>
      <Link href={`/blog/${slug}`}>
        <div className="relative overflow-hidden">
          <Image src={sourceUrl} alt={altText} width={width} height={height} />
          <div className="space-y-6 bg-black p-7">
            <div className="header-5 text-white">
              <h3>{title}</h3>
            </div>
            <div className="text-gray" dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default BlogPostCard
