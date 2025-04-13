import "../app/globals.css"
import NekoLayout from '../components/layout'


export const metadata = {
  title: "Nekoverse",
  description: "Explore Api Test & Design",
};

export default function NekoApp({ Component, pageProps }) {
  return (
    <NekoLayout>
      <Component {...pageProps} />
    </NekoLayout>
  )
}
