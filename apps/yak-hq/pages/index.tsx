import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/stitches">Stitches</Link>
        <Link href="/tailwind">Tailwind</Link>
      </li>
    </ul>
  )
}
