import React from 'react'
import Link from 'next/link'

import HeadingBlock from '@/components/ui/heading-block'
import { Button } from '@/components/ui/button'
import BlogPostCard, { BlogPostCardProps } from '@/components/ui/blog-post-card'
import getAllPosts from '@/lib/getAllPosts'

const BlogInsightsTipsSection = async () => {
  const allPosts = await getAllPosts()
  const postsData = allPosts.data.posts.nodes
  return (
    <React.Fragment>
      <section className="relative bg-[#041A28] bg-[url('/images/section-background-1.svg')] bg-cover bg-center bg-no-repeat py-16 xl:py-[9.25rem]">
        <div className="container">
          <div className="space-y-14">
            <div className="grid grid-cols-3 gap-y-10">
              <div className="col-span-3 md:col-span-2">
                <HeadingBlock
                  heading="Insights & Tips"
                  subheading="Blog"
                  headingColor="white"
                  subheadingColor="white"
                >
                  <div className="text-gray">
                    <p>
                      Stay updated with our latest articles on web design trends, tips, and best
                      practices. We share valuable insights to help you navigate the digital
                      landscape.
                    </p>
                  </div>
                </HeadingBlock>
              </div>
              <div className="col-span-3 flex items-center justify-start md:col-span-1 md:justify-end">
                <Button asChild variant="outline-secondary" className="uppercase">
                  <Link href="#">Find out more</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-x-7 gap-y-7 lg:grid-cols-3">
              {postsData.map((postData: BlogPostCardProps, index: number) => (
                <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1">
                  <BlogPostCard {...postData} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default BlogInsightsTipsSection
