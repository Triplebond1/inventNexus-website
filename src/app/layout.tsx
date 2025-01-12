
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
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  },) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       <main>{children}</main>
      </body>
    </html>
  );
}


// import '@/app/globals.css';
// import { inter } from '@/app/ui/fonts';
 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>

//     </html>
//   );
// }