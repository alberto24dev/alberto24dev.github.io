import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Alberto Dev - Full Stack Developer',
  description: 'CV web of Alberto, Full Stack Developer',
}

export default function RootPage() {
  redirect('/en')
}
