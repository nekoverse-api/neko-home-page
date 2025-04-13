import Link from 'next/link'
import Neko from './neko'

export default function Navbar() {
  return (
    <header className='flex flex-row px-4 py-4'>
      <div>
        <Link href="/">
          <Neko width={32} />
        </Link>
      </div>

      <div className='flex-grow'></div>

      <div className=''>
        <Link className="pr-4 transition duration-300 ease-in-out hover:text-sky-700" href="/manifesto">Manifesto</Link>
        <Link className="pr-4 transition duration-300 ease-in-out hover:text-sky-700" href="/about">About</Link>
      </div>
    </header>
  )
}
