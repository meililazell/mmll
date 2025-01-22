import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Michael and Mei Li Lazell Foundation",
  description:
    "Improving lives through targeted programs, community engagement, and sustainable initiatives that create lasting positive change.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lazelllifoundation.org",
    siteName: "Michael and Mei Li Lazell Foundation",
    title: "Michael and Mei Li Lazell Foundation",
    description:
      "Improving lives through targeted programs, community engagement, and sustainable initiatives that create lasting positive change.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MMLLFdn%20medium.jpg-tjbn936DVX3YcJCF1fWRt0Ep8xctQG.jpeg",
        width: 1200,
        height: 630,
        alt: "Michael and Mei Li Lazell Foundation Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
