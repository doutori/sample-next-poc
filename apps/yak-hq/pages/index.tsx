import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/tailwind">Tailwind</Link>
      </li>
      <li>
        <Link href="/react-hook-form">ReactHookForm</Link>
      </li>
    </ul>
  )
}
