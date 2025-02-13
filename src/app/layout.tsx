
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

export const metadata = {
  title: "inventnexus",
  description: "inventnexus website",
  icons: {
    icon: "/inventnexus.ico", // Default icon
    shortcut: "/inventnexus.ico",
    apple: "/pngImages/inventnexus-1.png", // Apple touch icon
  },
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  },) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
       
       <main>{children}</main>
      </body>
    </html>
  );
}


