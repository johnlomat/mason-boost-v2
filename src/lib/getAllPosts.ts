const getAllPosts = async () => {
  try {
    const response = await fetch(String(process.env.WORDPRESS_GRAPHQL_API), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query AllPosts {
            posts(first: 3) {
                nodes {
                    id
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                            mediaDetails {
                                height
                                width
                            }
                        }
                    }
                    title
                    excerpt
                    slug
                }
            }
        }
        `,
      }),
      next: {
        revalidate: 60,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

export default getAllPosts
