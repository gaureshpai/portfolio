import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gauresh's Portfolio website",
  icons: {
    icon: ['favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png?v']
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-cover bg-center overflow-x-hidden bg-[url('/background.jpg')]">
        <Navbar />
        <div className="content_body h-auto w-auto md:w-full p-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
