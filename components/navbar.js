import Link from 'next/link'

export default function Navbar(){
    return(
      <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Projects">Projects</Link>
      </li>
      <li>
        <Link href="/About">About</Link>
      </li>
    </ul>
    )
}