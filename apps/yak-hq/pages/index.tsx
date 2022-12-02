import { MainLayout } from '../src/layouts/main'
import { Button } from '../src/components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/stitches">Stitches</Link>
      </li>
    </ul>
  )
}
