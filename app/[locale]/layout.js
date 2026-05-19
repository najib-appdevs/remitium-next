import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
