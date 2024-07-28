import { Metadata } from 'next'
import '@/public/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dev by Gauresh",
  icons: {
    icon: ['favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png?v']
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="MainBody">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
