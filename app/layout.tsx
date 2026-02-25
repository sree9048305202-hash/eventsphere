import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import { backgroundImage } from "html2canvas-pro/dist/types/css/property-descriptors/background-image";
import { backgroundRepeat } from "html2canvas-pro/dist/types/css/property-descriptors/background-repeat";

export const metadata: Metadata = {
  title: "EventSphere - Tech Fests & Hackathons",
  description:
    "Your gateway to inter-college technical events, hackathons, and competitions",
  icons: {
    icon: "/favico.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem={true}
        >
          <Header />
          <main className="min-h-screen" style={{ backgroundImage: "url('./bg1.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "100% auto" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
