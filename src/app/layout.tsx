import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // or just 'variable' if you prefer
  variable: '--font-poppins',    // 👈 Define custom CSS variable (optional but useful)
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Stream Verse",
  description: "All in One Streaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
