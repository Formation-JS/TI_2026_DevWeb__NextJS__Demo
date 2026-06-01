import Link from 'next/link';

export default function NavBar () {
  return (
    <nav className='bg-rose-300'>
      <ul className='flex flex-row gap-2'>
        <li>
          <Link href='/'>Accueil</Link>
        </li>
        <li>
          <Link href='/artist'>Artiste</Link>
        </li>
        <li>
          <Link href='/about'>À propos</Link>
        </li>
      </ul>
    </nav>
  )
}