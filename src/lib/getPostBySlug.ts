const getPostBySlug = async (postSlug: string) => {
  try {
    const response = await fetch(String(process.env.WORDPRESS_GRAPHQL_API), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query Posts($postSlug: ID!) {
            post(idType: SLUG, id: $postSlug) {
                id
                featuredImage {
                    node {
                        id
                        altText
                        sourceUrl
                        mediaDetails {
                            width
                            height
                        }
                    }
                }
                content
                title
            }
        }
        `,
        variables: {
          postSlug: postSlug,
        },
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
    console.error('Error fetching products:', error)
  }
}

export default getPostBySlug
