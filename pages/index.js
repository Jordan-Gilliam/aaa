import Head from 'next/head'

import {getAllPosts} from '@/lib/api'
import {DOM_NAME} from '@/lib/constants'

import Container from '@/components/container'
import HeroPost from '@/components/hero-post'
import HeroQuote from '@/components/hero-quote'
import Layout from '@/components/layout-wrapper'
import MoreStories from '@/components/more-stories'

export default function Index({allPosts}) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      {/* <Layout> */}
      <Head>
        <title>Artemi y Anna {DOM_NAME}</title>
      </Head>
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <HeroQuote />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      {/* </Layout> */}
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}
