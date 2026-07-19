import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Muhammad Umar Khalid',
  description: 'About Muhammad Umar Khalid - Software Developer specializing in .NET Core and full-stack technologies.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
