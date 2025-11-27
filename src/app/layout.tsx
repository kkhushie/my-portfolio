import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Senior Full-Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">{children}</body>
    </html>
  );
}