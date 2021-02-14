import {DOM_NAME, ARTIST_NAME} from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {ARTIST_NAME}
      </h1>
      <h3 className="text-center md:text-left text-4xl mt-5 md:pl-8">
        {DOM_NAME}.
        <a
          href="https://goo.gl/maps/AWmhCibfQLEURBuRA"
          className="underline hover:text-success duration-200 transition-colors"
        ></a>{' '}
        location
      </h3>
    </section>
  )
}
