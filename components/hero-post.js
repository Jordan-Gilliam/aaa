// import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'

export default function HeroPost({title, coverImage, slug}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      {/* <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg"></div>
        </div>
      </div> */}
    </section>
  )
}
