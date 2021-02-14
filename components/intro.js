import {DOM_NAME, HEADING_NAME} from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="fonttext-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {HEADING_NAME}
      </h1>
      <h3 className="text-center md:text-left text-4xl mt-5 md:pl-8">
        <a
          href="https://goo.gl/maps/AWmhCibfQLEURBuRA"
          className="hover:text-red-500 duration-200 transition-colors hover:underline "
        >
          {DOM_NAME}.location
        </a>{' '}
      </h3>
    </section>
  )
}
