import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "Remitium - Send Money & Transfer",
  description:
    "Secure, fast, and affordable global money transfers with Remitium.",
  icons: {
    icon: "/logo/favicon.webp",
    shortcut: "/logo/favicon.webp",
    apple: "/logo/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
