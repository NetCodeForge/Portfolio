import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Muhammad Umar Khalid',
  description: 'Project work by Muhammad Umar Khalid.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
