import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Muhammad Umar Khalid',
  description: 'Get in touch with Muhammad Umar Khalid.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
