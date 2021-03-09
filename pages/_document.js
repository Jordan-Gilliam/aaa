import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="antialiased text-black bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
