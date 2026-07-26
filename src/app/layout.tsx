import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-six-sand-34.vercel.app"), // TODO: replace with your real domain once deployed
  title: "Kean Louise David | Junior Data Analyst & Data Scientist | Remote VA & Data Entry",
  description:
    "Computer Science graduate offering remote Data Analysis, Data Science, Virtual Assistance, and Data Entry services. Skilled in Python, SQL, Tableau, TensorFlow, and Google Workspace. Available immediately.",
  openGraph: {
    title: "Kean Louise David | Junior Data Analyst & Data Scientist",
    description:
      "Computer Science graduate offering remote Data Analysis, Data Science, Virtual Assistance, and Data Entry services. Available immediately.",
    type: "website",
    images: ["/headshot.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kean Louise David | Junior Data Analyst & Data Scientist",
    description:
      "Computer Science graduate offering remote Data Analysis, Data Science, Virtual Assistance, and Data Entry services.",
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <ScrollProgress />
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
