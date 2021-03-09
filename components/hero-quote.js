export default function HeroQuote() {
  return (
    <section className="relative py-10 z-10 text-center max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <div className="px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-8">
          "The DOM Called Us”
        </h2>
        <figure>
          <blockquote>
            <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6">
              The DOM chose us as creators of a new reality. Unbelievably, but
              from the moment of our first meeting with building before the
              exhibition DOM opening, passed only 19 days. During this period of
              time we filled 6 floors, more than 50 rooms with our energy.
            </p>
          </blockquote>
          <figcaption className="sm:text-xl font-medium flex flex-col items-center">
            <div className="text-gray-900 dark:text-gray-100">Anna</div>
            <div className="text-light-blue-600">Co Creator of the DOM</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
